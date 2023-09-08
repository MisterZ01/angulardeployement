import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiMembreService } from 'src/app/core/api-membre.service';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';

@Component({
  selector: 'app-inforapport',
  templateUrl: './inforapport.component.html',
  styleUrls: ['./inforapport.component.scss']
})

export class InforapportComponent implements OnInit {

  // les variables du rapport collectées
  titreRapport: string = ''; // Initialize with an empty string
  //les variables de la modification
  editMode: boolean = false;
  id_rapport_a_modifier : any;
  // les variables du rapport a envoyer
  statut : any;
  titre_rapport : any;

  constructor(
    private sanitizer: DomSanitizer, 
    private apiservice: ApiService, 
    private auth: AuthService, 
    private alert: ApiNotificationService,
    private router: Router,
    private route: ActivatedRoute // ActivatedRoute for getting route parameters
  ) {}

  ngOnInit() {
    // Check if we are in edit mode based on a route parameter or some other criterion
    this.editMode = this.route.snapshot.url[1].path === 'edit';
    // Récupérer l'identifiant depuis la route
    this.id_rapport_a_modifier = this.route.snapshot.paramMap.get('id');


    // If in edit mode, fetch and populate the existing data
    if (this.editMode) {
      this.fetchExistingData(); // Implement this method to fetch existing data
    }
  }

  Submited() {
    const id_utilisateur = this.auth.getUserId();
    this.statut = 0;

    let rapport = {
      id_utilisateur: id_utilisateur,
      statut: this.statut,
      titre_rapport: this.titreRapport
    }
    let rapportAjour = {
      id_utilisateur: id_utilisateur,
      titre_rapport: this.titreRapport,
      id_rapport: this.id_rapport_a_modifier
    }
    if (this.editMode) {
      // Update existing data here
      this.updateReport(rapportAjour);
    } else {
      // Create new data here
      this.createReport(rapport);
    }
  }

  createReport(rapport:any) {
    // Add logic to create a new report
    this.apiservice.CreateReport(rapport).subscribe(
      (response: any) => {
        this.auth.setReportId(response);
        this.alert.rapportCreer();
      },
      (error: any) => {
        this.alert.erreur();
      }
    );
  }

  updateReport(rapportAjour:any,) {
    // Add logic to create a new report
    this.apiservice.UpdateReport(rapportAjour).subscribe(
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
      this.apiservice.InfoUniqueReport(this.id_rapport_a_modifier).subscribe(
        (response: any) => {

          console.log('response');
          console.log(response);
          this.titreRapport = response.titre_rapport; // recuperer le titre du rapport dans le rapport complet

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
