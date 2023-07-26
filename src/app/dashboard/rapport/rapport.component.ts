
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewChild, ElementRef } from '@angular/core';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit{
  @ViewChild('myElement', { static: true }) myElementRef!: ElementRef;
  
  // dans le component de la page d'affichage de la liste :
  
  // recuperer le id du rapport,
  // le chercher dans la bd et envoyer ses infos
  // rediriger la route vers ce document et ajouter les infos de du rapport au lien

  // ici :

  // on recuperer les infos envoyees a travers le lien, 
  // remplir le rapport
  // nommer le rapport
  // telechager le Rapport


  ngOnInit() {  
    const element = this.myElementRef.nativeElement;
    html2pdf().set({
      filename: 'Rapport-nom-utilisateur.pdf',
    }).from(element).save();
  }

  

}
