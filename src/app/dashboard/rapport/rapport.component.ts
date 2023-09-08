import * as pdfMake from 'pdfmake/build/pdfmake.js'
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'
// @ts-ignore
import * as html2pdf from 'html2pdf.js'

import { Component, OnInit , AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';




 (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiservice : ApiService, private changeDetectorRef: ChangeDetectorRef) {}


  optionsun = [
    { id: 1, label: 'Classique', checked: false },
    { id: 2, label: 'Salin', checked: false },
    { id: 3, label: 'Montagneux', checked: false },
    { id: 4, label: 'Autre', checked: false },
    // ... ajoutez d'autres options ici
  ];

  optionsdeux = [
    { id: 1, label: 'Zone Urbaine', checked: false },
    { id: 2, label: 'Zone Rurale', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionstrois = [
    { id: 1, label: 'Forte', checked: false },
    { id: 2, label: 'Faible', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionsquatre = [
    { id: 1, label: 'Greenfield', checked: false },
    { id: 2, label: 'Rooftop', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionscinq = [
    { id: 1, label: 'BSC/RNC', checked: false },
    { id: 2, label: 'BTS', checked: false },
    { id: 2, label: 'MW', checked: false },
    { id: 2, label: 'Autres', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionssix = [
    { id: 1, label: 'Indoor', checked: false },
    { id: 2, label: 'Outdoor', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionssept = [
    { id: 1, label: 'Shelter', checked: false },
    { id: 2, label: 'Bâtiment', checked: false },
    { id: 3, label: 'Abri', checked: false },
    { id: 4, label: 'Autre', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionshuit = [
    { id: 1, label: 'Non', checked: false },
    { id: 2, label: 'Oui', checked: false },
    // ... ajoutez d'autres options ici
  ];
  optionsneuf = [
    { id: 1, label: 'Option 1', value: null, na: false },
    // ... ajoutez d'autres options ici
  ];
  optionsdix = [
    { id: 1, label: 'Option 1', value: null, na: false },
    // ... ajoutez d'autres options ici
  ];
  onNAChecked(option: { na: any; value: null; }) {
    if (option.na) {
      option.value = null; // Réinitialiser la valeur si "N/A" est coché
    }
  }

  optionsonze = [
    { id: 1, label: 'Absent', checked: false },
    { id: 2, label: 'Present', checked: false },
   
    // ... ajoutez d'autres options ici
  ];

  optionsdouze = [
    { id: 1, label: 'Option 1', value: null, na: false },
    // ... ajoutez d'autres options ici
  ];

  optionstreize = [
    { id: 1, label: 'Escalier', checked: false },
    { id: 2, label: "Trappe d'accès", checked: false },
    { id: 3, label: 'Echelle', checked: false },
    { id: 4, label: 'Voie routière', checked: false },
    { id: 5, label: 'Autre', checked: false },
   
    // ... ajoutez d'autres options ici
  ];

  optionsquatorze = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  optionsquinze= [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false },
   
    // ... ajoutez d'autres options ici
  ];

  optionsseize = [
    { id: 1, label: 'Métallique', checked: false },
    { id: 2, label: 'Grillagée', checked: false },
    { id: 3, label: 'Autre', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  optionsdix_sept = [
    { id: 1, label: 'Inexistant ', checked: false },
    { id: 2, label: 'Existant ', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  optionsdix_huit = [
    { id: 1, label: 'Bon ', checked: false },
    { id: 2, label: 'Dégradé', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  optionsdix_neuf = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Hors-service', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingt= [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtun = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtdeux = [
    { id: 1, label: 'Grillagée ', checked: false },
    { id: 2, label: 'Semi grillagée', checked: false },
    { id: 3, label: 'Agglos', checked: false },
    { id: 4, label: 'Barreaux métalliques', checked: false },
    { id: 5, label: 'Autre', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingttrois = [
    { id: 1, label: 'Inexistant ', checked: false },
    { id: 2, label: 'Existant', checked: false },
 
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtquatre = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtcinq = [
    { id: 1, label: 'Nom', checked: false },
    { id: 2, label: 'Oui', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtsix = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtsept = [
    { id: 1, label: 'Nom', checked: false },
    { id: 2, label: 'Oui', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingthuit = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_vingtneuf = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trente = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trenteun = [
    { id: 1, label: '< 1', checked: false },
    { id: 2, label: '> 1', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentedeux = [
    { id: 1, label: 'Propre', checked: false },
    { id: 2, label: 'Encombré', checked: false },
    { id: 2, label: 'Fissuré', checked: false },
    { id: 2, label: 'Humide', checked: false },
    { id: 2, label: 'Sale', checked: false },
    { id: 2, label: 'À nettoyer', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentetrois = [
    { id: 1, label: 'Nom', checked: false },
    { id: 2, label: 'Oui', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentequatre = [
    { id: 1, label: 'Ligne électrique', checked: false },
    { id: 2, label: 'Voirie', checked: false },
    { id: 2, label: 'Cour d’eau', checked: false },
    { id: 2, label: 'Etablissement scolaire', checked: false },
    { id: 2, label: 'Etablissement sanitaire', checked: false },
    { id: 2, label: 'supermarché', checked: false },
    { id: 2, label: 'Immeuble', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentecinq = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentesix = [
    { id: 1, label: 'Gazon', checked: false },
    { id: 2, label: 'Dalle', checked: false },
    { id: 2, label: 'Gravier concassé', checked: false },
    { id: 2, label: 'Autre', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentesept = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false },
   
    // ... ajoutez d'autres options ici
  ];
  options_trentehuit = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_trenteneuf = [
    { id: 1, label: 'Shelter', checked: false },
    { id: 2, label: 'Bâtiment', checked: false }, 
    { id: 2, label: 'Abri', checked: false }, 
    { id: 2, label: 'Autre', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarante = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false }, 
    { id: 2, label: 'À réhabiliter', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quaranteun = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantedeux = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantetrois = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantequatre = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantecinq = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantesix = [
    { id: 1, label: 'en cours', checked: false },
    { id: 2, label: 'Périmé', checked: false }, 
    { id: 2, label: 'NA (étiquette illisible)', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quarantesept = [
    { id: 1, label: 'Inexistant', checked: false },
    { id: 2, label: 'Existant', checked: false },  
    // ... ajoutez d'autres options ici
  ];
  options_quarantehuit = [
    { id: 1, label: 'en cours', checked: false },
    { id: 2, label: 'Périmé', checked: false }, 
    { id: 2, label: 'NA (étiquette illisible)', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_quaranteneuf = [
    { id: 1, label: 'Split', checked: false },
    { id: 2, label: 'Windows', checked: false },  
    // ... ajoutez d'autres options ici
  ];
  options_cinquante = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false }, 
    { id: 2, label: 'Oxydé', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_cinquanteun = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Dégradé', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_cinquantedeux = [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_cinquantetrois = [
    { id: 1, label: 'Existante', checked: false },
    { id: 2, label: 'Inexistante', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  options_cinquantequatre= [
    { id: 1, label: 'Bon', checked: false },
    { id: 2, label: 'Mauvais', checked: false }, 
    { id: 2, label: 'Verrouillée', checked: false }, 
    // ... ajoutez d'autres options ici
  ];
  
  
  

  @ViewChild('myElement', { static: true }) myElementRef!: ElementRef;
  
rapportComplet:any;
id_rapport : any 
titrerapport : any
imagesite: any
imagesite0:any
imagesite1:any
imagesite2:any
imagesite3:any
description_site0:any 
description_site1:any 
description_site2:any 
description_site3:any 
nomsite:any
nomoperateur:any
created_At:any
nom_membre0:any
prenom_membre0: any
fonction_membre0: any
nom_membre1:any
prenom_membre1: any
fonction_membre1: any
nom_membre2:any
prenom_membre2: any
fonction_membre2: any
longitude:any
latitude:any
altitude:any
ville:any
commune:any
departement:any
region:any
date_service:any
hauteur_batiment:any
nbre_vigile:any
commentaire:any
plansite:any
description_plan:any
imageLink = 'http://localhost:3000/rapport/image-site';
Membreequipe : any
dataFetched = false; // Add a flag to track data fetching

async ngOnInit() {
  // Recuperation de l'ID du rapport
  this.route.params.subscribe((params) => {
  this.id_rapport = params['id'];
  });

  try {
    // Envoie des informations vers le back-end
    const response: any = await this.apiservice.InfoReport(this.id_rapport).toPromise();
    console.log('Info du rapport ramenées avec succès', response);
    this.rapportComplet = response;
    this.titrerapport = this.rapportComplet[0].titre_rapport;
    this.Membreequipe = this.rapportComplet[1];
    this.imagesite = this.rapportComplet[5][2].image_site;
    this.nomsite = this.rapportComplet[4][0].nomsite;
    this.nomoperateur = this.rapportComplet[0].nom_operateur;
    this.created_At = this.rapportComplet[4][0].createdAt;
    this.nom_membre0 = this.rapportComplet[1][0].nom;
    this.prenom_membre0 = this.rapportComplet[1][0].prenom;
    this.fonction_membre0 = this.rapportComplet[1][0].fonction;
    this.nom_membre1 = this.rapportComplet[1][1].nom;
    this.prenom_membre1 = this.rapportComplet[1][1].prenom;
    this.fonction_membre1 = this.rapportComplet[1][1].fonction;
    this.nom_membre2 = this.rapportComplet[1][2].nom;
    this.prenom_membre2 = this.rapportComplet[1][2].prenom;
    this.fonction_membre2 = this.rapportComplet[1][2].fonction;
    this.longitude = this.rapportComplet[4][0].longitude;
    this.latitude = this.rapportComplet[4][0].latitude;
    this.altitude = this.rapportComplet[4][0].altitude;
    this.ville = this.rapportComplet[4][0].nom_ville_quartier;
    this.commune = this.rapportComplet[4][0].nom_commune;
    this.departement = this.rapportComplet[4][0].nom_departement;
    this.region = this.rapportComplet[4][0].nom_region;
    this.date_service = this.rapportComplet[4][0].datemiseservice;
    this.hauteur_batiment = this.rapportComplet[4][0].hauteurbatiment;
    this.nbre_vigile = this.rapportComplet[4][0].nbrevigile;
    this.commentaire = this.rapportComplet[4][0].observation;
    this.plansite = this.rapportComplet[5][3].image_site;
    this.description_plan = this.rapportComplet[5][3].description_site;
    this.imagesite0 = this.rapportComplet[5][0].image_site;
    this.description_site0 = this.rapportComplet[5][0].description_site;
    this.imagesite1 = this.rapportComplet[5][1].image_site;
    this.description_site1 = this.rapportComplet[5][1].description_site;
    this.imagesite2 = this.rapportComplet[5][2].image_site;
    this.description_site2 = this.rapportComplet[5][2].description_site;
    this.imagesite3 = this.rapportComplet[5][3].image_site;
    this.description_site3 = this.rapportComplet[5][3].description_site;

    // Set the dataFetched flag to true
    this.generatePDF();
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la recherche du rapport', error);
    // Handle the error
  }
}


generatePDF() {
  const element = this.myElementRef.nativeElement;
  html2pdf()
    .set({
      filename: 'Rapport-nom-utilisateur.pdf',
    })
    .from(element)
    .save();
}
}
