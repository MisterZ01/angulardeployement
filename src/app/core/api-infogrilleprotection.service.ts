import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfogrilleprotectionService {

  private apiUrl = 'http://localhost:3000/grille-protec';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerGrilleprotection(grille: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/grilleP`, grille);
}
}
