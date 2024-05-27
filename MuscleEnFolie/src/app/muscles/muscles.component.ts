import { Component, OnInit } from '@angular/core';
import { CallAPIService } from '../services/call-api.service';

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.scss']
})
export class MusclesComponent implements OnInit {
  selectedMuscle: string = '';
  muscles = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'  ];
  exercises: any[] = []; 

  constructor(private apiService: CallAPIService) { }

  ngOnInit(): void { }

  getExercises(): void {
  console.log('getExercises called'); // Ajoutez cette ligne
  this.apiService.getExercises(this.selectedMuscle).subscribe((data) => {
    this.exercises = data;
  });
}
}