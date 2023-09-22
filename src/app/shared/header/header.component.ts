import { Component, OnInit } from '@angular/core';
import { AuthService } from '../userInfos/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { UserStoreService } from '../userInfos/userStore.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  user :any;
  imageLink = 'http://localhost:3000/utilisateur/profile-image';

  constructor(private router:Router,private api:ApiService, 
    private auth: AuthService, 
    private userstore : UserStoreService){}
  ngOnInit(){
    this.api.addHeader(localStorage.getItem('token'))
    this.api.getUser().subscribe((response: any) => {
      this.user = response;
    })    
  }
  
  Deconnexion(){
    this.auth.signOut();
  }

  

}
