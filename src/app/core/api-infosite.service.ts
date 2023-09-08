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
      typenv : infos.typenvir,
      nomsite : infos.nom_site,
      situationgeo : infos.situation_geo,
      densite : infos.densite,
      typologie: infos.typologie,
      station: infos.station,
      localtec: infos.localtec,
      plaqueident: infos.plaque_ident,
      datemiseservice : infos.date_de_ms,
      hauteurbatiment : infos.hauteur_bat,
      latitude : infos.latitude,
      longitude : infos.longitude,
      altitude : infos.altitude,
      vigile : infos.gardient,
      nbrevigile : infos.nbre_gardient,
      societegardiennagevigile : infos.societe_gardient,
      typstation: infos.typestation,
      observation : infos.commentaire,
      nom_ville_quartier :infos.nom_city,
      nom_commune :infos.nomcommune,
      nom_departement :infos.nomdepartement,
      nom_region :infos.nomregion,
      id_rapport: id_rapport
    }
    return this.Http.post(`${this.apiUrl}/updatesite`, sit);
  }
  //trouver un site à partir de son id
  findSite(id_site: any){
    return this.Http.get(`${this.apiUrl}/updatesite/${id_site}`);
  }
}
