import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mergeMap, of, zip} from "rxjs";
import { CloudBaseService } from './cloud-base.service';
import cloudbase from "@cloudbase/js-sdk";
import {state} from "@angular/animations";
import {BlogInfo, BlogListService} from './blog-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
}
