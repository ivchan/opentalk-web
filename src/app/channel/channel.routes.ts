/**
 * Created by ivanchan on 26/11/2016.
 */
import { Route } from '@angular/router';
import { ChannelComponent } from './channel.component';

export const ChannelRoutes: Route[] = [
  {
    path: 'channel/:id',
    component: ChannelComponent
  }
]

