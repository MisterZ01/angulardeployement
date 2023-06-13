import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiMembreService } from 'src/app/core/api-membre.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public imageSrc: any;
  memb: any;


  nom : any;
  prenom : any;
  fonction : any;

  constructor(private sanitizer: DomSanitizer, private api_memb_s:ApiMembreService) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }

    ngOnInit(): void {}

    Submited() {
      let memb = {
  
       nom :this.nom,
       prenom :this.prenom,
       fonction: this.fonction,
      }
      this.api_memb_s.registerMembre(memb).subscribe(
        (response: any) => {
          console.log("les membres d'équipe ont été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
      );
    }  
  
}
