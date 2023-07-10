import { Component, OnInit } from '@angular/core';
import { AuthService } from '../userInfos/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private router:Router){}

  
  Deconnexion(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
