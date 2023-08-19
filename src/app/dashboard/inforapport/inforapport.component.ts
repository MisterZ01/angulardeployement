import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiMembreService } from 'src/app/core/api-membre.service';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-inforapport',
  templateUrl: './inforapport.component.html',
  styleUrls: ['./inforapport.component.scss']

})
export class InforapportComponent {

  // les variables du rapport collectées
  titreRapport : any;
  // les variables du rapport a envoyer
  statut : any;
  titre_rapport : any;

  constructor(
    private sanitizer: DomSanitizer, 
    private apiservice:ApiService, 
    private router:Router,
    private auth: AuthService,  ) {}



  Submited() {
    const id_utilisateur = this.auth.getUserId();
    this.statut =0;
    let rapport = {
      id_utilisateur : id_utilisateur,
      statut : this.statut,
      titre_rapport : this.titreRapport
    }

      // Envoie des informations vers le back-end 
      this.apiservice.CreateReport(rapport).subscribe(
        (response: any) => {
          console.log('rapport creer avec succes', response);
          // recuperation id du rapport
          this.auth.setReportId(response);
          
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de la creation du rapport', error);
          // Gérer l'erreur d'inscription
        }
      );
  }  
}
