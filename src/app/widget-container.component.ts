import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  template: `
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  `
})
export class WidgetContainerComponent {
  @Input() template;
}
