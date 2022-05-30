import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mergeMap, of, zip} from "rxjs";
import { CloudBaseService } from './cloud-base.service';
import cloudbase from "@cloudbase/js-sdk";
import {state} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private cloudBaseService: CloudBaseService
  ) {}
  switchValue = false
  loginValue = ''
  a: number = 0
  b: number = 0
  res: number = 0
  loginState: cloudbase.auth.ILoginState | null = null
  ngOnInit() {
    this.cloudBaseService.userState$.subscribe(state => this.loginState = state)
    this.cloudBaseService.loginState$.subscribe(state => this.loginState = state)
  }
  login() {
    this.cloudBaseService.token$.next(this.loginValue)
  }
  callAdd() {
    if (this.loginState === null) return
    this.cloudBaseService.add(this.a,this.b).subscribe( res => this.res = res)
  }

  sayHi() {
    alert("hi")
  }
}
