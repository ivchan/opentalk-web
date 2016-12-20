import { Component, OnInit } from '@angular/core';
import { ILoginDetail, ILoginResult } from '../shared/model/login.model';
import {LoginService} from "../shared/service/login.service";
import {SharedService} from "../shared/service/shared.service";

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  selector: 'sd-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetail: ILoginDetail;

  constructor(private _loginService: LoginService, private _sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.loginDetail = <ILoginDetail>{};
    this.loginDetail.loginName = 'ivanchan';
    this.loginDetail.loginPassword = 'pass';
    this.loginDetail.authToken = '';
  }

  clearLogin(): void {
    this.loginDetail.loginName = '';
    this.loginDetail.loginPassword = '';
    this.loginDetail.authToken = '';
  }

  submitLogin() {
    this._loginService.submitLogin(this.loginDetail)
    .subscribe((result: any) => {
        alert('generated web token : ' + result.token);
        //this._sharedService.tokenKey = "875f72ea-8b1e-4ac7-bdb7-3de6b8886ba1";
        console.log(result.token);
      },
      error => {
        alert("Login fail");
        console.log(error);
      });
  }
}
