import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent, DialogContent } from './app.component';
import { routes } from './app.routes';
//import { RouterModule} from "@angular/router";
//import { SideNavModule } from './shared/sidenav/sidenav.module';
import { SideNavModule, SideNavComponent } from './shared/index';
import {LoginModule, LoginComponent} from "./login/index";
import {ChannelModule, ChannelComponent} from './channel/index';
import {ChannelCreateModule} from './channel-create/index';
import {SettingModule, SettingComponent} from './setting/index';
import {RouterModule} from "@angular/router";
import {SharedService} from "./shared/service/shared.service";
//import {ChatMessageBoxModule, ChatMessageBoxComponent} from './chat-message-box/index';


@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    ChannelModule,
    ChannelCreateModule,
    SettingModule,
    //ChatMessageBoxModule,
    SideNavModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DialogContent,
    //LoginComponent,
    //ChannelComponent,
    //SettingComponent,
    //SideNavComponent
  ],
  entryComponents: [DialogContent],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
