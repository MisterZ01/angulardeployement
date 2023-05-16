import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photosite',
  templateUrl: './photosite.component.html',
  styleUrls: ['./photosite.component.scss']
})
export class PhotositeComponent {

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
