import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    currentTheme = signal<'dark' | 'light'>('dark');

    constructor() {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;

        if (savedTheme) {
            this.currentTheme.set(savedTheme);
        }

        effect(() => {
            const theme = this.currentTheme();

            document.documentElement.classList.remove('light-theme', 'dark-theme');
            document.documentElement.classList.add(`${theme}-theme`);

            localStorage.setItem('theme', theme);
        });
    }

    toggleTheme() {
        this.currentTheme.update((theme) =>
            theme === 'dark' ? 'light' : 'dark'
        );
    }
}