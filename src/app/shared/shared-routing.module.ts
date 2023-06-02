import { SideBarDeuxComponent } from './side-bar-deux/side-bar-deux.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarUnComponent } from './side-bar-un/side-bar-un.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:'ok',
    component:SideBarUnComponent
  },
  {
    path:'okk',
   component: SideBarDeuxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
