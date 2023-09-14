import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import  Swal  from "sweetalert2/dist/sweetalert2.js"
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listerapports',
  templateUrl: './listerapports.component.html',
  styleUrls: ['./listerapports.component.scss']
})
export class ListerapportsComponent {
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {

    
    this.http.get('http://localhost:3000/rapport/listrapport').subscribe(resultat => 
    this.rapports = resultat

    );
     
   }
   rapports:any
  
  //formatage du statut (1 : terminé; 0: en cours )
   getStatus(statut:any){
    if(statut==1) return true ;else return false;
   }
  // telechager un rapport

  downloadTemplate(): void {
    // Navigate to the new route
    this.router.navigate(['/rapport/1']).then(() => {
      // After navigating to the new route, you can navigate back to the previous route
      // using location.back() or any other method you prefer.
      // For example, to navigate back after a delay, you can use a setTimeout.
      setTimeout(() => {
        this.router.navigate(['/listerapports']);
      }, 200); // 3000 milliseconds (3 seconds) delay before coming back
    });
  }

   //suprimer un rapport
   async SupprimerRapport(id:any){

     Swal.fire({
      title: 'Etes vous sûr de vouloir supprimer ?',
      text: "Vous ne pourrez plus restaurer le rapport!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        //suppression confirmée
        this.http.delete(`http://localhost:3000/rapport/delete/${id}`).subscribe(async resultat =>{
        console.log(resultat)
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/suppression', { skipLocationChange: true });
        Swal.fire(
          'Supprimé!',
          'Le rapport a été supprimé avec succès.',
          'success'
          )
          // After deletion, navigate to the same URL (refresh)
          // Force a page reload
          window.location.reload();
        },
        (error: any) => {
          Swal.fire(
            'Supprimé!',
            'Le rapport n\'a pas été supprimé.',
            'error'
          )
      }

        
        );
        
      }
    })



   }
}
