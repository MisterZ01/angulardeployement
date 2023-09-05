import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router'
import { ApiNotificationService } from '../core/api-notification.service';

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
  formData = new FormData();


 
  constructor(private sanitizer: DomSanitizer,
    private apiservice:ApiService,
    private router: Router,
    private alert: ApiNotificationService) {}

   

  onFileChanged(event: any) {
    // Collecte des informations du formulaire
    this.imageusers = event.target.files[0];
    this.formData.append('image_users', this.imageusers, this.imageusers.name);
    this.formData.append('nom_user', this.nom);
    this.formData.append('prenom_user', this.prenom);
    this.formData.append('email', this.mail);
    this.formData.append('contact', this.num);
    this.formData.append('profession', this.profession);
    this.formData.append('nom_utilisateur', this.username);
    this.formData.append('mdp',this.mdp);
    this.formData.append('profile',this.profil);
  }

  ngOnInit():void{}


  Submited() {

    // Envoie des informations vers le back-end 
    this.apiservice.registerUser(this.formData).subscribe(
      (response: any) => {
        this.alert.inscriptionReussie();
        
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        this.alert.erreur();


      }
    );
  }
}

// ancien code de collecte des informations du formulaire
    //  let user = {

    //   nom_user :this.nom,
    //   prenom_user :this.prenom,
    //   email: this.mail,
    //   contact :this.num,
    //   profession :this.profession,
    //   nom_utilisateur :this.username,
    //   mdp :this.mdp,
    //   profile :this.profil,
    //   image_users :this.imageusers ,
    //  }
    //  console.log(this.formData);
    //  console.log(this.formData.getAll);