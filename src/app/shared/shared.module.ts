import { SideBarDeuxComponent } from './side-bar-deux/side-bar-deux.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideBarUnComponent } from './side-bar-un/side-bar-un.component';
import { AuthService } from './userInfos/auth.service'
import { UserStoreService } from './userInfos/userStore.service' 




@NgModule({
  declarations: [
 
    SideBarUnComponent,
    SideBarDeuxComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports:[
    RouterModule,
    FormsModule

  ]
})
export class SharedModule { }
