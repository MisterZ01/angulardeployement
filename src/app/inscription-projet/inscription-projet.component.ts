import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-projet',
  templateUrl: './inscription-projet.component.html',
  styleUrls: ['./inscription-projet.component.scss']
})
export class InscriptionProjetComponent {

  
  themeListe : Array<any>= []

  nouvelTheme={theme:"",equipe:""}








  enregistrerProjet(){

    if(this.nouvelTheme.theme && this.nouvelTheme.equipe){
      this.themeListe.push(this.nouvelTheme)
      this. nouvelTheme={theme:"",equipe:""}
      let button= document.getElementById('fermeture')
      button?.click()
    }

  }

}
