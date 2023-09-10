import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiMembreService {

  private apiUrl = 'http://localhost:3000/membreequipe';

  host = environment.host


  constructor(private Http: HttpClient) { }

  //enregistrer un membre
   registerMembre(memb: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/membreequipe`, memb);
  }

  //retrouve tous les membres de l'équipe d'un rapport
  InfoMembreUniqueReport(id: any){
    return this.Http.get(`${this.apiUrl}/updatemembre/${id}`);
  }

  //enregistrer un membre grace au numero de rapport et son id dans la table membreEquipe
  updateMembre(memb:any, id: any, id_rapport:any) {
    let body:any ={
      id_membre : id,
      id_rapport: id_rapport,
      nom : memb.nom,
      prenom : memb.prenom,
      fonction : memb.fonction
    }
    return this.Http.post(`${this.apiUrl}/updatemembre`, body);
  }
}
