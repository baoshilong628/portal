import {NgModule} from "@angular/core";
import {NoteComponent} from "./note.component";
import {NoteDirective} from "./note.directive";
import {Note1Component} from "./1.搭建自己的免费小博客/note1.component";
import {RouterModule} from "@angular/router";
import {DlcButtonModule, DlcCardModule, DlcSwitchModule, DlcTagModule} from "@dream_light_color/ng-dlc";
import {Note2Component} from "./2.Angular组件/note2.component";

const declarationsAndExports = [
  Note1Component,
  Note2Component,
  NoteComponent,
  NoteDirective
]
@NgModule({
  imports: [
    RouterModule,
    DlcButtonModule,
    DlcCardModule,
    DlcSwitchModule,
    DlcTagModule
  ],
  declarations: declarationsAndExports,
  exports: declarationsAndExports
})
export class AppNoteModule { }
