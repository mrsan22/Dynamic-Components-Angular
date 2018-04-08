import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';
import { WidgetComponent } from './widget.component';
import { WidgetContainerComponent } from './widget-container.component';
import { DynamicWidgetAnchorDirective } from './dynamic-widget-anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    Widget1Component,
    Widget2Component,
    WidgetComponent,
    WidgetContainerComponent,
    DynamicWidgetAnchorDirective
  ],
  imports: [BrowserModule, MatCardModule, FlexLayoutModule],
  providers: [],
  entryComponents: [WidgetComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
