import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mergeMap, of, zip} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
  ) {
  }
  switchValue = false
  ngOnInit() {
  }
}
