import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiEnvService } from 'src/app/core/api-env.service';
import { ApiInfositeService } from 'src/app/core/api-infosite.service';




@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.component.html',
  styleUrls: ['./infosite.component.scss']
})
export class InfositeComponent implements OnInit{ 
  public imageSrc: any;
  sit: any;
  env: any;


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

  htmlContent: string;
  config: AngularEditorConfig;

  constructor(private sanitizer: DomSanitizer, private api_site:ApiInfositeService, private api_envmt:ApiEnvService) {
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


  }
  

}
