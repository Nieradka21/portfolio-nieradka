import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillLevel } from '../../models/portfolio.model';

const LEVEL_CLASS: Record<SkillLevel, string> = {
  'Avançado': 'level-avancado',
  'Intermediário': 'level-intermediario',
  'Básico': 'level-basico',
};

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-grid.html',
  styleUrl: './skills-grid.scss',
})
export class SkillsGrid {
  @Input() skills: Skill[] = [];

  levelClass(level: SkillLevel): string {
    return LEVEL_CLASS[level];
  }
}
