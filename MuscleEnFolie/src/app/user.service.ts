import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  async login(email: string, password: string) {
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    if (credential.user) {
      return this.getUser(credential.user.uid);
    } else {
      // Handle the situation where user is null
      throw new Error('User is null');
    }
  }

  async createUser(email: string, password: string, user: any) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    if (credential.user) {
      // Ajouter l'email à l'objet user
      user.email = email;
      user.password = password;
      // Définir les données de l'utilisateur dans Firestore
      await this.db.collection('users').doc(credential.user.uid).set(user);

      return credential.user;
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