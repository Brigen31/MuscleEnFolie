import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SceanceService {
  
  constructor(private db: AngularFirestore) { }

  getSceance(name: string): Observable<any>{
    return this.db.collection('sceances').doc(name).valueChanges();
  }
  getSceances(): Observable<any> {
    return this.db.collection('sceances').valueChanges();
  }
}
