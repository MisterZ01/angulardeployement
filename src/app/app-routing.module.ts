 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './identification/connexion/connexion.component';

const routes: Routes = [

  {
    path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
  {
    path:'',
  component: ConnexionComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
