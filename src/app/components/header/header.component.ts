import {
  Component,
  effect,
  inject,
  model,
  output,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../features/pages/login/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  sidebarVisible = model(false);
  username = inject(AuthService).currentUser;
  private logout = inject(AuthService).logout;
  loading = signal(false);

  
  logOut() {
    this.loading.set(true);
    this.logout()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => {},
        error: (err) => {
          console.error('Logout failed', err);
        },
      });
  }
}
