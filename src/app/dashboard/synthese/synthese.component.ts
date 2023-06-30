import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiInfosyntheseService } from 'src/app/core/api-infosynthese.service';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.scss']
})
export class SyntheseComponent implements OnInit{
  public imageSrc: any;
  synthe : any;
  partieconcernee: any;
  anormalies: any;
  recommandations: any;


  constructor(private sanitizer: DomSanitizer, private api_synthese:ApiInfosyntheseService) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  ngOnInit(): void {}

  Submited() {
    let synt = {

      partieconcernee : this.partieconcernee,
      anormalies : this.anormalies,
      recommandations : this.recommandations,
    }
    this.api_synthese.registerSynthese(synt).subscribe(
      (response: any) => {
        console.log("les infos de la synthese ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
  }

}
