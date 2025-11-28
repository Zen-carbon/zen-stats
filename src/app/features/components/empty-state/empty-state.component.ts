import { Component, effect, model, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-empty-state',
  imports: [ButtonModule],
  templateUrl: './empty-state.component.html',
  styles: ``,
})
export class EmptyStateComponent {
  title: string = 'No Data Available';
  description: string = 'There is currently no Zen data to display.';
  actionText: string = 'Reload';
  hasActionContent: boolean = false;
  customIcon: boolean = false;
  reload = output<boolean>();
}
