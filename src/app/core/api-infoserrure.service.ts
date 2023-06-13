import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoserrureService {
  registerCloture(clot: { presence_cloture: any; etat_cloture: any; type_cloture: any; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/serrure';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerSerrure(serrure: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/serrure`, serrure);
}
}
