import { Component, OnInit } from '@angular/core';
import { CallAPIService } from '../services/call-api.service';

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.scss']
})
export class MusclesComponent implements OnInit {
  exercises: any;

  constructor(private apiService: CallAPIService) { }

  ngOnInit(): void {
  this.apiService.getExercises().subscribe((data) => {
    console.log(data); // Ajoutez cette ligne pour voir ce que l'API renvoie
    this.exercises = data;
  });
}
}