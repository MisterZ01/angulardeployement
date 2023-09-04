import { PhotositeComponent } from './dashboard/photosite/photosite.component';
import { PhotoenvironnementComponent } from './dashboard/photoenvironnement/photoenvironnement.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from './dashboard/presentation/presentation.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { EnvironnementComponent } from './dashboard/environnement/environnement.component';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { StructureComponent } from './dashboard/structure/structure.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { ElectriciteComponent } from './dashboard/electricite/electricite.component';
import { ProtectionComponent } from './dashboard/protection/protection.component';
import { AntennaireComponent } from './dashboard/antennaire/antennaire.component';
import { InforapportComponent } from './dashboard/inforapport/inforapport.component';
import { SyntheseComponent } from './dashboard/synthese/synthese.component';
import { ConclusionComponent } from './dashboard/conclusion/conclusion.component';
import { ListerapportsComponent } from './dashboard/listerapports/listerapports.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { UsersComponent } from './dashboard/users/users.component';
import { EquipesComponent } from './dashboard/equipes/equipes.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { RapportComponent } from './dashboard/rapport/rapport.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InfositeComponent } from './dashboard/infosite/infosite.component';
import { AnnexesComponent } from './dashboard/annexes/annexes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import{RichTextEditorModule, ToolbarService, LinkService, ImageService,HtmlEditorService, TableService, QuickToolbarService} from '@syncfusion/ej2-angular-richtexteditor'
import { AuthService } from './shared/userInfos/auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
       
  ],
  imports: [
    RichTextEditorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    SweetAlert2Module,
    RouterModule.forRoot([
      {path:'', component:ConnexionComponent},
      {path:'presentation', component: PresentationComponent},
      {path:'welcome', component: WelcomeComponent},
      {path:'environnement', component: EnvironnementComponent},
      {path:'structure', component: StructureComponent},
      {path:'navigation', component: NavigationComponent},
      {path:'electricite', component: ElectriciteComponent},
      {path:'protection', component: ProtectionComponent},
      {path:'antennaire', component: AntennaireComponent},
      {path:'synthese', component: SyntheseComponent},
      {path:'conclusion', component: ConclusionComponent},
      {path:'listerapports', component: ListerapportsComponent},
      {path:'profil', component: ProfilComponent},
      {path:'users', component: UsersComponent},
      {path:'equipes', component: EquipesComponent},
      {path:'admin', component: AdminComponent},
      {path:'rapport/:id', component: RapportComponent},
      {path:'inscription', component: InscriptionComponent},
      {path:'infosite', component: InfositeComponent},
      {path:'photosite', component: PhotositeComponent},
      {path:'photoenvironnement', component: PhotoenvironnementComponent},
      {path:'annexes', component: AnnexesComponent},
      {path:'inforapport', component: InforapportComponent},
    ])

  ],
  providers: [ToolbarService, 
    LinkService, 
    ImageService,
    HtmlEditorService, 
    TableService, 
    QuickToolbarService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
