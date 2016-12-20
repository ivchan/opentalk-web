/**
 * Created by ivanchan on 23/11/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IChannel} from "../model/channel.model";
import {SharedModule} from "../shared.module";
import {SharedService} from "./shared.service";

@Injectable()
export class ChannelService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, private _sharedService: SharedService) {
    this.apiPath = 'channel';
    this.apiUrl = _sharedService.apiHost + this.apiPath;
  }

  public getChannel(channelKey: string): Observable<IChannel> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl + '/' + channelKey, options)
      .map((res: Response) => {
        return <IChannel>res.json();
      })
      .catch(this.handleError);
  }

  listChannels(): Observable<Array<IChannel>> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  listPublicChannels(): Observable<Array<IChannel>> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl + '_public', options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  listPrivateChannels(): Observable<Array<IChannel>> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl + '_private', options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  addChannel(channel: IChannel): Observable<IChannel> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(channel);
    let options = new RequestOptions({headers: headers});
    return this._http.post(this.apiUrl, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  updateChannel(channel: IChannel): Observable<IChannel> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(channel);
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.apiUrl + '/' + channel.channelKey, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  deleteChannel(channelKey: string): Observable<void> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.apiUrl + '/' + channelKey, options)
      .map((res: Response) => {
        return;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
