import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-widget2',
  template: `
   <mat-card fxFlex="33%%">
      <mat-card-header>
        <mat-card-title>Widget2</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>I am widget {{widgetNumber}} and created dynamically here. I will be draggable in future.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>Remove</button>
        <button mat-button>Submit</button>
      </mat-card-actions>
    </mat-card>
  `
})
export class Widget2Component {
  @Input() widgetNumber;
}
