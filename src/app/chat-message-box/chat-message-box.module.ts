/**
 * Created by ivanchan on 29/11/2016.
 */

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import {ChatMessageBoxComponent} from "./chat-message-box.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [ChatMessageBoxComponent]
})
export class ChatMessageBoxModule { }

