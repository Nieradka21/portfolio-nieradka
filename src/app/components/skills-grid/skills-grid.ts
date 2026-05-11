import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-grid.html',
  styleUrl: './skills-grid.scss',
})
export class SkillsGrid {
  @Input() skills: Skill[] = [];
}
