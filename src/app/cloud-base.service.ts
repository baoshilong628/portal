import {Injectable, OnInit} from '@angular/core';
import  cloudbase from "@cloudbase/js-sdk";
import {HttpClient} from "@angular/common/http";
import {
  concat, debounceTime,
  from, map,
  mergeMap,
  Observable,
  partition, Subject,
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudBaseService {
  private readonly app:cloudbase.app.App
  private readonly auth:cloudbase.auth.App
  public token$: Subject<string> = new Subject<string>()
  constructor(
    private httpClient: HttpClient
  ) {
    this.app = cloudbase.init({
      env:'hello-cloudbase-9gqoy9eeaaabdb67'
    })
    this.auth = this.app.auth({
      persistence: 'local'
    })
  }
  login(token:string): Observable<cloudbase.auth.ILoginState | null>{
    const [logged, notLogged] = partition(from(this.auth.getLoginState()), state => state !== null)
    const logIn = notLogged.pipe(
      mergeMap(()=>this.httpClient.get('https://hello-cloudbase-9gqoy9eeaaabdb67-1259566007.ap-shanghai.app.tcloudbase.com/login?token=' + token, {
        responseType: 'text'
      })),
      mergeMap(ticket => this.signInWithTicket(ticket))
    )
    return concat(logged,logIn)
  }
  signInWithTicket(ticket: string): Observable<cloudbase.auth.ILoginState> {
    return from(this.auth.customAuthProvider().signIn(ticket))
  }
  get userState$(): Observable<cloudbase.auth.ILoginState | null> {
    return from(this.auth.getLoginState())
  }
  get loginState$(): Observable<cloudbase.auth.ILoginState | null> {
    return this.token$.pipe(
      debounceTime(1000),
      mergeMap(token => this.login(token))
    )
  }
  add(a:number,b:number): Observable<number> {
    return from(this.app.callFunction({
      name: 'add',
      data: {a,b}
    })).pipe(
      map(response => response.result as number)
    )
  }
}


