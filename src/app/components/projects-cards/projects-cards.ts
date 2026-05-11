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
      title: 'Integrações REST Protheus',
      description: 'Implementação de APIs REST nativas para integração entre Protheus, e-commerce e sistemas terceiros, realizando consumo e exposição de dados de forma segura e assíncrona.'
    },
    {
      title: 'Portais Corporativos com PO-UI',
      description: 'Criação de portais e interfaces modernas utilizando Angular + PO-UI, consumindo APIs REST do Protheus para processos internos e operações comerciais.'
    },
    {
      title: 'Sistema de Bipagem para E-commerce',
      description: 'Aplicação de picking e conferência desenvolvida em Angular, integrada ao Protheus via REST e JsToAdvpl para comunicação em tempo real com o ERP.'
    },
    {
      title: 'Otimização de Processos via T-SQL',
      description: 'Automação de rotinas críticas utilizando procedures SQL Server para fechamento e recálculo de custo médio, reduzindo carga de processamento no AppServer.'
    },
    {
      title: 'Importação Massiva com MsExecAuto',
      description: 'Implementação de rotinas automatizadas para leitura, validação e importação massiva de dados, garantindo integridade e rastreabilidade das informações.'
    },
    {
      title: 'Customizações MVC no Protheus',
      description: 'Criação de telas MVC, pontos de entrada, gatilhos de negócio, relatórios personalizados e manipulação avançada de Dicionário de Dados (SX).'
    },
    {
      title: 'Relatórios Corporativos e SmartView',
      description: 'Desenvolvimento de relatórios analíticos utilizando SmartView e geração de planilhas Excel via FWMSExcelXLSX para apoio operacional e gerencial.'
    },
    {
      title: 'Monitoramento e Troubleshooting',
      description: 'Análise de logs, troubleshooting de ambiente Protheus, identificação de gargalos de performance e suporte técnico em rotinas críticas.'
    },
    {
      title: 'Monitoramento Protheus e Alertas Automatizados',
      description: 'Desenvolvimento de solução em Python para monitoramento de serviços, consumo de recursos e integridade de ambientes Protheus, com envio automatizado de alertas e indicadores via Microsoft Teams.'
    }
  ];
}