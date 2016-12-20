import { Component, OnInit } from '@angular/core';
import {IChatMessage} from "../shared/model/chatmessage.model";
import {TalkService} from "../shared/service/talk.service";
import {StompService} from "../shared/service/stomp.service";
import {SharedService} from "../shared/service/shared.service";

@Component({
  selector: 'app-chat-message-box',
  providers: [TalkService, StompService],
  templateUrl: './chat-message-box.component.html',
  styleUrls: ['./chat-message-box.component.css']
})
export class ChatMessageBoxComponent implements OnInit {
  //private inputField = '<enter some text>!';
  private chatMessage: IChatMessage;
  private serverResponse: string;

  constructor(
    private _talkService: TalkService,
    private _stompService: StompService,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.resetMessage();
    this._stompService.connect('ws://localhost:9000/hello/websocket');
  }

  /*
  sendMessage() {
    this._stompService.send(this.inputField);
  }
  */

  resetMessage() {
    this.chatMessage = <IChatMessage>{};
    this.chatMessage.messageKey = null;
    this.chatMessage.channelKey = this._sharedService.channelKey;
    this.chatMessage.userKey = this._sharedService.loginUser;
    this.chatMessage.content = "<enter some text>!";
  }

  sendMessage() {
    this._stompService.send(this.chatMessage);
    /*
    this._talkService.sendChatMessage(this.chatMessage)
      .subscribe((result: IChatMessage) => {
          alert('You have submitted ' + result.content);
          this.resetMessage();
        },
        error => {
          console.log(error);
        });
   */
  }
}
