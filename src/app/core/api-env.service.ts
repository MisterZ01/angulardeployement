import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiEnvService {

  private apiUrl = 'http://localhost:3000/controlenv';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerEnvironnement(env: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/controle`, env);
  }
 
}
