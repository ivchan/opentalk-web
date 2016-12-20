/**
 * Created by ivanchan on 29/11/2016.
 */

export interface IChatMessage {
  messageKey : string;
  channelKey : string;
  userKey : string;
  userName : string;
  content : string;
  createDate: Date;
}
