import { Component } from '@angular/core';
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
export class InforapportComponent {
  imagesrc:any
  // les variables du rapport collectées
  titreRapport : any;
  nomoperateur:any;
  logoperateur: any;
  // les variables du rapport a envoyer
  statut : any;
  titre_rapport : any;

  constructor(
    private sanitizer: DomSanitizer, 
    private apiservice:ApiService, 
    private router:Router,
    private auth: AuthService, 
    private alert: ApiNotificationService, 
    
    ) {}

    previewImage(event: any) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagesrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
  
      }
  Submited() {
    const id_utilisateur = this.auth.getUserId();
    this.statut =0;
    let rapport = {
      id_utilisateur : id_utilisateur,
      statut : this.statut,
      titre_rapport : this.titreRapport,
      nom_operateur : this.nomoperateur,
      logo_operateur : this.logoperateur
    }

      // Envoie des informations vers le back-end 
      this.apiservice.CreateReport(rapport).subscribe(
        (response: any) => {
          // recuperation id du rapport
          this.auth.setReportId(response);
          this.alert.rapportCreer();
          
        },
        (  error: any) => {
          // Gérer l'erreur d'inscription
          this.alert.erreur();
        }
      );
  }  


}
