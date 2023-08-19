import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listerapports',
  templateUrl: './listerapports.component.html',
  styleUrls: ['./listerapports.component.scss']
})
export class ListerapportsComponent {
  constructor(private http: HttpClient) {

    
    this.http.get('http://localhost:3000/rapport/listrapport').subscribe(resultat => 
    
    this.rapports = resultat
    
    
    );
     
   }
   rapports:any
  
  //formatage du statut (1 : terminé; 0: en cours )
   getStatus(statut:any){
    if(statut==1) return true ;else return false;
   }
}
