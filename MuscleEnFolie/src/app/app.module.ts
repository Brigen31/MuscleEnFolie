import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './signup/signup.component'; // importez MatCardModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './env/environement';
import { AppRoutingModule } from './app-routing.module';
import { ProfileViewPageComponent } from './profile-view-page/profile-view-page.component';
import Swal from 'sweetalert2';
import { MusclesComponent } from './muscles/muscles.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { SeanceCardComponent } from './seance-card/seance-card.component';
import { ShortTextPipe } from './pipe/short-text.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    SignupComponent,
    ProfileViewPageComponent,
    MusclesComponent,
    HomePageComponent,
    SeanceCardComponent,
    ShortTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]), // ajoutez vos routes ici
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, // ajoutez MatCardModule à la liste des imports
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [
    { provide: 'Swal', useValue: Swal }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
