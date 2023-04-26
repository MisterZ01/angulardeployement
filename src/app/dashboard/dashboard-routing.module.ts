import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnvironnementComponent } from './environnement/environnement.component';
import { StructureComponent } from './structure/structure.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ElectriciteComponent } from './electricite/electricite.component';
import { ProtectionComponent } from './protection/protection.component';
import { AntennaireComponent } from './antennaire/antennaire.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'presentation', component:PresentationComponent
  },
  {
    path:'environnement', component:EnvironnementComponent
  },
  {
    path:'structure', component:StructureComponent
  },
  {
    path:'navigation', component:NavigationComponent
  },
  {
    path:'electricite', component:ElectriciteComponent
  },
  {
    path:'protection', component:ProtectionComponent
  },
  {
    path:'antennaire', component:AntennaireComponent
  },
  {
    path:'synthese', component:SyntheseComponent
  },
  {
    path:'conclusion', component:ConclusionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
