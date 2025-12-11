import { Component, effect, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    SidebarNavComponent,
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  visible = false;
}
