import { Component, OnInit } from '@angular/core';
import {StompService} from "../shared/service/stomp.service";
import {IChatMessage} from "../shared/model/chatmessage.model";

@Component({
  selector: 'app-chat-message-history',
  providers: [StompService],
  templateUrl: './chat-message-history.component.html',
  styleUrls: ['./chat-message-history.component.css']
})
export class ChatMessageHistoryComponent implements OnInit {
  private serverResponse: IChatMessage;
  private lstMessages: Array<IChatMessage>;

  constructor(
    private _stompService: StompService
  ) {
    this.lstMessages = new Array<IChatMessage>();
  }

  ngOnInit() {
    this._stompService.connect('ws://localhost:9000/hello/websocket');
    this._stompService.getObservable().subscribe((output: IChatMessage) => {
      //alert(JSON.stringify(output));
      this.serverResponse = output;
      //alert(this.serverResponse);
      this.lstMessages.push(this.serverResponse);
    });
  }

}
