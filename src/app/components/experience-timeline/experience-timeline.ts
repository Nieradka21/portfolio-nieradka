import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>[LOG_EXPERIENCIA]</h3>
    <div class="timeline">
      <div *ngFor="let exp of data" class="card">
        <div class="header">
          <h4>{{ exp.role }}</h4>
          <span class="period">{{ exp.period }}</span>
        </div>
        <p class="company">{{ exp.company }}</p>
        <ul>
          <li *ngFor="let desc of exp.description">{{ desc }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    h3 { color: #58a6ff; margin-bottom: 1.5rem; }
    .card { background: #1c2128; border: 1px solid #30363d; padding: 1.5rem; border-radius: 6px; margin-bottom: 1.5rem; }
    .header { display: flex; justify-content: space-between; }
    h4 { margin: 0; color: #fff; }
    .period { font-size: 0.85rem; color: #8b949e; }
    .company { color: #00549f; font-weight: bold; margin: 5px 0; }
    ul { padding-left: 1.2rem; color: #c9d1d9; font-size: 0.9rem; }
  `]
})
export class ExperienceTimelineComponent {
  @Input() data: Experience[] = [];
}