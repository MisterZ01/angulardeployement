import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';
import { UserStoreService } from 'src/app/shared/userInfos/userStore.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

constructor(
  private api:ApiService, 
  private auth: AuthService, 
  private userstore : UserStoreService){}

user:any;
nombre_utilisateur:any
nombre_rapport_fini:any
nombre_rapport_non_fini:any

 ngOnInit(){
  this.api.addHeader(localStorage.getItem('token'))
  this.api.getUser().subscribe((response: any) => {
    this.user = response;
    console.log(response);
    this.auth.setNom(this.user.nom_user);
    this.auth.setUserId(this.user.id);
  });

  // statistic de la base de donnees
  this.api.countUser().subscribe((response: any) => { //le nombre d'utilisateurs enregistré
    this.nombre_utilisateur = response;
});
  this.api.countReport().subscribe((response: any) => { //le nombre d'utilisateurs enregistré
    this.nombre_rapport_fini = response.nbrapportFini;
    this.nombre_rapport_non_fini = response.nbrapportNonFini;
});



}

}
