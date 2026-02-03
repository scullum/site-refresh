import type { ThemeDefinition } from './types';

export const y2kTheme: ThemeDefinition = {
  id: 'y2k',
  name: 'Y2K',
  era: '2000s',
  description: 'Futuristic millennium aesthetic with chrome, gradients, and bubbly shapes',
  preview: {
    background: '#e8f4fc',
    foreground: '#1a1a2e',
    accent: '#0066ff',
  },
  fonts: {
    primary: 'var(--font-y2k)',
    heading: 'var(--font-y2k)',
  },
  effects: {
    borderRadius: '24px',
    animationStyle: 'smooth',
  },
};
