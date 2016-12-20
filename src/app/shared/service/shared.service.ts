/**
 * Created by ivanchan on 1/12/2016.
 */

export class SharedService {
  loginUser: string;
  loginTime: Date;
  channelKey: string;
  apiHost: string;
  tokenKey: string;

  constructor() {
    this.loginUser = "5850ecca9711c604448b1033";
    this.loginTime = new Date();
    this.channelKey = "5850ecd09711c604448b1039";
    this.apiHost = "http://localhost:4200/api/";
  }
}
