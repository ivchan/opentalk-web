import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ILoginDetail} from "../model/login.model";
import {SharedService} from "./shared.service";

@Injectable()
export class LoginService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, private _sharedService: SharedService) {
    this.apiPath = 'authenticate';
    this.apiUrl = _sharedService.apiHost + this.apiPath;
  }

  submitLogin(login: ILoginDetail) : Observable<string> {
    let headers = new Headers();
    //let body = JSON.stringify(login);
    let body = '';
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Accept', 'application/json');
    headers.append('X-Auth-Username', login.loginName);
    headers.append('X-Auth-Password', login.loginPassword);
    headers.append('X-Auth-Token', '');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apiUrl, body, options )
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
