import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileViewPageComponent } from './profile-view-page/profile-view-page.component';


import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ProfileViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule
  ],
  providers: [
    { provide: 'Swal', useValue: Swal }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
