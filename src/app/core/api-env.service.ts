import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiEnvService {

  private apiUrl = 'http://localhost:3000/controlenv';

  host = environment.host
  headers: any
  boundary:any ="this is my boundary hj"

  addHeader(){
    this.headers = new HttpHeaders()
    .set('Content-Type', `application/json` )
  }

  constructor(private Http: HttpClient) { }


   registerEnv(env: any):Observable<any> {
  
    return this.Http.post(`${this.apiUrl}/controle`, env);
  }
 
}
