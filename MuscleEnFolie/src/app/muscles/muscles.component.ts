import { Component, OnInit } from '@angular/core';
import { CallAPIService } from './../services/call-api.service';

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.scss']
})
export class MusclesComponent implements OnInit {
  selectedMuscle: string = '';
  exercises: any[] = [];

  constructor(private apiService: CallAPIService) { }

  ngOnInit(): void { }

  selectMuscle(muscle: string): void {
    if (this.selectedMuscle === muscle) {
      // Si le muscle sélectionné est le même que le muscle précédemment sélectionné,
      // réinitialisez selectedMuscle et exercises pour "désélectionner" le muscle.
      this.selectedMuscle = '';
      this.exercises = [];
    } else {
      // Sinon, sélectionnez le nouveau muscle et récupérez les exercices pour ce muscle.
      this.selectedMuscle = muscle;
      this.getExercises();
    }
  }

  getExercises(): void {
    this.apiService.getExercises(this.selectedMuscle).subscribe((data) => {
      this.exercises = data;
    });
  }
}