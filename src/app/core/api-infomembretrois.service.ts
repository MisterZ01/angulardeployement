import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfomembretroisService {

 
  private apiUrl = 'http://localhost:3000/membreequipe';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerMembreTrois(membtrois: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/membreequipe`, membtrois);
  }
}
