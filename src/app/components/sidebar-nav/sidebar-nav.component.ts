import { Component, signal } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-sidebar-nav',
  imports: [MenuModule, RouterLink, RouterLinkActive, Divider],
  templateUrl: './sidebar-nav.component.html',
  styles: ``,
})
export class SidebarNavComponent {
  items = signal([
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
    { label: 'Device', icon: 'pi pi-tablet', routerLink: '/devices' },
    { label: 'Reactor', icon: 'pi pi-cog', routerLink: '/reactors' },
    {
      label: 'Batch Experiment',
      icon: 'pi pi-sliders-h',
      routerLink: '/batch-experiments',
    },
  ]);
}
