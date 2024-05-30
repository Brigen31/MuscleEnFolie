import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
  private apiKey = 'RFqrjKEO6TDnDZQB52UpBPal61dkoS9qdVTAgLQr';

  constructor(private http: HttpClient) { }

  getExercises(muscle: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get<any>(this.apiUrl + muscle, { headers });
  }
}