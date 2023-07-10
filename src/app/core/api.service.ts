import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/userInfos/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private Http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/utilisateur';
  private connexionapiUrl = 'http://localhost:3000/auth';
  //token = this.auth.getToken()
  host = environment.host
  headers: any

  addHeader(token:string|null){
    this.headers = new HttpHeaders()
    .set('Content-Type', `application/json` )
    .set('Authorization', `Bearer ${token}` )
  }
  
  registerMemb(memb: { nom: any; prenom: any; fonction: any; }) {
    throw new Error('Method not implemented.');
  }
  Connexion(user: any):Observable<any> {
    return this.Http.post(`${this.connexionapiUrl}/login`, user);
  }
  registerUser(user: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/inscription`, user);
  }

  getUser(){
    return this.Http.get(`${this.connexionapiUrl}/welcome`, {'headers':this.headers})
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
