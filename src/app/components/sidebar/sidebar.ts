import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent implements OnInit {
  @Input() name: string = '';
  isOpen = true;

  @HostBinding('class.closed') get isClosed() {
    return !this.isOpen;
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.isOpen = false;
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      // Fecha o menu no mobile IMEDIATAMENTE
      if (window.innerWidth <= 768) {
        this.isOpen = false;
      }

      // Executa o scroll após atualizar o estado
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      console.warn(`Elemento com ID ${sectionId} não encontrado.`);
    }
  }
}