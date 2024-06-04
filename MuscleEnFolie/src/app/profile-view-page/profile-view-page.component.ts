import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrl: './profile-view-page.component.scss'
})
export class ProfileViewPageComponent {
  data = {user: {username: "brigen31", nom: 'BERCAJ', prenom: 'Brigen', age: '20', email: 'brigen.bercaj@ynov.com', password: '123', poids: '83', poidsDepart: '90', objectif: '70'}, seances: [{num: '1', durée: '5:00', duree: '1h'}, {num: '2', durée: '5:00', duree: '1h'}]}

  profileForm: FormGroup;
  isFormDisabled = true;

  constructor() {
    this.profileForm = new FormGroup({
      nom: new FormControl({value: this.data.user.nom, disabled: this.isFormDisabled}, Validators.required),
      prenom: new FormControl({value: this.data.user.prenom, disabled: this.isFormDisabled}, Validators.required),
      age: new FormControl({value: this.data.user.age, disabled: this.isFormDisabled}, Validators.required),
      email: new FormControl({value: this.data.user.email, disabled: this.isFormDisabled}, [Validators.required, Validators.email]),
      newpassword: new FormControl({value: '', disabled: this.isFormDisabled})
    });
  }

  editForm() {
    Swal.fire({
      title: 'Entrer votre mot de passe pour modifier vos informations',
      text: '',
      icon: 'warning',
      input: 'password', // Set input type to email
      inputPlaceholder: 'Enter votre mot de passe',
      showCancelButton: true,
      confirmButtonText: 'Envoyer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        if (inputValue === this.data.user.password) {
          Swal.fire('Correct', 'Mot de passe correct !', 'success');
          this.enableForm();
        } else {
            Swal.fire('Erreur', 'Mot de passe incorrect !', 'error').then(() => {
              this.disableForm();
              this.editForm();
            });
        }
      }
    });
  }
  
  enableForm() {
    const hideElements = document.querySelectorAll('.hide');
    hideElements.forEach(element => {
      element.classList.remove('displaynone');
    });
    this.isFormDisabled = false;
    this.profileForm.enable();
  }

  disableForm() {
    const hideElements = document.querySelectorAll('.hide');
    hideElements.forEach(element => {
      element.classList.add('displaynone');
    });
    this.isFormDisabled = true;
    this.profileForm.disable();
  }

  submitForm() {
    if (this.profileForm.valid && this.isFormDisabled == false) {
      console.log(this.profileForm.value);
    }

    location.reload();
  }
}
