import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';
import { UserStoreService } from 'src/app/shared/userInfos/userStore.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

constructor(
  private api:ApiService, 
  private auth: AuthService, 
  private userstore : UserStoreService){}

user:any;
 ngOnInit(){
  this.api.addHeader(localStorage.getItem('token'))
  this.api.getUser().subscribe((response: any) => {
    this.user = response;
    this.auth.setNom(this.user.nom_user)
  })
}


}
