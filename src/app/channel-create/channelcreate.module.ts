import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import {CommonModule} from "@angular/common";
import {ChannelCreateComponent} from "./channelcreate.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [ChannelCreateComponent]
})
export class ChannelCreateModule { }
