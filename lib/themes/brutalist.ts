import type { ThemeDefinition } from './types';

export const brutalistTheme: ThemeDefinition = {
  id: 'brutalist',
  name: 'Brutalist',
  era: '2010s',
  description: 'Raw, unpolished web aesthetic with system fonts and visible structure',
  preview: {
    background: '#ffffff',
    foreground: '#000000',
    accent: '#000000',
  },
  fonts: {
    primary: 'var(--font-brutalist)',
    heading: 'var(--font-brutalist)',
  },
  effects: {
    borderRadius: '0',
    animationStyle: 'none',
  },
};
