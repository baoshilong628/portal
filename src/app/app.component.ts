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
    private httpClient: HttpClient,
  ) {
  }
  switchValue = false
  ngOnInit() {
    of(new Date().getTime())
      .pipe(
        mergeMap(date => zip(
          this.httpClient.get('/index.html?v='+date),
          this.httpClient.get('/main.js?v='+date),
          this.httpClient.get('/polyfills.js?v='+date),
          this.httpClient.get('/runtime.js?v='+date),
          this.httpClient.get('/style.css?v='+date)
        ))
      ).subscribe(_ => location.reload())
  }
}
