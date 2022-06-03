import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NoteDirective} from "./note.directive";

@Component({
  selector: 'app-note',
  styleUrls: ['./note.component.scss'],
  templateUrl: './note.component.html',
})
export class NoteComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {

  }
}
