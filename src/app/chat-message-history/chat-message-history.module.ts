import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatMessageHistoryComponent} from "./chat-message-history.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatMessageHistoryComponent],
  exports: [ChatMessageHistoryComponent]
})
export class ChatMessageHistoryModule { }
