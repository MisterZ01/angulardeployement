import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.scss']
})
export class EnvironnementComponent {

  public imageSrc: any;

  constructor(private sanitizer: DomSanitizer) {}

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    }

}
