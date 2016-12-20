//https://bitbucket.org/tomask79/angular2-spring-stomp/overview

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'stompjs';
import {IChatMessage} from "../model/chatmessage.model";

declare let Stomp:any;

@Injectable()
export class StompService {

  private _stompClient;
  private _stompSubject : Subject<any> = new Subject<any>();

  public connect(_webSocketUrl: string) : void {
    let self = this;
    let webSocket = new WebSocket(_webSocketUrl);
    this._stompClient = Stomp.over(webSocket);
    this._stompClient.connect({}, function (frame) {
      self._stompClient.subscribe('/topic/greetings', function (stompResponse) {
        // stompResponse = {command, headers, body with JSON
        // reflecting the object returned by Spring framework}
        self._stompSubject.next(JSON.parse(stompResponse.body));
      });
    });
  }

  public send(content: IChatMessage) {
    this._stompClient.send("/app/hello", {}, JSON.stringify(content));
  }

  public getObservable() : Observable<any> {
    return this._stompSubject.asObservable();
  }
}
