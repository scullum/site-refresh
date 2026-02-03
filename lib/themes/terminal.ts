import type { ThemeDefinition } from './types';

export const terminalTheme: ThemeDefinition = {
  id: 'terminal',
  name: 'Terminal',
  era: '1980s',
  description: 'Green phosphor CRT aesthetic with scanlines and monospace typography',
  preview: {
    background: '#0a0a0a',
    foreground: '#00ff41',
    accent: '#00ff41',
  },
  fonts: {
    primary: 'var(--font-terminal)',
    heading: 'var(--font-terminal)',
  },
  effects: {
    borderRadius: '0',
    animationStyle: 'glitch',
  },
};
