import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CusBtnModule} from "@dream_light_color/cus-btn";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CusBtnModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/dream-light-color'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
