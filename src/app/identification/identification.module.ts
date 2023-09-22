import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationRoutingModule } from './identification-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/userInfos/auth.service';


@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IdentificationRoutingModule
  ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdentificationModule { }
