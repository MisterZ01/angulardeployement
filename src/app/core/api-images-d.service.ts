import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesDService {

  private apiUrl = 'http://localhost:3000/image';

  host = environment.host


  constructor(private Http: HttpClient) { }


  registerImageDeux(img_deux: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/image`, img_deux);
  }
}
