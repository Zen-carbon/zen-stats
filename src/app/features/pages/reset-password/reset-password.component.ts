import { Component, effect, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Password } from 'primeng/password';
import { ResetPasswordService } from './reset-password.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  imports: [Password, ButtonModule, ReactiveFormsModule, Message],
  templateUrl: './reset-password.component.html',
  styles: ``,
  providers: [MessageService],
})
export class ResetPasswordComponent {
  loading = signal(false);
  resetPasswordForm!: FormGroup;
  token = '';
  errorMessage = signal('ss');
  password = signal('');
  confirmPassword = signal('');

  private fb = inject(FormBuilder);
  private resetPasswordService = inject(ResetPasswordService);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  constructor() {
    this.initiateForm();
    effect(() => {
      this.validatePasswords();
    });
  }

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  initiateForm() {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  validatePasswords = () => {
    if (this.password() !== this.confirmPassword()) {
      this.errorMessage.set('Passwords do not match');
    } else {
      this.errorMessage.set('');
    }
  };

  onSubmit = () => {
    if (this.resetPasswordForm.invalid) return;

    const { password, confirmPassword } = this.resetPasswordForm.value;
    this.loading.set(true);

    this.resetPasswordService
      .resetPassword(password, this.token)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Password has been reset successfully.',
          });
          window.location.href = '/login';
          this.resetForm();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An error occurred while resetting password.',
          });
        },
      });
  };

  private resetForm = () => {
    this.resetPasswordForm.reset();
  };
}
