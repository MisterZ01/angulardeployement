import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoplaquesignalService {

  private apiUrl = 'http://localhost:3000/plaquesignal';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerPlaquesignal(plaque: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/plaquesignal`, plaque);
}
}
