import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  constructor(private http: HttpClient) {

    
 this.http.get('http://localhost:3000/utilisateur/listuser').subscribe(resultat => 
 
 this.users = resultat
 
 
 );
  
}

 users : any  ;


  

}

