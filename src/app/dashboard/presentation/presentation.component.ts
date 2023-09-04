import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiMembreService } from 'src/app/core/api-membre.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public imageSrc: any;
  membun: any;
  membdeux: any;
  membtrois: any;


  nom1 : any;
  prenom1 : any;
  fonction1 : any;

  nom2 : any;
  prenom2 : any;
  fonction2 : any;

  nom3 : any;
  prenom3 : any;
  fonction3 : any;

  constructor(
    private sanitizer: DomSanitizer, 
    private api_memb_s:ApiMembreService, 
    private api_membdeux:ApiMembreService, 
    private api_membtrois:ApiMembreService,
    private auth: AuthService ) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }

    ngOnInit(): void {}

    Submited() {
      let memb1 = {
  
       nom :this.nom1,
       prenom :this.prenom1,
       fonction: this.fonction1,
       id_rapport: this.auth.getReportId()
      }
      this.api_memb_s.registerMembreUn(memb1).subscribe(
        (response: any) => {
          console.log("le premier membre d'équipe a été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
      );

      let memb2 = {
  
       nom :this.nom2,
       prenom :this.prenom2,
       fonction: this.fonction2,
       id_rapport: this.auth.getReportId()
      }
      this.api_membdeux.registerMembreUn(memb2).subscribe(
        (response: any) => {
          console.log("le deuxième membre d'équipe a été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
      );

      let memb3 = {
  
       nom :this.nom3,
       prenom :this.prenom3,
       fonction: this.fonction3,
       id_rapport: this.auth.getReportId()
      }
      this.api_membtrois.registerMembreUn(memb3).subscribe(
        (response: any) => {
          console.log("le troisième membre d'équipe a été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
      );

    }  
  
}
