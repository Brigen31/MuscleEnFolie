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
  activeIcon: string | null = null;

  constructor(private apiService: CallAPIService) { }

  ngOnInit(): void {

    this.selectMuscle("biceps");
  }

  selectMuscle(muscle: string): void {
    if (this.selectedMuscle === muscle) {
      this.selectedMuscle = '';
      this.exercises = [];
      this.activeIcon = null;
    } else {
      this.selectedMuscle = muscle;
      this.activeIcon = muscle;
      this.getExercises();
    }
  }

  getExercises(): void {
    this.apiService.getExercises(this.selectedMuscle).subscribe((data) => {
      this.exercises = data;
    });
  }
}