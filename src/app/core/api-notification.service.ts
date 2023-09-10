import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  Swal  from "sweetalert2/dist/sweetalert2.js"
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class ApiNotificationService {
  constructor(private router: Router) { }
  
  //fonction qui va afficher un message d'erreur unique pour tout les components
  erreur(){
    Swal.fire({
      icon: 'error',
      text: 'Une erreur s\'est produite!',
    })
  }
  //RAPPORT
  rapportCreer(){
    Swal.fire({
      icon: 'success',
      text: 'rapport créé avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/presentation']);

      }
    })
  }
  //MODIFICATION DU RAPPORT
  Modificationreussie(){
    Swal.fire({
      icon: 'success',
      text: 'La modification est un succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
      }
    })
  }
  //MEMBRES EQUIPE
  membreEquipeCreer(){
    Swal.fire({
      icon: 'success',
      text: 'membres de l\'Equipe créé avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/infosite']);

      }
    })
  }

  //INFO SITE
  infoSiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'les informations du site sont créées avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/photosite']);

      }
    })
  }

  //PHOTO SITE
  photoSiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'les photos du site sont créées avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/environnement']);

      }
    })
  }


  //ENVIRONNEMENT DU SITE
  environnementiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'l\'environnement du site est créé avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/synthese']);

      }
    })
  }
  //SYNTHESE DU SITE
  syntheseStiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'la synthèse du rapport est créé avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/conclusion']);

      }
    })
  }
  //CONCLUSION DU SITE
  conclusionStiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'la conclusion du rapport est créé avec succès!',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/annexes']);

      }
    })
  }
  //ANNEXE DU SITE
  annexeStiteCreer(){
    Swal.fire({
      icon: 'success',
      text: 'les annxes sont enrégistrés! \n Vous avez finalisé la redaction du rapport',
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/listerapports']);

      }
    })
  }
  
  //CONNEXION 
  connexionReussie(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Connexion réussie',
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/welcome']);
  
      
    })
  }
  connexionNonReussie(message:any){
    let resulat:string = ''
    if(message==401){
      resulat ="Erreur de mot de passe ou identifiant";
    }
    else if(message==400){
      resulat="Cet utilisateur n'existant pas";
    }
    else if(message==500){
      resulat="Entrez un mot de passe";
    }
    Swal.fire({
      icon: 'error',
      
      text: resulat,
    })
  }


  //INSCRIPTION 
  inscriptionReussie(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inscription réussie',
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      if (result.isConfirmed) {
        //rediriger vers la route de la page suivante
        this.router.navigate(['/']);
  
      }
    })
  }



}
