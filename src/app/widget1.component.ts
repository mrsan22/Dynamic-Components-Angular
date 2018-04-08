import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget1',
  template: `
   <mat-card fxFlex="33%%">
      <mat-card-header>
        <mat-card-title>{{data?.widgetTitle}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>I am widget {{data?.widgetNumber}} and created dynamically here. I will be draggable in future.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>Remove</button>
        <button mat-button>Submit</button>
      </mat-card-actions>
    </mat-card>
  `
})
export class Widget1Component {
  @Input()
  data: object = {
    widgetTitle: '',
    widgetNumber: ''
  };
}
