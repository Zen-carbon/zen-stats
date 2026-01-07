import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./features/pages/reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent
      ),
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./features/routes').then((m) => m.routes),
  },
];
