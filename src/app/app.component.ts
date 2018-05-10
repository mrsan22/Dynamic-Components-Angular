import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgGrid } from 'ng2-grid-component';
import { WidgetContainerComponent } from './widget-container.component';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
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

  // default values for all the configs
  public customConfig = {
    maxCol: 5,
    maxRow: 5,
    theme: 'light',
    colWidth: 250,
    rowHeight: 180,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    minWidth: 1,
    minHeight: 1,
    maxWidth: -1,
    maxHeight: -1
  };

  // Example of custom config  - restricting min height and width
  // public customConfig = {
  //   minWidth: 3,
  //   minHeight: 3,
  //   colWidth: 250,
  //   rowHeight: 150,
  //   maxRow: 4,
  //   maxCol: 6,
  //   theme: 'light'
  // };

  @ViewChild('dynamicWidget1') widget1ComponentTemplate;
  @ViewChild('dynamicWidget2') widget2ComponentTemplate;
  @ViewChild(WidgetContainerComponent) widgetContainerComponent: WidgetContainerComponent;
  @ViewChild(NgGrid) grid: NgGrid;

  ngOnInit() {}

  ngAfterViewInit() {
    // Place to pre populate grid with a number of widgets.
    //  for (const widget of widgets) {
    //   const widget = this.grid.addWidget();
    //   widget.innerComponent = widget.component;
    //   widget.widgetTitle = widget.title;
    // }
  }

  addWidget(widgetNumber: number) {
    switch (widgetNumber) {
      case 1: {
        // this.widgetContainerComponent.addWidget(this.widget1ComponentTemplate, this.widget1Data);
        const widget = this.grid.addWidget();
        widget.innerComponent = Widget1Component;
        widget.widgetTitle = 'Widget 1';
        break;
      }
      case 2: {
        // this.widgetContainerComponent.addWidget(this.widget2ComponentTemplate, this.widget2Data);
        const widget = this.grid.addWidget();
        widget.innerComponent = Widget2Component;
        widget.widgetTitle = 'Widget 2';
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
