import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-cards.html',
  styleUrl: './projects-cards.scss'
})
export class ProjectsCardsComponent {
  projects = [
    {
      title: 'Integração Nativa (REST)',
      description: 'Desenvolvimento de WebServices consumindo e expondo dados no Protheus para comunicação assíncrona com sistemas de e-commerce e portais de terceiros.'
    },
    {
      title: 'Aplicações em PO-UI',
      description: 'Desenvolvimento de portais e telas modernas utilizando o framework PO-UI (Angular), consumindo APIs REST do Protheus para entregar interfaces mais fluidas e responsivas.'
    },
    {
      title: 'Sistema de Bipagem (Angular / ERP)',
      description: 'Desenvolvimento de aplicação de bipagem (picking) para e-commerce utilizando Angular. A comunicação em tempo real com o Protheus foi arquitetada utilizando APIs REST e integração nativa via JsToAdvpl.'
    },
    {
      title: 'Automação Massiva (T-SQL)',
      description: 'Implementação de procedures no SQL Server para o fechamento e recálculo de custo médio de itens, transferindo o processamento pesado do AppServer diretamente para o banco.'
    },
    {
      title: 'Interfaces e Importação de Dados',
      description: 'Desenvolvimento de rotinas estruturadas (MsExecAuto) para leitura, validação e importação massiva de dados, garantindo a integridade das informações na base do ERP.'
    },
    {
      title: 'Customizações Core (MVC)',
      description: 'Criação de telas complexas em MVC, relatórios customizados, manipulação de Dicionários de Dados (SX) e desenvolvimento de gatilhos (Triggers/Pontos de Entrada) para regras de negócio.'
    }
  ];
}