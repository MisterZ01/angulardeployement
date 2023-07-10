import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

constructor(private api:ApiService, Http:HttpClient){}



ngOnInit(){
  this.api.addHeader(localStorage.getItem('token'))
  this.api.getUser().subscribe(
    res => console.log(res)
  )
  
}


}
