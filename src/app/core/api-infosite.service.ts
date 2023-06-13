import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfositeService {

  private apiUrl = 'http://localhost:3000/site';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerSite(sit: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/site`, sit);
  }
}
