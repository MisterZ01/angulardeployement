import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from '../userInfos/auth.service';
import { UserStoreService } from '../userInfos/userStore.service';

@Component({
  selector: 'app-side-bar-deux',
  templateUrl: './side-bar-deux.component.html',
  styleUrls: ['./side-bar-deux.component.scss']
})
export class SideBarDeuxComponent implements OnInit {

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

}
