import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoportailService {

  
  private apiUrl = 'http://localhost:3000/portail';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerPortail(portail: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/portail`, portail);
}
}
