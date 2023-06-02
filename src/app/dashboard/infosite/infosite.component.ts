import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.component.html',
  styleUrls: ['./infosite.component.scss']
})
export class InfositeComponent {

  // public customToolbar : object = {
  //   items : ['Bold', 'Italic', 'Undo', 'Redo', 'createTable', 'image']
  // };  

  htmlContent: string;
  config: AngularEditorConfig;

  constructor() {
    this.htmlContent = ''; // Set initial value for htmlContent property
    this.config  = {
 
       editable: true,
      spellcheck: true,
      height: '10rem',
      minHeight: '5rem',
      placeholder: 'Entrer une observation....',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      customClasses: [
        {
          name: 'Quote',
          class: 'quoteClass',
        },
        {
          name: 'Title Heading',
          class: 'titleHead',
          tag: 'h1',
        },
      ],
    };
  }



}
