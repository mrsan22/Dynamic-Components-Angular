import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
  <ng-container [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{data: dataContext,
    uniqueWidgetId: uniqueWidgetId}"></ng-container>
  `
})
export class WidgetComponent {
  @Input() template: number;
  @Input() dataContext: number;
  @Input() uniqueWidgetId: number;
}
