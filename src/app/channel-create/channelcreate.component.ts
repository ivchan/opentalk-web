import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../shared/service/channel.service";
import {ActivatedRoute} from "@angular/router";
import {IChannel} from "../shared/model/channel.model";

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  selector: 'sd-channel-create',
  providers: [ChannelService],
  templateUrl: './channelcreate.component.html',
  styleUrls: ['./channelcreate.component.css'],
})
export class ChannelCreateComponent implements OnInit {
  private serverResponse: string;
  private channelInfo: IChannel;


  constructor(
    private _route: ActivatedRoute,
    private _channelService: ChannelService
  ) {
    this.channelInfo = <IChannel>{};
  }

  ngOnInit(): void {
  }
}
