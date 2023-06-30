import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public imageSrc: any;
  user: any;
 

  nom : any;
  prenom : any;
  profession : any;
  mail : any;
  num : any;
  username : any;
  mdp : any;
  profil : any;
  imageusers : any



 
  constructor(private sanitizer: DomSanitizer, private apiservice:ApiService) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  // selectedFile !: File ;

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  //   console.log('Selected File:', this.selectedFile);}

  ngOnInit():void{}


  Submited() {
     let user = {

      nom_user :this.nom,
      prenom_user :this.prenom,
      email: this.mail,
      contact :this.num,
      profession :this.profession,
      nom_utilisateur :this.username,
      mdp :this.mdp,
      profile :this.profil,
      image_users :JSON.stringify(this.imageSrc) ,
     }
     console.log(this.imageSrc);
    this.apiservice.registerUser(user).subscribe(
      (response: any) => {
        console.log('Utilisateur enregistré avec succès', response);
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'inscription', error);
        // Gérer l'erreur d'inscription
      }
    );
  }
}
