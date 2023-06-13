import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfolocaltechniqueService {

  private apiUrl = 'http://localhost:3000/localtechnique';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerLocaltechnique(localtechn: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/localtechnique`, localtechn);
  }
}
