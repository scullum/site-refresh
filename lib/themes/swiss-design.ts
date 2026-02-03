import type { ThemeDefinition } from './types';

export const swissTheme: ThemeDefinition = {
  id: 'swiss',
  name: 'Swiss Design',
  era: '1950s',
  description: 'International Typographic Style with strict grids and bold red accents',
  preview: {
    background: '#ffffff',
    foreground: '#000000',
    accent: '#ff0000',
  },
  fonts: {
    primary: 'var(--font-swiss)',
    heading: 'var(--font-swiss)',
  },
  effects: {
    borderRadius: '0',
    animationStyle: 'none',
  },
};
