import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  registerMemb(memb: { nom: any; prenom: any; fonction: any; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/utilisateur';
  private connexionapiUrl = 'http://localhost:3000/auth';

  host = environment.host
  headers = new Headers()

  constructor(private Http: HttpClient) { }

  
  Connexion(user: any):Observable<any> {
    return this.Http.post(`${this.connexionapiUrl}/login`, user);
  }
  registerUser(user: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/inscription`, user);
  }

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
