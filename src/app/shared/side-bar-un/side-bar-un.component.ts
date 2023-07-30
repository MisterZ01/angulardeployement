import { Component, OnInit } from '@angular/core';
import { AuthService } from '../userInfos/auth.service';
import { ApiService } from 'src/app/core/api.service';
import { UserStoreService } from '../userInfos/userStore.service';

@Component({
  selector: 'app-side-bar-un',
  templateUrl: './side-bar-un.component.html',
  styleUrls: ['./side-bar-un.component.scss']
})
export class SideBarUnComponent implements OnInit{

  user :any;
  imageLink = 'http://localhost:3000/utilisateur/profile-image';
  apiservice: any;
  router: any;
  formData = new FormData();

  constructor(private api:ApiService, 
    private auth: AuthService, 
    private userstore : UserStoreService){}
  ngOnInit(){
    this.api.addHeader(localStorage.getItem('token'))
    this.api.getUser().subscribe((response: any) => {
      this.user = response;
      console.log(this.user.id);


      console.log("this.user.id");
      const id_utilisateur = this.user.id;
      this.statut =0;
      this.formData.append('statut', this.statut);
      this.formData.append('id_utilisateur', id_utilisateur );
      let rapport = {
        id_utilisateur : id_utilisateur,
        statut : this.statut
      }
        // Envoie des informations vers le back-end 
        this.apiservice.CreateReport(rapport).subscribe(
          (response: any) => {
            console.log('rapport creer avec succes', response);
            this.router.navigate(['/presentation']);
            
            // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
          },
          (  error: any) => {
            console.error('Une erreur s\'est produite lors de la creation du rapport', error);
            // Gérer l'erreur d'inscription
          }
        );
    });    

    
  }
  Deconnexion(){
    this.auth.signOut();
  }

  statut :any;
  CreerRapport(){
    const id_utilisateur = this.user.id;
    this.statut =0;
    this.formData.append('statut', this.statut);
    this.formData.append('id_utilisateur', id_utilisateur );

      // Envoie des informations vers le back-end 
      this.apiservice.CreateReport(this.formData).subscribe(
        (response: any) => {
          console.log('rapport creer avec succes', response);
          this.router.navigate(['/presentation']);
          
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de la creation du rapport', error);
          // Gérer l'erreur d'inscription
        }
      );


  }
}
