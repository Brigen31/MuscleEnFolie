import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {
  
  url = 'https://api.api-ninjas.com/v1/exercises?muscle=triceps'
  
  // Ajoutez votre clé API ici
  apiKey = 'RFqrjKEO6TDnDZQB52UpBPal61dkoS9qdVTAgLQr';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': this.apiKey
    })
  };

  constructor(private http: HttpClient) { }

  getExercises(){
    return this.http.get(this.url, this.httpOptions)
  }
}