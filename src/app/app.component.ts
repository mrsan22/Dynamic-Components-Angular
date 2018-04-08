import { Component, ViewChild } from '@angular/core';
import { WidgetContainerComponent } from './widget-container.component';
import { Widget1Component } from './widget1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  widget1Data = {
    widgetNum: 1,
    widgetTitle: 'Widget1'
  };
  @ViewChild('dynamicWidget') widget1ComponentTemplate;
  @ViewChild(WidgetContainerComponent) widgetContainerComponent: WidgetContainerComponent;

  addWidget() {
    this.widgetContainerComponent.addWidget(this.widget1ComponentTemplate, this.widget1Data);
  }
}
