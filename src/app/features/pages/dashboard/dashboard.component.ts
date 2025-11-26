import { Component } from '@angular/core';
import { DeviceCardComponent } from '../../components/device-card/device-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DeviceCardComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {}
