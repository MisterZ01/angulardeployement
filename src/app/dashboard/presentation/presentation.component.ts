import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMembreService } from 'src/app/core/api-membre.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public imageSrc: any;
  editMode : boolean = false;
  id_rapport_a_modifier:any;
  id_membre_un:any;
  id_membre_deux:any;
  id_membre_trois:any;
  membun: any;
  membdeux: any;
  membtrois: any;


  nom1 : any;
  prenom1 : any;
  fonction1 : any;

  nom2 : any;
  prenom2 : any;
  fonction2 : any;

  nom3 : any;
  prenom3 : any;
  fonction3 : any;

  constructor(
    private sanitizer: DomSanitizer, 
    private api_memb:ApiMembreService, 
    private auth: AuthService ,
    private router: Router,
    private route: ActivatedRoute ,// ActivatedRoute for getting route parameters
    private alert: ApiNotificationService) {}


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
      let memb1 = {
  
       nom :this.nom1,
       prenom :this.prenom1,
       fonction: this.fonction1,
       id_rapport: this.auth.getReportId()
      }


      let memb2 = {
  
       nom :this.nom2,
       prenom :this.prenom2,
       fonction: this.fonction2,
       id_rapport: this.auth.getReportId()
      }

      let memb3 = {
  
       nom :this.nom3,
       prenom :this.prenom3,
       fonction: this.fonction3,
       id_rapport: this.auth.getReportId()
      }
      
      if (this.editMode) {
        // Update existing data here
        this.updateMembre(memb1, memb2, memb3);
      } else {
        // Create new data here
        this.createMembre(memb1, memb2, memb3);
      }


    }  

  //-----------------------------------------------------------------------------------
  createMembre(memb1:any, memb2:any, memb3:any) {
      // Membre un
      this.api_memb.registerMembre(memb1).subscribe(
        (response: any) => {
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
          this.alert.membreEquipeCreer();
        },
        (  error: any) => {
          // Gérer l'erreur d'inscription
          this.alert.erreur();
        }
      );
      // Membre deux
      this.api_memb.registerMembre(memb2).subscribe(
        (response: any) => {
          console.log("le deuxième membre d'équipe a été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
        );
      // Membre trois
      this.api_memb.registerMembre(memb3).subscribe(
        (response: any) => {
          console.log("le troisième membre d'équipe a été enregistré avec succès", response);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        },
        (  error: any) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
          // Gérer l'erreur d'inscription
        }
      );
    }
  
    updateMembre(memb1:any, memb2:any, memb3:any) {
            // Membre un
            this.api_memb.updateMembre(memb1, this.id_membre_un, this.id_rapport_a_modifier).subscribe(
              (response: any) => {
                // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
                this.alert.membreEquipeCreer();
              },
              (  error: any) => {
                // Gérer l'erreur d'inscription
                this.alert.erreur();
              }
            );
            // Membre deux
            this.api_memb.updateMembre(memb2, this.id_membre_deux, this.id_rapport_a_modifier).subscribe(
              (response: any) => {
                console.log("le deuxième membre d'équipe a été enregistré avec succès", response);
                // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
              },
              (  error: any) => {
                console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
                // Gérer l'erreur d'inscription
              }
              );
            // Membre trois
            this.api_memb.updateMembre(memb3, this.id_membre_trois, this.id_rapport_a_modifier).subscribe(
              (response: any) => {
                console.log("le troisième membre d'équipe a été enregistré avec succès", response);
                // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
              },
              (  error: any) => {
                console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
                // Gérer l'erreur d'inscription
              }
            );
    }
  
    fetchExistingData() {
      try {
        // Envoie des informations vers le back-end
        this.api_memb.InfoMembreUniqueReport(this.id_rapport_a_modifier).subscribe(
          (response: any) => {
            console.log(response);
            //remplissage membre un
            this.id_membre_un = response[0].id; 
            this.nom1 = response[0].nom; 
            this.prenom1 = response[0].prenom; 
            this.fonction1 = response[0].fonction; 
            //remplissage membre deux
            this.id_membre_deux = response[1].id; 
            this.nom2 = response[1].nom; 
            this.prenom2 = response[1].prenom; 
            this.fonction2 = response[1].fonction; 
            //remplissage membre trois
            this.id_membre_trois = response[2].id; 
            this.nom3 = response[2].nom; 
            this.prenom3 = response[2].prenom; 
            this.fonction3 = response[2].fonction; 
  
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
