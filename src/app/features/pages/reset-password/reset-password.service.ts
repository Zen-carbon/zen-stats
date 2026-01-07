import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  private http = inject(HttpClient);
  private apiUrl = import.meta.env.NG_APP_APIURL;

  resetPassword = (password: string, token: string): Observable<void> => {
    return this.http
      .post<void>(`${this.apiUrl}/reset-password?token=${token}`, { password })
      .pipe(
        catchError((error) => {
          console.error('Error resetting password:', error);
          throw new Error(`Error resetting password: ${error.error.message}`);
        })
      );
  };
}
