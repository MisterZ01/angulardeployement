import { Component } from '@angular/core';
import { ApiInfosyntheseService } from 'src/app/core/api-infosynthese.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
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
    private auth: AuthService,
    private alert: ApiNotificationService
    ) {}

  Submited() {
    let conclusion = {

      operateur : this.operateur,
      conformite : this.conformite,
      id_rapport: this.auth.getReportId()

    }
    this.api_synthese.registerConclusion(conclusion).subscribe(
      (response: any) => {
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
        this.alert.conclusionStiteCreer()
      },
      (  error: any) => {
        this.alert.erreur()
        // Gérer l'erreur d'inscription
      }
    );
  }

}
