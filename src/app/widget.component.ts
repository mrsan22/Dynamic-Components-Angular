import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
  <ng-container [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{data: dataContext}"></ng-container>
  `
})
export class WidgetComponent {
  @Input() template: number;
  @Input() dataContext: number;
}
