import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private dialog: MatDialog) {} // Add this constructor

  ngOnInit() {
    AOS.init({
      offset: 120,
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
