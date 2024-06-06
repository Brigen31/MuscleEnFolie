import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.scss']
})
export class SeanceCardComponent {
  @Input() titre!: string;
}
