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
import { ListerapportsComponent } from './listerapports/listerapports.component';
import { ProfilComponent } from './profil/profil.component';
import { UsersComponent } from './users/users.component';
import { EquipesComponent } from './equipes/equipes.component';
import { AdminComponent } from './admin/admin.component';
import { RapportComponent } from './rapport/rapport.component';
import { InfositeComponent } from './infosite/infosite.component';
import { PhotositeComponent } from './photosite/photosite.component';
import { PhotoenvironnementComponent } from './photoenvironnement/photoenvironnement.component';
import { AnnexesComponent } from './annexes/annexes.component';
import { ConnexionComponent } from '../identification/connexion/connexion.component';

const routes: Routes = [
  {
    path:'',
    component:ConnexionComponent
  },
  {
    path:'welcome',
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
  {
    path:'listerapports', component:ListerapportsComponent
  },
  {
    path:'profil', component:ProfilComponent
  },
  {
    path:'users', component:UsersComponent
  },
  {
    path:'equipes', component:EquipesComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'rapport', component:RapportComponent
  },
  {
    path:'infosite', component:InfositeComponent
  },
  {
    path:'photosite', component:PhotositeComponent
  },
  {
    path:'photoenvironnement', component:PhotoenvironnementComponent
  },
  {
    path:'annexes', component:AnnexesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
