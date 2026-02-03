import type { ThemeDefinition } from './types';

export const modernMinimalTheme: ThemeDefinition = {
  id: 'minimal',
  name: 'Modern Minimal',
  era: '2020s',
  description: 'Contemporary clean design with subtle animations and warm accents',
  preview: {
    background: '#fafafa',
    foreground: '#171717',
    accent: '#ea580c',
  },
  fonts: {
    primary: 'var(--font-manrope)',
    heading: 'var(--font-manrope)',
  },
  effects: {
    borderRadius: '8px',
    animationStyle: 'smooth',
  },
};
