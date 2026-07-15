import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillLevel } from '../../models/portfolio.model';

const LEVEL_CLASS: Record<SkillLevel, string> = {
  'Avançado': 'level-avancado',
  'Intermediário': 'level-intermediario',
  'Básico': 'level-basico',
};

const LEVEL_ORDER: Record<SkillLevel, number> = {
  'Avançado': 0,
  'Intermediário': 1,
  'Básico': 2,
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

  get sortedSkills(): Skill[] {
    return [...this.skills].sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
  }

  levelClass(level: SkillLevel): string {
    return LEVEL_CLASS[level];
  }
}
