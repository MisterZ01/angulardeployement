import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/utilisateur';

  host = environment.host


  constructor(private Http: HttpClient) { }

  

  registerUser(user: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/inscription`, user);
  }

  // registerMembre(memb: any):Observable<any> {
  //   return this.Http.post(`${this.apiUrl}/membreequipe`, memb);
  // }

  create(){}

  get(){
    return {
      getUsers: ()=>{
          return this.Http.get(this.host + 'App')
    
        }
    }
  }

  update(){}

  delete(){}


}
