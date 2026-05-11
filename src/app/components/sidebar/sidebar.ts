import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  @Input() name: string = '';
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      // Rola exatamente para o início do bloco com animação suave
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // UX Bónus: Se estiver num ecrã mobile (menor que 768px), fecha o menu após o clique
      if (window.innerWidth <= 768) {
        this.isOpen = false;
      }
    }
  }
}