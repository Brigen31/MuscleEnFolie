import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

constructor(private userService: UserService, private dialogRef: MatDialogRef<SignupComponent>, private snackBar: MatSnackBar) {}  
  ngOnInit() {
    this.getUser();
  }

  onSignup() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      if (email && password && username) {
        this.userService.createUser(email, password, { username })
          .then(() => {
            this.dialogRef.close();
            this.snackBar.open('Compte créé avec succès !', '', {
              duration: 2000,  // La notification disparaîtra après 2 secondes
            });
          })
          .catch(error => {
            // Gérer l'erreur de la création du compte
          this.snackBar.open(`Erreur lors de la création du compte : ${error.message}`, '', {
            duration: 2000,
          });
          });
      }
    }
  }
  getUser(){
    this.userService.getUser('1').subscribe(user => {
      console.log(user);
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
