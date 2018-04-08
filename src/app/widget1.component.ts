import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-widget1',
  template: `
   <mat-card ngDraggable fxFlex="33%%">
      <mat-card-header>
        <mat-card-title>{{data?.widgetTitle}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>I am widget {{data?.widgetNumber}} and created dynamically here. I will be draggable in future.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="closeWidget(data.widgetId)">Remove</button>
        <button mat-button>Submit</button>
      </mat-card-actions>
    </mat-card>
  `
})
export class Widget1Component {
  @Input()
  data: object = {
    widgetId: 1,
    widgetTitle: '',
    widgetNumber: ''
  };

  @Output() onCloseWidget = new EventEmitter<number>();

  closeWidget() {
    this.onCloseWidget.emit(this.data['widgetId']);
  }
}
