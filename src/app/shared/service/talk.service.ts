/**
 * Created by ivanchan on 29/11/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IChatMessage} from "../model/chatmessage.model";
import {SharedService} from "./shared.service";

@Injectable()
export class TalkService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, private _sharedService: SharedService) {
    this.apiPath = 'talk';
    this.apiUrl = _sharedService.apiHost + this.apiPath;
  }

  sendChatMessage(chatMessage: IChatMessage): Observable<IChatMessage> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify(chatMessage);
    let options = new RequestOptions({headers: headers});
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
