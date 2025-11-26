import { Component, effect, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  visible = false;
}
