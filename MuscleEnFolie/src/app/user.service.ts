// user.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  async createUser(email: string, password: string, user: any) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    if (credential.user) {
      return this.db.collection('users').doc(credential.user.uid).set(user);
    } else {
      // Handle the situation where user is null
      throw new Error('User is null');
    }
  }

  updateUser(uid: string, user: any) {
    return this.db.collection('users').doc(uid).update(user);
  }

  getUser(uid: string) {
    return this.db.collection('users').doc(uid).valueChanges();
  }
}