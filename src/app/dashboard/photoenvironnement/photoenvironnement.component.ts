import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photoenvironnement',
  templateUrl: './photoenvironnement.component.html',
  styleUrls: ['./photoenvironnement.component.scss']
})
export class PhotoenvironnementComponent {

  public imagenvUn: any;
  public imagenvDeux: any;
  public imagenvTrois: any;
  public imagenvQuatre: any;

  constructor(private sanitizer: DomSanitizer) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenvUn = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  reviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenvDeux = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }
  eviewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenvTrois = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
    }
  viewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenvQuatre = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }

}
