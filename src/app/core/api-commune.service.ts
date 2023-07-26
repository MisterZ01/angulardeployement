import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiCommuneService {

  
  private apiUrl = 'http://localhost:3000/commune';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerCommune(comune: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/commune`, comune);
  }
}
