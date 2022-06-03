import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {NoteComponent} from "./note/note.component";
import {Note1Component} from "./note/1.搭建自己的免费小博客/note1.component";
import { Note2Component } from './note/2.Angular组件/note2.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'note', component: NoteComponent, children: [
      {
        path: '1',
        component: Note1Component
      },
      {
        path: '2',
        component: Note2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
