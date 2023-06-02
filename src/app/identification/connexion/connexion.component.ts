import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor (private api:ApiService){}

  ngOnInit(){
    this.api.get().getUsers().subscribe((res:any)=>{
      console.log(res)
    })
  }

}
