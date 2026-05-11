import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-timeline.html', // Usando o HTML separado se você já tiver, ou mantenha o template inline
  styleUrl: './experience-timeline.scss' // Aponte para o novo arquivo SCSS aqui
})
export class ExperienceTimelineComponent {
  @Input() data: Experience[] = [];
}