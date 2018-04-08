/**
 * Anchor point to render dynamic components
 * ViewContainerRef - Allows us to create component dynamically
 */
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicWidgetAnchor]'
})
export class DynamicWidgetAnchorDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
