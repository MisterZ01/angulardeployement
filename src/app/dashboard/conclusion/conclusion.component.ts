import { Component } from '@angular/core';
import { ApiInfosyntheseService } from 'src/app/core/api-infosynthese.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent {

  operateur: any;
  conformite: any;
  constructor(
    private api_synthese:ApiInfosyntheseService,
    private auth: AuthService
    ) {}

  Submited() {
    let conclusion = {

      operateur : this.operateur,
      conformite : this.conformite,
      id_rapport: this.auth.getReportId()

    }
    this.api_synthese.registerConclusion(conclusion).subscribe(
      (response: any) => {
        console.log("les infos de la conclusion ont été enregistré avec succès", response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        console.error('Une erreur s\'est produite lors de l\'enregistrement', error);
        // Gérer l'erreur d'inscription
      }
    );
  }

}
