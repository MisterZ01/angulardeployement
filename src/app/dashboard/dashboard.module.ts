import { SideBarComponent } from './../shared/side-bar/side-bar.component';
import { HeaderComponent } from './../shared/header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { EnvironnementComponent } from './environnement/environnement.component';
import { StructureComponent } from './structure/structure.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ElectriciteComponent } from './electricite/electricite.component';
import { ProtectionComponent } from './protection/protection.component';
import { AntennaireComponent } from './antennaire/antennaire.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
 


@NgModule({
  declarations: [
    PresentationComponent,
    WelcomeComponent,
    SideBarComponent,
    HeaderComponent,
    EnvironnementComponent,
    StructureComponent,
    NavigationComponent,
    ElectriciteComponent,
    ProtectionComponent,
    AntennaireComponent,
    SyntheseComponent,
    ConclusionComponent
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
