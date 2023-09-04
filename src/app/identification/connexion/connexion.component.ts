import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiNotificationService } from 'src/app/core/api-notification.service';
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

  constructor (private api:ApiService,
    private router: Router,
    private auth:AuthService,
    private alert: ApiNotificationService){}
  ngOnInit(){  }
  Submited(){
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
          this.alert.connexionReussie();
        },
        (error: any) => {
          
          this.alert.connexionNonReussie(error.status);
      }
    );
  }

}
function sendResponseData() {
  throw new Error('Function not implemented.');
}

