import { Component, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';

import { DynamicWidgetAnchorDirective } from './dynamic-widget-anchor.directive';
import { WidgetComponent } from './widget.component';

@Component({
  selector: 'app-widget-container',
  template: `
    <!-- Placeholder to add all the widgets dynamically-->
    <div fxLayout fxLayoutGap="10px">
      <ng-template  appDynamicWidgetAnchor></ng-template>
    </div>
  `
})
export class WidgetContainerComponent {
  @Input() template;
  @Input() dataContext;

  @ViewChild(DynamicWidgetAnchorDirective) dynamicWidgetPlaceholder: DynamicWidgetAnchorDirective;
  // Keep track of all the widget component
  dynamicWidgetComponents: WidgetComponent[] = [];
  wid = 0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addWidget(template, data) {
    // create a factory and pass on the component (which you want to create dynamically). In this case it is `WidgetComponent`.
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WidgetComponent);
    // This allows to attach componens dynamically - ViewContainerRef
    const viewContainerRef = this.dynamicWidgetPlaceholder.viewContainer;
    // Reference to a component i.e. componentRef instance
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // To get the instance of our widget component instance
    const instance: WidgetComponent = componentRef.instance as WidgetComponent;
    // provide all the required data
    instance.dataContext = data;
    instance.template = template;
    instance.uniqueWidgetId = this.wid;
    this.wid += 1;

    // Add the widget component instance here.
    this.dynamicWidgetComponents.push(instance);
  }

  closeWidget(uniqueWidgetId: number) {
    for (let idx = 0; idx < this.dynamicWidgetComponents.length; idx++) {
      if (this.dynamicWidgetComponents[idx].uniqueWidgetId === uniqueWidgetId) {
        this.dynamicWidgetComponents.splice(idx, 1);
        // delete component to prevent memoryleak
        const viewContainerRef = this.dynamicWidgetPlaceholder.viewContainer;
        viewContainerRef.remove(idx);
      }
    }
  }
}
