import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MastheadComponent } from './masthead/masthead.component';
import { DesignerComponent } from './designer/designer.component';
import { MouseWheelDirective } from './mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseWheelDirective,
    MastheadComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
