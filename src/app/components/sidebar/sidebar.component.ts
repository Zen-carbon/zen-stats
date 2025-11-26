import { Component, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  visible = model(false);
  logOut() {}
}
