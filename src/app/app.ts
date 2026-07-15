import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Skill } from './models/portfolio.model';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { HeroComponent } from './components/hero/hero';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline';
import { SkillsGrid } from './components/skills-grid/skills-grid';
import { ProjectsCardsComponent } from './components/projects-cards/projects-cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    HeroComponent,
    ExperienceTimelineComponent,
    ProjectsCardsComponent,
    SkillsGrid
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);

  name = 'Ivan Mateus Nieradka';
  role = 'Analista Programador Protheus Pleno';

  experiences: Experience[] = [
    {
      company: 'Grupo HOPE',
      role: 'Analista Programador Protheus Pleno',
      period: 'Outubro de 2024 - Presente',
      location: 'São Paulo, Brasil',
      description: [
        'Desenvolvimento, evolução e sustentação do ERP TOTVS Protheus atuando diretamente com ADVPL e TLPP.',
        'Criação de rotinas customizadas, Pontos de Entrada, manipulação do Dicionário de Dados (SXs) e desenvolvimento em MVC.',
        'Implementação de integrações robustas via WebServices (REST/SOAP) conectando o ERP a aplicações de terceiros.',
        'Análise de performance, tuning de queries no SQL Server e aplicação de hotfixes/patches em ambientes produtivos críticos.'
      ],
      tech: ['ADVPL', 'TLPP', 'Protheus', 'SQL Server', 'REST APIs']
    },
    {
      company: 'Linx (Grupo HOPE)',
      role: 'Analista de Sistemas / Banco de Dados',
      period: 'Dezembro de 2021 - Outubro de 2024',
      location: 'São Paulo, Brasil',
      description: [
        'Atuação focada em Banco de Dados SQL Server para sustentação de sistemas corporativos.',
        'Desenvolvimento de Procedures em T-SQL para automatização de recálculo de custo médio em massa.',
        'Manutenção e otimização estrutural, atuando diretamente com Triggers, Updates complexos e otimização de índices.',
        'Extração de dados para relatórios estratégicos e suporte ao fluxo de inteligência de negócios.'
      ],
      tech: ['SQL Server', 'T-SQL', 'Procedures', 'Triggers', 'Otimização DB']
    },
    {
      company: 'Restoque S/A',
      role: 'Suporte Técnico (Foco em Infra/DB)',
      period: 'Novembro de 2018 - Dezembro de 2021',
      location: 'São Paulo, Brasil',
      description: [
        'Manutenção e administração de bancos de dados distribuídos pelas filiais.',
        'Gerenciamento e execução de rotinas de Backups, Restores e monitoramento de integridade.',
        'Atuação preventiva e corretiva em infraestrutura de rede e ambientes Windows Server para garantir o uptime das lojas.'
      ],
      tech: ['SQL Server', 'Windows Server', 'DBA Support', 'Redes']
    }
  ];

    skills: Skill[] = [
      { name: 'ADVPL / TLPP', level: 'Avançado', category: 'ERP' },
      { name: 'TOTVS Protheus (Arquitetura/MVC)', level: 'Intermediário', category: 'ERP' },
      { name: 'Dicionário de Dados (SX)', level: 'Avançado', category: 'ERP' },
      { name: 'Pontos de Entrada (PE)', level: 'Avançado', category: 'ERP' },
      { name: 'SIGACFG / Configurador', level: 'Avançado', category: 'ERP' },
      { name: 'MsExecAuto / Automação', level: 'Avançado', category: 'ERP' },
      { name: 'Schedule / Jobs Protheus', level: 'Intermediário', category: 'ERP' },
      { name: 'Controle de Fontes (RPO)', level: 'Intermediário', category: 'ERP' },

      { name: 'SQL Server (T-SQL / Tuning)', level: 'Avançado', category: 'Data' },
      { name: 'Embedded SQL / Querys Avançadas', level: 'Avançado', category: 'Data' },
      { name: 'DBAccess / TopConnect', level: 'Intermediário', category: 'Data' },

      { name: 'Integrações REST / APIs', level: 'Avançado', category: 'Backend' },
      { name: 'PO-UI', level: 'Básico', category: 'Frontend' },

      { name: 'SmartView', level: 'Avançado', category: 'Reports' },
      { name: 'Relatórios Excel (FWMSExcelXLSX)', level: 'Avançado', category: 'Reports' },

      { name: 'AppServer / SmartClient', level: 'Intermediário', category: 'Infra' },
      { name: 'Monitor / Performance Protheus', level: 'Intermediário', category: 'Infra' },

      { name: 'Logs / Troubleshooting', level: 'Avançado', category: 'Support' }
    ];
}