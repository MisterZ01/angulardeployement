import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiImagesDService } from 'src/app/core/api-images-d.service';
import { ApiImagesQService } from 'src/app/core/api-images-q.service';
import { ApiImagesTService } from 'src/app/core/api-images-t.service';
import { ApiImagesService } from 'src/app/core/api-images.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

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
  id_rapport : any = this.auth.getReportId();
  descriptionsite_quatre: any;
  
  formData1 = new FormData();
  formData2 = new FormData();
  formData3 = new FormData();
  formData4 = new FormData();



  constructor(private sanitizer: DomSanitizer,
    private api_imge_sit:ApiImagesService,
    private api_imge_sitdeux:ApiImagesDService ,
    private api_imge_sittrois:ApiImagesTService ,
    private api_imge_sitquatre:ApiImagesQService ,
    private router: Router,
    private auth: AuthService,
    private http: HttpClient) {}

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


    
  // onFileChanged(event: any) {
  //   // Collecte des informations du formulaire
  //   this.photosite_un = event.target.files[0];
  //   this.formData1.append('image_site', this.photosite_un,  this.photosite_un.name);
  //   this.formData1.append('description_image', this.descriptionsite_un);
  //   this.formData1.append('id_rapport', this.id_rapport);

  //   this.photosite_deux = event.target.files[1];
  //   this.formData2.append('image_site', this.photosite_deux, this.photosite_deux.name);
  //   this.formData2.append('description_image', this.descriptionsite_deux);
  //   this.formData2.append('id_rapport', this.id_rapport);

  //   this.photosite_trois = event.target.files[2];
  //   this.formData3.append('image_site', this.photosite_trois, this.photosite_trois.name);
  //   this.formData3.append('description_image', this.descriptionsite_trois);
  //   this.formData3.append('id_rapport', this.id_rapport);

  //   this.photosite_quatre = event.target.files[3];
  //   this.formData4.append('image_site', this.photosite_un, this.photosite_quatre.name);
  //   this.formData4.append('description_image', this.descriptionsite_quatre);
  //   this.formData4.append('id_rapport', this.id_rapport);

  // }

  ngOnInit():void{}

  
  Submited() {

    const idRapport = this.id_rapport; // Récupérez l'ID du rapport
    
    // image un 
    const fileInputun:any = document.getElementById('file-input') as HTMLInputElement;
    const premiereImage = fileInputun.files[0];
    const descriptionImageun = this.descriptionsite_un; // Récupérez la description de l'image
 
   // image deux
   const fileInputdeux:any = document.getElementById('file-imge') as HTMLInputElement;
   const deuxiemeImage = fileInputdeux.files[0];
   const descriptionImagedeux = this.descriptionsite_deux; // Récupérez la description de l'image
    
   // image trois
   const fileInputtrois:any = document.getElementById('file-img') as HTMLInputElement;
   const troisiemeImage = fileInputtrois.files[0];
   const descriptionImagetrois = this.descriptionsite_trois; // Récupérez la description de l'image
    
   // image quatre
   const fileInputquatre:any = document.getElementById('file-im') as HTMLInputElement;
   const quatriemeImage = fileInputquatre.files[0];
   const descriptionImagequatre = this.descriptionsite_quatre; // Récupérez la description de l'image


   // envoi de données 

   this.api_imge_sit.registerImage(premiereImage, descriptionImageun, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
       console.log('Téléchargement réussi', response);
     },
     (error) => {
       // Gérez les erreurs ici
       console.error('Erreur lors du téléchargement', error);
     }
   );
   
   this.api_imge_sit.registerImage(deuxiemeImage, descriptionImagedeux, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
       console.log('Téléchargement réussi', response);
     },
     (error) => {
       // Gérez les erreurs ici
       console.error('Erreur lors du téléchargement', error);
     }
   );
   
   this.api_imge_sit.registerImage(troisiemeImage, descriptionImagetrois, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
       console.log('Téléchargement réussi', response);
     },
     (error) => {
       // Gérez les erreurs ici
       console.error('Erreur lors du téléchargement', error);
     }
   );
   
   this.api_imge_sit.registerImage(quatriemeImage, descriptionImagequatre, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
       console.log('Téléchargement réussi', response);
     },
     (error) => {
       // Gérez les erreurs ici
       console.error('Erreur lors du téléchargement', error);
     }
   );
   





















  
    // console.log('premiereImage, descriptionImage, idRapport')
    // console.log(premiereImage, descriptionImage, idRapport)
  



  //   let formData ={
  //     id_rapport : this.id_rapport,
  //     description_image : this.descriptionsite_un,
  //     image_site :  this.photosite_un

  //   }

  //   console.log('formData')
  //   console.log(formData)
  //   // Envoie des informations vers le back-end 
  //   this.api_imge_sit.registerImage(formData).subscribe(
  //     (response: any) => {
  //       console.log('la prémière image de infosite a été enregistrée avec succès', response);
  //       this.router.navigate(['/']);
        
  //       // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
  //     },
  //     (  error: any) => {
  //       console.error('Une erreur s\'est produite lors de l\'inscription', error);
  //       // Gérer l'erreur d'inscription
  //     }
  //   );

  //   this.api_imge_sit.registerImage(this.formData2).subscribe(
  //     (response: any) => {
  //       console.log('la deuxième image de infosite a été enregistrée avec succès', response);
  //       this.router.navigate(['/']);
        
  //       // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
  //     },
  //     (  error: any) => {
  //       console.error('Une erreur s\'est produite lors de l\'inscription', error);
  //       // Gérer l'erreur d'inscription
  //     }
  //   );
  //   this.api_imge_sit.registerImage(this.formData3).subscribe(
  //     (response: any) => {
  //       console.log('la troisième image de infosite a été enregistrée avec succès', response);
  //       this.router.navigate(['/']);
        
  //       // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
  //     },
  //     (  error: any) => {
  //       console.error('Une erreur s\'est produite lors de l\'inscription', error);
  //       // Gérer l'erreur d'inscription
  //     }
  //   );
  //   this.api_imge_sit.registerImage(this.formData4).subscribe(
  //     (response: any) => {
  //       console.log('la quatrième image de infosite a été enregistrée avec succès', response);
  //       this.router.navigate(['/']);
        
  //       // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
  //     },
  //     (  error: any) => {
  //       console.error('Une erreur s\'est produite lors de l\'inscription', error);
  //       // Gérer l'erreur d'inscription
  //     }
  //   );
  }
}


