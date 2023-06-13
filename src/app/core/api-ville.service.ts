import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiVilleService {

  private apiUrl = 'http://localhost:3000/ville-quartier';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerVille(vil: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/quatier`, vil);
}

}
