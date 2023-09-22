import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoterrassesolService {
  registerEmprise(emp: { proximite_emprise: any; nom_emprise: any; precision_emprise: any; distancesite_emprise: any; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/terrasse';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerTerrasse(sol: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/terrasse`, sol);
}
}
