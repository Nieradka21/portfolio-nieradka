import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Skill } from './models/portfolio.model';
import { SidebarComponent } from './components/sidebar/sidebar';
import { HeroComponent } from './components/hero/hero';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline';
import { SkillsGrid } from './components/skills-grid/skills-grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeroComponent,
    ExperienceTimelineComponent,
    SkillsGrid
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  name = 'Ivan Mateus Nieradka';
  role = 'Analista Programador Protheus Pleno';

  experiences: Experience[] = [
    {
      company: 'Grupo HOPE',
      role: 'Analista Programador Protheus Pleno',
      period: 'Outubro de 2024 - Presente',
      location: 'São Paulo, Brasil',
      description: [
        'Desenvolvimento e sustentação do ERP TOTVS Protheus com foco em ADVPL e TLPP.',
        'Atuação em ciclo de vida completo: levantamento de requisitos, implementação, testes e manutenção.',
        'Suporte de 2º e 3º nível, análise de incidentes e aplicação de hotfixes.',
        'Desenvolvimento de novos dashboards em Power BI (DAX) e fluxos ETL com Pentaho.'
      ],
      tech: ['ADVPL', 'TLPP', 'SQL Server', 'Pentaho', 'Power BI']
    },
    {
      company: 'Linx (Grupo HOPE)',
      role: 'Analista de Sistema Linx',
      period: 'Dezembro de 2021 - Outubro de 2024',
      location: 'São Paulo, Brasil',
      description: [
        'Automatização do custo médio em massa via T-SQL.',
        'Desenvolvimento de integrações em Java para atualização automática da tabela IBPT.',
        'Sustentação do ambiente de BI e melhoria de performance na extração de dados.',
        'Suporte técnico especializado em Linx POS e infraestrutura de rede para vendas.'
      ],
      tech: ['Java', 'SQL Server', 'Pentaho', 'Linx POS', 'T-SQL']
    },
    {
      company: 'Restoque S/A',
      role: 'Suporte Técnico',
      period: 'Novembro de 2018 - Dezembro de 2021',
      location: 'São Paulo, Brasil',
      description: [
        'Manutenção e atualização de bancos de dados das filiais (Backups, restaures e triggers).',
        'Análise de ambiente de rede e infraestrutura para desempenho do sistema de vendas.',
        'Correção de erros críticos de sistema e ambiente Windows.'
      ],
      tech: ['SQL Server', 'Windows Server', 'Redes', 'Linx']
    }
  ];

  skills: Skill[] = [
    { name: 'ADVPL / TLPP', level: 95, category: 'ERP' },
    { name: 'Transact-SQL (Tuning)', level: 90, category: 'Data' },
    { name: 'Power BI / Pentaho', level: 85, category: 'Data' },
    { name: 'Angular / Spring Boot', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' }
  ];
}