import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiInfosyntheseService } from 'src/app/core/api-infosynthese.service';
import { ApiNotificationService } from 'src/app/core/api-notification.service';
import { AuthService } from 'src/app/shared/userInfos/auth.service';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.scss']
})
export class SyntheseComponent implements OnInit{
  public imageSrc: any;
  synthe : any;
  partieconcernee: any;
  anormalies: any;
  recommandations: any;


  constructor(
    private sanitizer: DomSanitizer, 
    private api_synthese:ApiInfosyntheseService,
    private auth: AuthService,
    private alert: ApiNotificationService
    ) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  ngOnInit(): void {}

  Submited() {
    let synt = {

      partieconcernee : this.partieconcernee,
      anormalies : this.anormalies,
      recommandations : this.recommandations,
      id_rapport: this.auth.getReportId()

    }
    this.api_synthese.registerSynthese(synt).subscribe(
      (response: any) => {
        this.alert.syntheseStiteCreer();
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'inscription réussie
      },
      (  error: any) => {
        // Gérer l'erreur d'inscription
        this.alert.erreur();
      }
    );
  }

}
