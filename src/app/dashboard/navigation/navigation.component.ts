import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

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
