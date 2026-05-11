import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="hero-section">
      <p class="terminal-line">> system.init()</p>
      <h2>{{ title }}</h2>
      <p class="description">
        Especialista em ecossistema TOTVS Protheus, focado em transformar requisitos de negócio em soluções de alta performance[cite: 20, 26].
      </p>
    </div>
  `,
  styles: [`
    .hero-section { padding: 3rem 0; }
    .terminal-line { font-family: monospace; color: #58a6ff; margin-bottom: 0.5rem; }
    h2 { font-size: 2.5rem; color: #f0f6fc; margin: 0; }
    .description { font-size: 1.2rem; color: #8b949e; max-width: 600px; margin-top: 1rem; }
  `]
})
export class HeroComponent {
  @Input() title: string = '';
}