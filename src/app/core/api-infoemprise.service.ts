import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoempriseService {

  private apiUrl = 'http://localhost:3000/emprise';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerEmprise(empr: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/emprise`, empr);
}
}
