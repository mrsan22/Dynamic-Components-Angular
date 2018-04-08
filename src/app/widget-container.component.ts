import { Component, ViewChild, Input } from '@angular/core';
import { DynamicWidgetAnchorDirective } from './dynamic-widget-anchor.directive';
@Component({
  selector: 'app-widget-container',
  template: `
    <ng-container [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{data: dataContext}"></ng-container>
    <!-- Placeholder to add all the widgets dynamically-->
    <ng-template appDynamicWidgetAnchor></ng-template>
  `
})
export class WidgetContainerComponent {
  @Input() template;
  @Input() dataContext;

  @ViewChild(DynamicWidgetAnchorDirective) dynamicWidgetPlaceholder: DynamicWidgetAnchorDirective;

  addWidget() {
    console.log(this.dynamicWidgetPlaceholder.viewContainer);
  }
}
