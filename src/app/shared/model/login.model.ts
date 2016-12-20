/**
 * Created by ivanchan on 21/11/2016.
 */

export interface ILoginDetail {
  loginName : string;
  loginPassword : string;
  authToken : string;
}

export interface ILoginResult {
  loginResult: string;
  userKey: string;
  userID: string;
  userName: string;
  loginTime: Date;
}
