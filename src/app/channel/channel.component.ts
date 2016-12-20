import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../shared/service/channel.service";
import {StompService} from "../shared/service/stomp.service";
import {ActivatedRoute} from "@angular/router";
import {IChannel} from "../shared/model/channel.model";
import {IChatMessage} from "../shared/model/chatmessage.model";
import {SharedService} from "../shared/service/shared.service";

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  selector: 'sd-channel',
  providers: [ChannelService, StompService, SharedService],
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  private serverResponse: string;
  private channelKey: string;
  private channelInfo: IChannel;
  private lstChat: Array<IChatMessage>;


  constructor(
    private _route: ActivatedRoute,
    private _stompService: StompService,
    private _channelService: ChannelService,
    private _sharedService: SharedService
  ) {
    this.channelKey = this._route.snapshot.params['id'];
    this.channelInfo = <IChannel>{};
    this.lstChat = new Array<IChatMessage>();

    var msgA = <IChatMessage>{};
    msgA.channelKey = this.channelKey;
    msgA.userKey = "";
    msgA.messageKey = "";
    msgA.content = "A for Apple";
    var msgB = <IChatMessage>{};
    msgB.channelKey = this.channelKey;
    msgB.userKey = "";
    msgB.messageKey = "";
    msgB.content = "B for Boy";
    this.lstChat.push(msgB);
  }

  ngOnInit(): void {
    this.getChannelInfo();
  }

  private getChannelInfo(): void {
    var _self = this;
    this._channelService.getChannel(this.channelKey)
      .subscribe((channel: IChannel) => {
        this.channelInfo = channel;
    }, error => {
      console.log("ERROR");
    });
  }
}
