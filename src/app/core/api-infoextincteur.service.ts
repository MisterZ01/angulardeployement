import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoextincteurService {

  private apiUrl = 'http://localhost:3000/extincteur';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerExtincteur(extinct: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/extincteur`, extinct);
}
}
