import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-widget1',
  template: `
   <mat-card fxFlex="33%%">
      <mat-card-header>
        <mat-card-title>{{data?.widgetTitle}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>I am widget {{data?.widgetNum}} and created dynamically here. I am draggable too.</p>
      </mat-card-content>
    </mat-card>
  `
})
export class Widget1Component {
  // All the data should be contained within this Component if we use it with ng-Grid.
  @Input()
  data: object = {
    widgetId: 1,
    widgetTitle: '',
    widgetNumber: ''
  };
  @Input() uniqueWidgetId: number;

  @Output() onCloseWidget = new EventEmitter<number>();

  closeWidget() {
    this.onCloseWidget.emit(this.uniqueWidgetId);
  }
}
