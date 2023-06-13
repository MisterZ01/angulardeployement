import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoclimatisateurService {
  
  private apiUrl = 'http://localhost:3000/climatisation';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerClimatiseur(climat: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/climatisation`, climat);
}
}
