import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoclotureService {

  private apiUrl = 'http://localhost:3000/cloture';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerCloture(cloture: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/cloture`, cloture);
}
}
