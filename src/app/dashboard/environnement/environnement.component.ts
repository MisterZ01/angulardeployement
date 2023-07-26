import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiEnvService } from 'src/app/core/api-env.service';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.scss']
})
export class EnvironnementComponent implements OnInit {
  public imageSrc: any;
  access: any;
  accessibilite: any;


  portail: any;
  presenceporte: any;
  etatporte: any;
  typeporte: any;


  serrure: any;
  presenceserrure: any;
  etatserrure: any;
  telemetrieserrure: any;


  cloture: any;
  presencecloture: any;
  etatcloture: any;
  typecloture: any;


  plaque: any;
  presenceplaque: any;
  etatplaque: any;


  etanchesite: any;
  presenceetancheitesite: any;
  etatetancheitesite: any;


  etanchemassif: any;
  presenceetancheitemassif: any;
  etatetancheitemassif: any;


  gardedecorps: any;
  presencegardecorps: any;
  etatgardecorps: any;


  sol: any;
  hauteursol: any;
  etatsol: any;
  revetementespace: any;


  empr: any;
  proximiteemprise: any;
  nomemprise: any;
  precisionemprise: any;
  distancesiteemprise: any;

  evac: any;
  presencesystemeevacuation: any;
  etatsystemeevacuation: any;


  localtechn: any;
  etat_local: any;
  type_local: any;
  etat_boulonnerie: any;
  etat_assessoire: any;


  verrouillage: any;
  presencesystemeverrouillage: any;
  etatsystemeverrouillage: any;

  extinct: any;
  presenceextincteur: any;
  validiteextincteur: any;
  nbreextincteur: any;


  climat: any;
  presence_clim: any;
  nbre_clim: any;
  type_clim: any;
  etat_clim: any;
  etancheite_connexion: any;
  condenseur: any;
  tuyauterie_clim: any;


  grille: any;
  presencegrille: any;
  etatgrille: any;
  observation: any;





  
  htmlContent: string;
  config: AngularEditorConfig;

  constructor(private sanitizer: DomSanitizer, private api_infoenv:ApiEnvService) {
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
    let control_env = {

      cheminaccess : this.accessibilite,
      presence_portail : this.presenceporte,
      etat_portail : this.etatporte,
      type_portail : this.typeporte,
      presence_serrure : this.presenceserrure,
      etat_serrure : this.etatserrure,
      telemetrie_portail : this.telemetrieserrure,
      presence_cloture : this.presencecloture,
      etat_cloture : this.etatcloture,
      type_cloture: this.typecloture,
      presence_plaquesignal : this.presenceplaque,
      etat_plaquesignal : this.etatplaque,
      presence_etancheitesite : this.presenceetancheitesite,
      etat_etancheitesite : this.etatetancheitesite,
      presence_etancheitemassif : this.presenceplaque,
      etat_etancheitemassif : this.etatetancheitemassif,
      presence_garde_corps : this.presencegardecorps,
      etat_garde_corps : this.etatgardecorps,
      hauteurterrasse : this.hauteursol,
      etatterrasse : this.etatsol,
      revetement_espace: this.revetementespace,
      proximite_emprise : this.proximiteemprise,
      nom_emprise : this.nomemprise,
      precision_emprise: this.precisionemprise,
      distancesite_emprise: this.distancesiteemprise,
      presencesysteme_evacuation : this.presencesystemeevacuation,
      etatsysteme_evacuation : this.etatsystemeevacuation,
      etatlocal : this.etat_local,
      typelocal : this.type_local,
      etatboulonnerie : this.etat_boulonnerie,
      etatassessoire : this.etat_assessoire,
      presencesysteme_verrouillage : this.presencesystemeverrouillage,
      etatsysteme_verrouillage : this.etatsystemeverrouillage,
      presence_extincteur : this.presenceextincteur,
      validite : this.validiteextincteur,
      nbre_extincteur : this.nbreextincteur,
      presenceclim : this.presence_clim,
      nbreclim : this.nbre_clim,
      typeclim : this.type_clim,
      etatclim : this.etat_clim,
      etancheiteconnexion : this.etancheite_connexion,
      condenseur : this.condenseur,
      tuyauterieclim : this.tuyauterie_clim,
      presence_grille : this.presencegrille,
      etat_grille : this.etatgrille,
      observation : this.observation,
    }
    this.api_infoenv.registerEnv(control_env).subscribe(
      (response: any) => {
        console.log("les infos de l'environnement ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );

    // let porte = {

    //   presence_portail : this.presenceporte,
    //   etat_portail : this.etatporte,
    //   type_portail : this.typeporte,
    // }
    // this.api_porte.registerPortail(porte).subscribe(
    //   (response: any) => {
    //     console.log("les infos du portail ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let serr = {

    //   presence_serrure : this.presenceserrure,
    //   etat_serrure : this.etatserrure,
    //   telemetrie_portail : this.telemetrieserrure,
    // }
    // this.api_serru.registerSerrure(serr).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur le serrure ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let clot = {

    //   presence_cloture : this.presencecloture,
    //   etat_cloture : this.etatcloture,
    //   type_cloture: this.typecloture,
    // }
    // this.api_clotu.registerCloture(clot).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur la cloture ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let plque = {

    //   presence_plaquesignal : this.presenceplaque,
    //   etat_plaquesignal : this.etatplaque,
    
    // }
    // this.api_plaque.registerPlaquesignal(plque).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur la plaque signalétique ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let etanchsite = {

    //   presence_etancheitesite : this.presenceetancheitesite,
    //   etat_etancheitesite : this.etatetancheitesite,
    
    // }
    // this.api_etansite.registerEtancheitesite(etanchsite).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur l'étanchéité du site ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let etanchmassif = {

    //   presence_etancheitemassif : this.presenceplaque,
    //   etat_etancheitemassif : this.etatetancheitemassif,
    
    // }
    // this.api_etanmassif.registerEtancheitemassif(etanchmassif).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur l'étanchéité massif du site ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let gardcorps = {

    //   presence_garde_corps : this.presencegardecorps,
    //   etat_garde_corps : this.etatgardecorps,
    
    // }
    // this.api_gardecorps.registerGardecorps(gardcorps).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur la garde de corps ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let terrasse = {

    //   hauteurterrasse : this.hauteursol,
    //   etatterrasse : this.etatsol,
    //   revetement_espace: this.revetementespace,
    
    // }
    // this.api_sol.registerTerrasse(terrasse).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur la terrasse ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let emp = {

    //   proximite_emprise : this.proximiteemprise,
    //   nom_emprise : this.nomemprise,
    //   precision_emprise: this.precisionemprise,
    //   distancesite_emprise: this.distancesiteemprise,
    
    // }
    // this.api_emprise.registerEmprise(emp).subscribe(
    //   (response: any) => {
    //     console.log("les infos de l'emprise ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let systeva = {

    //   presencesysteme_evacuation : this.presencesystemeevacuation,
    //   etatsysteme_evacuation : this.etatsystemeevacuation,
    
    // }
    // this.api_systemevac.registerSystemeevacuation(systeva).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur le système evacuation ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let local = {

    //   etatlocal : this.etat_local,
    //   typelocal : this.type_local,
    //   etatboulonnerie : this.etat_boulonnerie,
    //   etatassessoire : this.etat_assessoire,
    
    // }
    // this.api_localtech.registerLocaltechnique(local).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur le local technique  ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let systverroui = {

    //   presencesysteme_verrouillage : this.presencesystemeverrouillage,
    //   etatsysteme_verrouillage : this.etatsystemeverrouillage,
    
    // }
    // this.api_systemverr.registerSystemeverrouillage(systverroui).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur le systeme de verrouillage  ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let ext = {

    //   presence_extincteur : this.presenceextincteur,
    //   validite : this.validiteextincteur,
    //   nbre_extincteur : this.nbreextincteur,
    
    // }
    // this.api_extincteur.registerExtincteur(ext).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur le systeme de verrouillage  ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let clim = {

    //   presenceclim : this.presence_clim,
    //   nbreclim : this.nbre_clim,
    //   typeclim : this.type_clim,
    //   etatclim : this.etat_clim,
    //   etancheiteconnexion : this.etancheite_connexion,
    //   condenseur : this.condenseur,
    //   tuyauterieclim : this.tuyauterie_clim,
    
    // }
    // this.api_climatisateur.registerClimatiseur(clim).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur les climatiseurs  ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );

    // let gril = {

    //   presence_grille : this.presencegrille,
    //   etat_grille : this.etatgrille,
    //   observation : this.observation,
    
    // }
    // this.api_grille.registerGrilleprotection(gril).subscribe(
    //   (response: any) => {
    //     console.log("les infos sur les climatiseurs  ont été enregistré avec succès", response);
    //     // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
    //   },
    //   (  error: any) => {
    //     console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
    //     // Gérer l'erreur d'inscription
    //   }
    // );
}

}
