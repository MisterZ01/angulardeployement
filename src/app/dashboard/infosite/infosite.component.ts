import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiEnvService } from 'src/app/core/api-env.service';
import { ApiInfositeService } from 'src/app/core/api-infosite.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';




@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.component.html',
  styleUrls: ['./infosite.component.scss']
})
export class InfositeComponent implements OnInit{ 
  public imageSrc: any;
  //les variables de la modification
  editMode: boolean = false;
  id_rapport_a_modifier : any;

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
  nom_ville_quartier:any

  date_controle : any;
  heure_debut : any;
  heure_fin : any;

  nom_city: any;

  nomcommune: any;

  nomdepartement: any;

  nomregion: any;

  htmlContent: string;
  config: AngularEditorConfig;

  constructor(
    private sanitizer: DomSanitizer, 
    private api_site:ApiInfositeService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute, // ActivatedRoute for getting route parameters
    private alert: ApiNotificationService) {
    this.htmlContent = ''; 
    //debut de la configuration
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
    //fin de la configuration


  }

  ngOnInit(): void {
    // Check if we are in edit mode based on a route parameter or some other criterion
    this.editMode = this.route.snapshot.url[1].path === 'edit';
    // Récupérer l'identifiant depuis la route
    this.id_rapport_a_modifier = this.route.snapshot.paramMap.get('id');

    // If in edit mode, fetch and populate the existing data
    if (this.editMode) {
      this.fetchExistingData(); // Implement this method to fetch existing data
    }
  }

  async Submited() {
    let sit =  {

      typenv : await this.typenvir,
      nomsite : await this.nom_site,
      situationgeo : await this.situation_geo,
      densite : await this.densite,
      typologie: await this.typologie,
      station: await this.station,
      localtec: await this.localtec,
      plaqueident: await this.plaque_ident,
      datemiseservice : await this.date_de_ms,
      hauteurbatiment : await this.hauteur_bat,
      latitude : await this.latitude,
      longitude : await this.longitude,
      altitude : await this.altitude,
      vigile : await this.gardient,
      nbrevigile : await this.nbre_gardient,
      societegardiennagevigile : await this.societe_gardient,
      typstation: await this.typestation,
      observation : await this.commentaire,
      nom_ville_quartier : await this.nom_city,
      nom_commune : await this.nomcommune,
      nom_departement : await this.nomdepartement,
      nom_region : await this.nomregion,
      id_rapport: await this.auth.getReportId()
    }
    if (this.editMode) {
      // Update existing data here
      this.updateInfoSite(sit);
    } else {
      // Create new data here
      this.createInfoSite(sit);
    }



  }

  createInfoSite(sit:any) {
    this.api_site.registerSite(sit).subscribe(
      (response: any) => {
        this.alert.infoSiteCreer();        
      },
      (error: any) => {
        // Gérer l'erreur d'inscription
        this.alert.erreur();    
      }
    );
  }

  updateInfoSite(sit:any,) {
    this.api_site.updateSite(sit, this.id_rapport_a_modifier).subscribe(
      (response: any) => {
        console.log(response);
        this.alert.Modificationreussie();
      },
      (error: any) => {
        this.alert.erreur();
      }
    );
  }

  fetchExistingData() {
    try {
      // Envoie des informations vers le back-end
      this.api_site.findSite(this.id_rapport_a_modifier).subscribe(
        (response: any) => {
          
          this.typenvir = response.typenvir,
          this.nom_site = response.nomsite,
          this.situation_geo = response.situationgeo,
          this.densite = response.densite,
          this.typologie = response.typologie,
          this.station = response.station,
          this.localtec = response.localtec,
          this.plaque_ident = response.plaqueident,
          this.date_de_ms = response.datemiseservice,
          this.hauteur_bat = response.hauteurbatiment,
          this.latitude = response.latitude,
          this.longitude = response.longitude,
          this.altitude = response.altitude,
          this.gardient = response.vigile,
          this.nbre_gardient = response.nbrevigile,
          this.societe_gardient = response.societegardiennagevigile,
          this.typestation = response.typstation,
          this.commentaire = response.observation,
          this.nom_ville_quartier = response.nom_city,
          this.nomcommune = response.nom_commune,
          this.nomdepartement = response.nomdepartement,
          this.nomregion = response.nom_region


        },
        (error: any) => {
          this.alert.erreur();
        }
        );

    } catch (error) {
      console.error('Une erreur s\'est produite lors de la recherche du rapport', error);
      // Handle the error
    }
  }
  

}
