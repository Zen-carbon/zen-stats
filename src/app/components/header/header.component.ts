import { Component, effect, model, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  sidebarVisible = model(false);
  logOut() {}
}
