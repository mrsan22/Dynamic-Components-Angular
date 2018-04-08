import { Component, ViewChild } from '@angular/core';
import { WidgetContainerComponent } from './widget-container.component';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';
import { WidgetComponent } from './widget.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  widget1Data = {
    widgetId: 1,
    widgetNum: 1,
    widgetTitle: 'Widget1'
  };
  widget2Data = {
    widgetId: 2,
    widgetNum: 2,
    widgetTitle: 'Widget2'
  };
  @ViewChild('dynamicWidget1') widget1ComponentTemplate;
  @ViewChild('dynamicWidget2') widget2ComponentTemplate;
  @ViewChild(WidgetContainerComponent) widgetContainerComponent: WidgetContainerComponent;

  addWidget(widgetNumber: number) {
    switch (widgetNumber) {
      case 1: {
        this.widgetContainerComponent.addWidget(this.widget1ComponentTemplate, this.widget1Data);
        break;
      }
      case 2: {
        this.widgetContainerComponent.addWidget(this.widget2ComponentTemplate, this.widget2Data);
        break;
      }
      default: {
        break;
      }
    }
  }
  
  closeWidget(uniqueWidgetId: number) {
    this.widgetContainerComponent.closeWidget(uniqueWidgetId);
  }
}
