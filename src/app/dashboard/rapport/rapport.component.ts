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
  
  
  

  @ViewChild('myElement', { static: true }) myElementRef!: ElementRef;
  
rapportComplet:any;
id_rapport : any 
titrerapport : any 
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
      filename: 'Rapport-'+this.titrerapport+'.pdf',
    })
    .from(element)
    .save();
}
    
  

}
