import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiRegionService {

  private apiUrl = 'http://localhost:3000/region';

  host = environment.host


  constructor(private Http: HttpClient) { }


   registerRegion(reg: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/region`, reg);
  }
}
