import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoetancheitemassifService {
  private apiUrl = 'http://localhost:3000/etancheitemassif';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerEtancheitemassif(etanchemassif: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/etancheitemassif`, etanchemassif);
}
}
