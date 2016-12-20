import {Component, OnInit} from '@angular/core';
import {ChannelService} from "../service/channel.service";
import {IChannel} from '../model/channel.model';
import {Router} from "@angular/router";


/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-sidenav',
  providers: [ChannelService],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SideNavComponent implements OnInit{
  private lstPublicChannels: Array<IChannel>;
  private lstPrivateChannels: Array<IChannel>;

  constructor(private _channelService: ChannelService, private _router: Router) {
  }

  ngOnInit(): void {
    this.loadChannelList();
  }

  loadChannelList(): void {
    var _self = this;
    this._channelService.listPublicChannels()
      .subscribe((lstChannels: Array<IChannel>) => {
        this.lstPublicChannels = lstChannels;
      },
      error => {
        console.log("ERROR : list public channel");
      });

    this._channelService.listPrivateChannels()
      .subscribe((lstChannels: Array<IChannel>) => {
        this.lstPrivateChannels = lstChannels;
      },
      error => {
        console.log("ERROR : list private channel");
      });
  }

  navigateTo(route): void {
    alert(route);
    this._router.navigate([route]);
  }
}
