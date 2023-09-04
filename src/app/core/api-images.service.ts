import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesService {

  private apiUrl = 'http://localhost:3000/imagesite';

  host = environment.host
  headers: any
  boundary:any ="this is my boundary hj"

  addHeader(){
    this.headers = new HttpHeaders()
    .set('Content-Type', `multipart/form-data;boundary=${this.boundary}` )
  }
  

  constructor(private http: HttpClient) { }


  registerImage(file: File, descriptionImage: string, idRapport: number) {
    const formData = new FormData();
    formData.append('image_site', file);
    formData.append('description_image', descriptionImage);
    formData.append('id_rapport', idRapport.toString());
  
    return this.http.post('http://localhost:3000/imagesite/image', formData);
  }

  registerAnnexeImage(file: File, idRapport: number) {
    const formData = new FormData();
    formData.append('image_annexe', file);
    formData.append('id_rapport', idRapport.toString());
  
    return this.http.post('http://localhost:3000/annexe/image', formData);
  }
  
}
