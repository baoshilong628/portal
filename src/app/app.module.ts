import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CusBtnModule} from "@dream_light_color/cus-btn";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CusBtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
