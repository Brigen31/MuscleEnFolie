import { Component, OnInit} from '@angular/core';
import { SceanceService } from '../sceance.service';
import { Sceance } from '../modele/Sceance';

@Component({
  selector: 'app-sceance',
  templateUrl: './sceance.component.html',
  styleUrl: './sceance.component.scss'
})
export class SceanceComponent {
  sceances: Sceance[] = [];

  constructor(private sceanceService: SceanceService) {}

  ngOnInit() {
    this.onTest();
  }
  onTest() {
    this.sceanceService.getSceances().subscribe((data) => {
      this.sceances = data;
    });
  }
  
}
