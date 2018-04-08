import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  template: `
    <ng-container [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{data: dataContext}"></ng-container>
    <ng-template></ng-template>
  `
})
export class WidgetContainerComponent {
  @Input() template;
  @Input() dataContext;
}
