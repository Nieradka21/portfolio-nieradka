export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

export interface Skill {
    name: string;
    level: number;
    category: 'Backend' | 'Frontend' | 'Data' | 'ERP' | 'Reports' | 'Infra' | 'Support';
}