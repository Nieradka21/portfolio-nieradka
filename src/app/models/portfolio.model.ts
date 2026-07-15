export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

export type SkillLevel = 'Avançado' | 'Intermediário' | 'Básico';

export interface Skill {
    name: string;
    level: SkillLevel;
    category: 'Backend' | 'Frontend' | 'Data' | 'ERP' | 'Reports' | 'Infra' | 'Support';
}