import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfosyntheseService {

  private apiUrl = 'http://localhost:3000';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerSynthese(synthe: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/synthese/synthese`, synthe);
  }

  registerConclusion(synthe: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/conclusion/register`, synthe);
  }
}
