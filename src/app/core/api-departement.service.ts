import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiDepartementService {

     
  private apiUrl = 'http://localhost:3000/departement';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerDepartement(dptement: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/departement`, dptement);
  }
}
