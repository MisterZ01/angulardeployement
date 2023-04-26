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
import { SyntheseComponent } from './dashboard/synthese/synthese.component';
import { ConclusionComponent } from './dashboard/conclusion/conclusion.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'presentation', component: PresentationComponent},
      {path:'dashboard', component: WelcomeComponent},
      {path:'environnement', component: EnvironnementComponent},
      {path:'structure', component: StructureComponent},
      {path:'navigation', component: NavigationComponent},
      {path:'electricite', component: ElectriciteComponent},
      {path:'protection', component: ProtectionComponent},
      {path:'antennaire', component: AntennaireComponent},
      {path:'synthese', component: SyntheseComponent},
      {path:'conclusion', component: ConclusionComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
