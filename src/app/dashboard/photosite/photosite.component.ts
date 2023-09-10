import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiImagesDService } from 'src/app/core/api-images-d.service';
import { ApiImagesQService } from 'src/app/core/api-images-q.service';
import { ApiImagesTService } from 'src/app/core/api-images-t.service';
import { ApiImagesService } from 'src/app/core/api-images.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-photosite',
  templateUrl: './photosite.component.html',
  styleUrls: ['./photosite.component.scss']
})
export class PhotositeComponent {
  //les variables de la modification
  editMode: boolean = false;
  id_rapport_a_modifier : any;
  id_image_un : any ;
  id_image_deux : any ;
  id_image_trois : any ;
  id_image_quatre : any ;
  image_link : any = "http://localhost:3000/imagesite/image/update/oldname"; //lien pour recuperer une image unique

  //autres variables
  imagesiteUn: any;
  imagesiteDeux: any;
  imagesiteTrois: any;
  imagesiteQuatre: any;

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
    private route: ActivatedRoute, // ActivatedRoute for getting route parameters
    private auth: AuthService,
    private http: HttpClient,
    private alert: ApiNotificationService) {}

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

  ngOnInit(): void {
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



  if (this.editMode) {
    const idRapport = this.id_rapport_a_modifier; // Récupérez l'ID du rapport lors de la modification
    // Update existing data here
    this.updatePhotoSite(premiereImage, descriptionImageun,
      deuxiemeImage, descriptionImagedeux, 
      troisiemeImage, descriptionImagetrois,
      quatriemeImage, descriptionImagequatre,
      idRapport);
  } else {
    const idRapport = this.id_rapport; // Récupérez l'ID du rapport
    // Create new data here
    this.createPhotoSite(premiereImage, descriptionImageun,
      deuxiemeImage, descriptionImagedeux, 
      troisiemeImage, descriptionImagetrois,
      quatriemeImage, descriptionImagequatre,
      idRapport);
  }
  

  }


  createPhotoSite(premiereImage : any, descriptionImageun : any,
                deuxiemeImage : any, descriptionImagedeux : any, 
                troisiemeImage : any, descriptionImagetrois : any,
                quatriemeImage : any, descriptionImagequatre : any,
                idRapport : any) {
   // envoi de données 
   let reponseun : any = true;
   let reponsedeux : any = true;
   let reponsetrois : any = true;
   let reponsequatre : any = true;

   this.api_imge_sit.registerImage(premiereImage, descriptionImageun, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
      },
      (error) => {
        // Gérez les erreurs ici
        reponseun = false ;
     }
   );
   
   this.api_imge_sit.registerImage(deuxiemeImage, descriptionImagedeux, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
      },
     (error) => {
       // Gérez les erreurs ici
        reponsedeux = false ;
     }
   );
   
   this.api_imge_sit.registerImage(troisiemeImage, descriptionImagetrois, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
     },
     (error) => {
       // Gérez les erreurs ici
       reponsetrois = false ;
     }
   );
   
   this.api_imge_sit.registerImage(quatriemeImage, descriptionImagequatre, idRapport)
   .subscribe(
     (response) => {
       // Traitez la réponse du serveur ici
     },
     (error) => {
       // Gérez les erreurs ici
       reponsequatre = false ;
     }
   );
   
   //envoie de l'alerte
   if ( reponseun && reponsedeux &&reponsetrois && reponsequatre){
    this.alert.photoSiteCreer();
  }else {
    this.alert.erreur()
  }

  }

  updatePhotoSite(premiereImage : any, descriptionImageun : any,
    deuxiemeImage : any, descriptionImagedeux : any, 
    troisiemeImage : any, descriptionImagetrois : any,
    quatriemeImage : any, descriptionImagequatre : any,
    idRapport : any) {
      // envoi de données 
      let reponseun : any = true;
      let reponsedeux : any = true;
      let reponsetrois : any = true;
      let reponsequatre : any = true;
      // id des images à modifiées
      let id_image_un = this.id_image_un
      let id_image_deux = this.id_image_deux
      let id_image_trois = this.id_image_trois
      let id_image_quatre = this.id_image_quatre
   
      this.api_imge_sit.updateImage(premiereImage, descriptionImageun, idRapport, id_image_un)
      .subscribe(
        (response) => {
          // Traitez la réponse du serveur ici
         },
         (error) => {
           // Gérez les erreurs ici
           reponseun = false ;
        }
      );
      
      this.api_imge_sit.updateImage(deuxiemeImage, descriptionImagedeux, idRapport, id_image_deux)
      .subscribe(
        (response) => {
          // Traitez la réponse du serveur ici
         },
        (error) => {
          // Gérez les erreurs ici
           reponsedeux = false ;
        }
      );
      
      this.api_imge_sit.updateImage(troisiemeImage, descriptionImagetrois, idRapport, id_image_trois)
      .subscribe(
        (response) => {
          // Traitez la réponse du serveur ici
        },
        (error) => {
          // Gérez les erreurs ici
          reponsetrois = false ;
        }
      );
      
      this.api_imge_sit.updateImage(quatriemeImage, descriptionImagequatre,  idRapport, id_image_quatre)
      .subscribe(
        (response) => {
          // Traitez la réponse du serveur ici
        },
        (error) => {
          // Gérez les erreurs ici
          reponsequatre = false ;
        }
      );
      
      //envoie de l'alerte
      if ( reponseun && reponsedeux &&reponsetrois && reponsequatre){
       this.alert.Modificationreussie();
     }else {
       this.alert.erreur()
     }
   
  }

  fetchExistingData() {
    try {
      // Envoie des informations vers le back-end
      this.api_imge_sit.findImage(this.id_rapport_a_modifier).subscribe(
        (response: any) => {
          console.log(response);
          this.id_image_un = response[0].id;
          this.imagesiteUn = response[0].image_site;
          this.descriptionsite_un = response[0].description_site;

          this.id_image_deux = response[1].id;
          this.imagesiteDeux = response[1].image_site;
          this.descriptionsite_deux = response[1].description_site;

          this.id_image_trois = response[2].id;
          this.imagesiteTrois = response[2].image_site;
          this.descriptionsite_trois = response[2].description_site;

          this.id_image_quatre = response[3].id;
          this.imagesiteQuatre = response[3].image_site;
          this.descriptionsite_quatre = response[3].description_site;

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


