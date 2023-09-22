import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoetancheitesiteService {
  private apiUrl = 'http://localhost:3000/etancheitesite';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerEtancheitesite(etanchesite: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/etancheitesite`, etanchesite);
}
}
