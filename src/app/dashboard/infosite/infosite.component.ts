import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiCommuneService } from 'src/app/core/api-commune.service';
import { ApiDepartementService } from 'src/app/core/api-departement.service';
import { ApiEnvService } from 'src/app/core/api-env.service';
import { ApiInfositeService } from 'src/app/core/api-infosite.service';
import { ApiRegionService } from 'src/app/core/api-region.service';
import { ApiVilleqService } from 'src/app/core/api-villeq.service';




@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.component.html',
  styleUrls: ['./infosite.component.scss']
})
export class InfositeComponent implements OnInit{ 
  public imageSrc: any;
  sit: any;
  env: any;
  vil: any;
  com: any;
  dpt: any;
  reg: any;


  typenvir : any;
  nom_site : any;
  situation_geo : any;
  densite : any;
  typologie: any;
  station: any;
  localtec: any;
  plaque_ident: any;
  date_de_ms : any;
  hauteur_bat : any;
  latitude : any;
  longitude : any;
  altitude : any;
  gardient : any;
  nbre_gardient : any;
  societe_gardient : any;
  typestation: any;
  commentaire : any;

  date_controle : any;
  heure_debut : any;
  heure_fin : any;

  nom_city: any;

  nomcommune: any;

  nomdepartement: any;

  nomregion: any;

  htmlContent: string;
  config: AngularEditorConfig;

  constructor(private sanitizer: DomSanitizer, private api_site:ApiInfositeService, private api_envmt:ApiEnvService,  private api_city:ApiVilleqService, private api_comm:ApiCommuneService, private api_depmt:ApiDepartementService, private api_region:ApiRegionService) {
    this.htmlContent = ''; 
    this.config  = {
 
       editable: true,
      spellcheck: true,
      height: '10rem',
      minHeight: '5rem',
      placeholder: 'Entrer une observation....',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      customClasses: [
        {
          name: 'Quote',
          class: 'quoteClass',
        },
        {
          name: 'Title Heading',
          class: 'titleHead',
          tag: 'h1',
        },
      ],
    };
  }

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }


  ngOnInit(): void {}

  Submited() {
    let sit = {

      typenv : this.typenvir,
      nomsite : this.nom_site,
      situationgeo : this.situation_geo,
      densite : this.densite,
      typologie: this.typologie,
      station: this.station,
      localtec: this.localtec,
      plaqueident: this.plaque_ident,
      datemiseservice : this.date_de_ms,
      hauteurbatiment : this.hauteur_bat,
      latitude : this.latitude,
      longitude : this.longitude,
      altitude : this.altitude,
      vigile : this.gardient,
      nbrevigile : this.nbre_gardient,
      societegardiennagevigile : this.societe_gardient,
      typstation: this.typestation,
      observation : this.commentaire,
    }
    this.api_site.registerSite(sit).subscribe(
      (response: any) => {
        console.log("les infos du site ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );

    let control_env = {

      datecontrole :this.date_controle,
     heuredebutcontrole :this.heure_debut,
     heurefincontrole: this.heure_fin,
    }
    this.api_envmt.registerEnvironnement(control_env).subscribe(
      (response: any) => {
        console.log("les infos du controle environnement ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
    let ville_quartier = {

      nom_ville_quartier :this.nom_city,
    
    }
    this.api_city.registerVilleQuartier(ville_quartier).subscribe(
      (response: any) => {
        console.log("les infos sur le quartier ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
    let commune = {

      nom_commune :this.nomcommune,
    }
    this.api_comm.registerCommune(commune).subscribe(
      (response: any) => {
        console.log("les infos sur la commune ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
    let dpartment = {

      nom_departement :this.nomdepartement,
    }
    this.api_depmt.registerDepartement(dpartment).subscribe(
      (response: any) => {
        console.log("les infos sur le departement  ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
    let region = {

      nom_region :this.nomregion,
    }
    this.api_region.registerRegion(region).subscribe(
      (response: any) => {
        console.log("les infos sur la region ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );


  }
  

}
