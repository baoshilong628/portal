import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DlcSwitchModule, DlcTagModule, DlcButtonModule, DlcCardModule} from "@dream_light_color/ng-dlc";
import { IndexComponent } from './index/index.component';
import {AppNoteModule} from "./note/note.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DlcSwitchModule,
    DlcButtonModule,
    DlcTagModule,
    DlcCardModule,
    AppNoteModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
