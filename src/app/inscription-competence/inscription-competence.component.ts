import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-competence',
  templateUrl: './inscription-competence.component.html',
  styleUrls: ['./inscription-competence.component.scss']
})
export class InscriptionCompetenceComponent {

  competenceListe : Array<any>= []

  nouvelleCompetence={competence:"",progression:""}








  enregistrerCompetence(){

    if(this.nouvelleCompetence.competence && this.nouvelleCompetence.progression){
      this.competenceListe.push(this.nouvelleCompetence)
      this. nouvelleCompetence={competence:"",progression:""}
      let button= document.getElementById('ferme')
      button?.click()
    }

  }

}
