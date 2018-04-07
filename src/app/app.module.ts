import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';
import { WidgetContainerComponent } from './widget-container.component';

@NgModule({
  declarations: [AppComponent, Widget1Component, Widget2Component, WidgetContainerComponent],
  imports: [BrowserModule, MatCardModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
