import { NgModule } from '@angular/core';
import { SideNavComponent } from './sidenav.component';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes),
      MaterialModule.forRoot()
    ],
    declarations: [SideNavComponent],
    exports: [SideNavComponent],
})

export class SideNavModule { }
