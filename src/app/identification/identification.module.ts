import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationRoutingModule } from './identification-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';


@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IdentificationRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdentificationModule { }
