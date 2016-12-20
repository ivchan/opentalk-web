import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { ChannelComponent } from './channel.component';
import { ChatMessageBoxComponent } from '../chat-message-box/chat-message-box.component';
import {ChatMessageHistoryComponent} from "../chat-message-history/chat-message-history.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [ChannelComponent, ChatMessageBoxComponent, ChatMessageHistoryComponent]
})
export class ChannelModule { }
