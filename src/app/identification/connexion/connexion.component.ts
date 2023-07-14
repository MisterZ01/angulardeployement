import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/userInfos/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  nom_utilisateur : any;
  mdp : any;
  formdata = new FormData();
  message:string = "";

  constructor (private api:ApiService,  private router: Router, private auth:AuthService){}
  ngOnInit(){  }
  Submited(){
    console.log("collecte des donnees du formulaire")
    this.formdata.append('email', this.nom_utilisateur)
    this.formdata.append('mdp', this.mdp)
    let user = {
       username :this.nom_utilisateur,
       password :this.mdp
    }
    //envoie des donnees
    this.api.Connexion(user).subscribe(
      (response: any) => {
          const responseData = response
          // console.log(responseData.access_token);
          this.auth.storeToken(responseData.access_token); 
          this.router.navigate(['/welcome']);
      },
      (error: any) => {
        if(error.status==401){
          this.message="Erreur de mot de passe ou identifiant";
        }
        else if(error.status==400){
          this.message="Cet utilisateur n'existant pas";
        }
        else if(error.status==500){
          this.message="Entrez un mot de passe";
        }
      }
    );
  }

}
function sendResponseData() {
  throw new Error('Function not implemented.');
}

