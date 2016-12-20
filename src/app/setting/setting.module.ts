import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { SettingComponent } from './setting.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
