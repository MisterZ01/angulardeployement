import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiImagesService } from 'src/app/core/api-images.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.scss']
})
export class AnnexesComponent {
  constructor(private sanitizer: DomSanitizer,
    private auth: AuthService,
    private http: HttpClient,
    private api_imge_sit:ApiImagesService,
    private alert: ApiNotificationService) {}
  
  public imageanexUn: any;
  public imageanexDeux: any;
  public imageanexTrois: any;
  public imageanexQuatre: any;
  
  photosite_un: any;
  descriptionsite_un: any;

  photosite_deux: any;
  descriptionsite_deux: any;

  photosite_trois: any;
  descriptionsite_trois: any;

  photosite_quatre: any;
  id_rapport : any = this.auth.getReportId();
  descriptionsite_quatre: any;
  


  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageanexUn = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  reviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageanexDeux = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  eviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageanexTrois = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  viewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageanexQuatre = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }


    Submited() {

      //on doit changer le statut du rapport dans la fonction de l'API
      
      const idRapport = this.id_rapport; // Récupérez l'ID du rapport
      
      // image un 
      const fileInputun:any = document.getElementById('file-input') as HTMLInputElement;
      const premiereImage = fileInputun.files[0];
   
     // image deux
     const fileInputdeux:any = document.getElementById('file-imge') as HTMLInputElement;
     const deuxiemeImage = fileInputdeux.files[0];
      
     // image trois
     const fileInputtrois:any = document.getElementById('file-img') as HTMLInputElement;
     const troisiemeImage = fileInputtrois.files[0];
      
     // image quatre
     const fileInputquatre:any = document.getElementById('file-im') as HTMLInputElement;
     const quatriemeImage = fileInputquatre.files[0];
  
  
     // envoi de données 
      let reponseun : any = true;
      let reponsedeux : any = true;
      let reponsetrois : any = true;
      let reponsequatre : any = true;

     this.api_imge_sit.registerAnnexeImage(premiereImage,idRapport)
     .subscribe(
       (response) => {
         // Traitez la réponse du serveur ici
       },
       (error) => {
         // Gérez les erreurs ici
         reponseun = false;
       }
     );
     
     this.api_imge_sit.registerAnnexeImage(deuxiemeImage, idRapport)
     .subscribe(
       (response) => {
         // Traitez la réponse du serveur ici
       },
       (error) => {
         // Gérez les erreurs ici
         reponsedeux = false;
       }
     );
     
     this.api_imge_sit.registerAnnexeImage(troisiemeImage, idRapport)
     .subscribe(
       (response) => {
         // Traitez la réponse du serveur ici
       },
       (error) => {
         // Gérez les erreurs ici
         reponsetrois = false;
       }
     );
     
     this.api_imge_sit.registerAnnexeImage(quatriemeImage, idRapport)
     .subscribe(
       (response) => {
         // Traitez la réponse du serveur ici
        },
        (error) => {
          // Gérez les erreurs ici
          reponsequatre = false;
        }
        );
        
        //envoie de l'allerte
        if ( reponseun && reponsedeux &&reponsetrois && reponsequatre){
          
          this.alert.annexeStiteCreer()
        }else {
          this.alert.erreur()
        }
  
    }

}
