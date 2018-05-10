import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AngularDraggableModule } from 'angular2-draggable';
import { GridModule } from 'ng2-grid-component';
import { NgDraggableWidgetModule } from 'ngx-draggable-widget';
import { AppComponent } from './app.component';
import { DynamicWidgetAnchorDirective } from './dynamic-widget-anchor.directive';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetComponent } from './widget.component';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';
@NgModule({
  declarations: [
    AppComponent,
    Widget1Component,
    Widget2Component,
    WidgetComponent,
    WidgetContainerComponent,
    DynamicWidgetAnchorDirective
  ],
  imports: [
    NgDraggableWidgetModule,
    BrowserModule,
    MatCardModule,
    FlexLayoutModule,
    AngularDraggableModule,
    GridModule
  ],
  providers: [],
  entryComponents: [WidgetComponent, Widget1Component, Widget2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
