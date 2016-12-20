import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { ChannelRoutes } from './channel/index';
import { SettingRoutes } from './setting/index';
import {ChannelCreateRoutes} from "./channel-create/channelcreate.routes";

export const routes: Routes = [
  ...LoginRoutes,
  ...ChannelRoutes,
  ...ChannelCreateRoutes,
  ...SettingRoutes
];
