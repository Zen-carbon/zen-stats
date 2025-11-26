import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-sensor-value',
  imports: [TableModule],
  templateUrl: './sensor-value.component.html',
  styles: ``,
})
export class SensorValueComponent {
  products = [
    { sensor: 'Temperature', value: '22°C', status: 'Normal' },
    { sensor: 'Humidity', value: '45%', status: 'Normal' },
    { sensor: 'Pressure', value: '1013 hPa', status: 'Normal' },
    { sensor: 'Light', value: '300 lx', status: 'Normal' },
  ];
}
