import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiImagesDService } from 'src/app/core/api-images-d.service';
import { ApiImagesQService } from 'src/app/core/api-images-q.service';
import { ApiImagesTService } from 'src/app/core/api-images-t.service';
import { ApiImagesService } from 'src/app/core/api-images.service';

@Component({
  selector: 'app-photosite',
  templateUrl: './photosite.component.html',
  styleUrls: ['./photosite.component.scss']
})
export class PhotositeComponent {

  public imagesiteUn: any;
  public imagesiteDeux: any;
  public imagesiteTrois: any;
  public imagesiteQuatre: any;

  photosite_un: any;
  descriptionsite_un: any;

  photosite_deux: any;
  descriptionsite_deux: any;

  photosite_trois: any;
  descriptionsite_trois: any;

  photosite_quatre: any;
  descriptionsite_quatre: any;
  formData = new FormData();



  constructor(private sanitizer: DomSanitizer, private api_imge_situn:ApiImagesService, private api_imge_sitdeux:ApiImagesDService , private api_imge_sittrois:ApiImagesTService , private api_imge_sitquatre:ApiImagesQService , private router: Router) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (un: any) => {
      this.imagesiteUn = this.sanitizer.bypassSecurityTrustUrl(un.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    };

  reviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (deux: any) => {
      this.imagesiteDeux = this.sanitizer.bypassSecurityTrustUrl(deux.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    };

  eviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (trois: any) => {
      this.imagesiteTrois = this.sanitizer.bypassSecurityTrustUrl(trois.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    };

  viewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (quatre: any) => {
      this.imagesiteQuatre = this.sanitizer.bypassSecurityTrustUrl(quatre.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }


    
  onFileChanged(event: any) {
    // Collecte des informations du formulaire
    this.photosite_un = event.target.files[0];
    this.formData.append('image_site', this.photosite_un, this.photosite_un.name);
    this.formData.append('description_site', this.descriptionsite_un);

    this.photosite_deux = event.target.files[0];
    this.formData.append('image_site', this.photosite_deux, this.photosite_deux.name);
    this.formData.append('description_site', this.descriptionsite_deux);

    this.photosite_trois = event.target.files[0];
    this.formData.append('image_site', this.photosite_trois, this.photosite_trois.name);
    this.formData.append('description_site', this.descriptionsite_trois);

    this.photosite_quatre = event.target.files[0];
    this.formData.append('image_site', this.photosite_un, this.photosite_quatre.name);
    this.formData.append('description_site', this.descriptionsite_quatre);
  }

  ngOnInit():void{}


  Submited() {

    // Envoie des informations vers le back-end 
    this.api_imge_situn.registerImageUn(this.formData).subscribe(
      (response: any) => {
        console.log('la prémière image de infosite a été enregistrée avec succès', response);
        this.router.navigate(['/']);
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'inscription', error);
        // Gérer l'erreur d'inscription
      }
    );

    this.api_imge_sitdeux.registerImageDeux(this.formData).subscribe(
      (response: any) => {
        console.log('la deuxième image de infosite a été enregistrée avec succès', response);
        this.router.navigate(['/']);
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'inscription', error);
        // Gérer l'erreur d'inscription
      }
    );
    this.api_imge_sittrois.registerImageTrois(this.formData).subscribe(
      (response: any) => {
        console.log('la troisième image de infosite a été enregistrée avec succès', response);
        this.router.navigate(['/']);
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'inscription', error);
        // Gérer l'erreur d'inscription
      }
    );
    this.api_imge_sitquatre.registerImageQuatre(this.formData).subscribe(
      (response: any) => {
        console.log('la quatrième image de infosite a été enregistrée avec succès', response);
        this.router.navigate(['/']);
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'inscription', error);
        // Gérer l'erreur d'inscription
      }
    );
  }
}


