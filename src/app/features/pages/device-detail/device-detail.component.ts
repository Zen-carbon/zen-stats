import { Component, effect, input, OnInit } from '@angular/core';
import chart, { Chart } from 'chart.js/auto';
import { SensorValueComponent } from '../../components/sensor-value/sensor-value.component';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-device-detail',
  imports: [SensorValueComponent, SelectModule],
  templateUrl: './device-detail.component.html',
  styles: ``,
})
export class DeviceDetailComponent {
  deviceId = input.required<string>();
  chart!: Chart;

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = new chart('deviceChart', {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'June',
          'July',
          'June',
          'July',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Device Data',
            data: [65, 59, 80, 81, 56, 55, 55, 55, 55, 55, 55, 55, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Device Data Over Time',
          },
        },
      },
    });
  }
}
