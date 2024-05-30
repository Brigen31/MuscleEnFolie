import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  constructor(
    public dialog: MatDialog, 
    private userService: UserService, 
    private snackBar: MatSnackBar, 
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private router: Router
  ) {}

  openSignupDialog() {
    this.dialog.open(SignupComponent);
  }

  onLoginClick() {
    console.log(this.email.valid, this.password.valid)
    if (this.email.valid && this.password.valid) {
      this.userService.login(this.email.value!, this.password.value!)
        .then(() => {
          // Gérer la connexion réussie
          this.dialogRef.close();
          this.router.navigate(['/list']);
          this.snackBar.open('Connecté !', '', {
            duration: 2000,  // La notification disparaîtra après 2 secondes
          });
        })
        .catch((error: { message: any; }) => {
          // Gérer l'erreur de connexion
          alert(error.message);
        });
    } else {
      // Gérer le cas où l'email ou le mot de passe n'est pas valide
      this.snackBar.open('Email ou mot de passe invalide', '', {
        duration: 2000,  // La notification disparaîtra après 2 secondes
      });
    }
  }
}