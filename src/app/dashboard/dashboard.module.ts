import { SideBarComponent } from './../shared/side-bar/side-bar.component';
import { HeaderComponent } from './../shared/header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
 


@NgModule({
  declarations: [
    PresentationComponent,
    WelcomeComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ],
  exports: [
    PresentationComponent,
    WelcomeComponent,
    SideBarComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
