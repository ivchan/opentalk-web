import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
