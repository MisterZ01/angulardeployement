import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfosystemeverrouillageService {

  private apiUrl = 'http://localhost:3000/systemeverrouillage';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerSystemeverrouillage(verrouillage: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/verrouillage`, verrouillage);
}
}
