import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Importante para o erro sumir
  template: `
    <header class="main-header">
      <div class="logo">
        <span class="code-icon">&lt;/&gt;</span>
        <h1>{{ name }}</h1>
      </div>
      <nav>
        <a href="https://github.com/Nieradka21" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/ivanndk" target="_blank">LinkedIn</a>
      </nav>
    </header>
  `,
  styles: [`
    .main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #161b22;
      border-bottom: 1px solid #30363d;
    }
    .code-icon { color: #00549f; font-weight: bold; margin-right: 10px; }
    h1 { font-size: 1.1rem; margin: 0; color: #fff; }
    nav a { color: #c9d1d9; text-decoration: none; margin-left: 1.5rem; font-size: 0.9rem; }
    nav a:hover { color: #00549f; }
  `]
})
export class HeaderComponent {
  @Input() name: string = '';
}