import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDark: false
    }),

    actions: {
        currentTheme() {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            this.isDark = mq.matches;
            mq.addEventListener('change', (event) => {
                this.isDark = event.matches;
                console.log(event.matches);
            });
            return this.isDark
        }
    },
})