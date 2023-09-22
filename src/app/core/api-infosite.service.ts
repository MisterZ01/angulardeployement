import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiInfositeService {

  private apiUrl = 'http://localhost:3000/site';

  host = environment.host

  constructor(private Http: HttpClient) { }

  registerSite(sit: any):Observable<any> {
    return this.Http.post(`${this.apiUrl}/site`, sit);
  }
  //mettre à jour les information d'un site en fonction de l'id du rapport
  updateSite(infos: any, id_rapport: any) {
    let sit = {
      typenv : infos.typenv,
      nomsite : infos.nomsite,
      situationgeo : infos.situationgeo,
      densite : infos.densite,
      typologie: infos.typologie,
      station: infos.station,
      localtec: infos.localtec,
      plaqueident: infos.plaqueident,
      datemiseservice : infos.datemiseservice,
      hauteurbatiment : infos.hauteurbatiment,
      latitude : infos.latitude,
      longitude : infos.longitude,
      altitude : infos.altitude,
      vigile : infos.vigile,
      nbrevigile : infos.nbrevigile,
      societegardiennagevigile : infos.societegardiennagevigile,
      typstation: infos.typstation,
      observation : infos.observation,
      nom_ville_quartier :infos.nom_ville_quartier,
      nom_commune :infos.nom_commune,
      nom_departement :infos.nom_departement,
      nom_region :infos.nom_region,
      id_rapport: id_rapport
    }
    return this.Http.post(`${this.apiUrl}/updatesite`, sit);
  }
  //trouver un site à partir de son id
  findSite(id_site: any){
    return this.Http.get(`${this.apiUrl}/updatesite/${id_site}`);
  }
}
