/**
 * Created by ivanchan on 21/11/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IUser } from '../model/user.model';
import { Observable } from 'rxjs/Observable';
import {ILoginDetail, ILoginResult} from "../model/login.model";
import {SharedService} from "./shared.service";

@Injectable()
export class UserService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, _sharedService: SharedService) {
    this.apiPath = 'user';
    this.apiUrl = _sharedService.apiHost + this.apiPath;
  }

  getUser(userKey: string ) : Observable<IUser> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.apiUrl + '/' + userKey, options)
      .map((res: Response) => {
        return res.json();
      })
      ._catch(this.handleError);
  }

  listUsers() : Observable<Array<IUser>> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.apiUrl, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  addUser(user: IUser) : Observable<IUser> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify(user);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apiUrl, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  updateUser(user: IUser) : Observable<IUser> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify(user);
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.apiUrl + '/' + user.userKey, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  deleteUser(userKey: string) : Observable<void> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.apiUrl + '/' + userKey, options)
      .map((res: Response) => {
        return;
      })
      .catch(this.handleError);
  }

  checkLogin(loginModel: ILoginDetail) : Observable<ILoginResult> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify(loginModel);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apiUrl, body, options)
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
