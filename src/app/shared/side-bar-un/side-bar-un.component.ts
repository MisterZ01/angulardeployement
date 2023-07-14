import { Component, OnInit } from '@angular/core';
import { AuthService } from '../userInfos/auth.service';
import { ApiService } from 'src/app/core/api.service';
import { UserStoreService } from '../userInfos/userStore.service';

@Component({
  selector: 'app-side-bar-un',
  templateUrl: './side-bar-un.component.html',
  styleUrls: ['./side-bar-un.component.scss']
})
export class SideBarUnComponent implements OnInit{

  user :any;
  imageLink = 'http://localhost:3000/utilisateur/profile-image';

  constructor(private api:ApiService, 
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
