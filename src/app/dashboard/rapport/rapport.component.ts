import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent {


  // exportPDF() {
  //   const element = document.getElementById('rapport'); // Remplacez 'content' par l'ID de l'élément contenant le contenu à exporter
  
  //   html2canvas(element).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jspdf('p', 'mm', 'a4'); // Créez une instance de jsPDF avec le format souhaité
  
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('export.pdf'); // Téléchargez le fichier PDF avec le nom souhaité
  //   });
  // }
  

}
