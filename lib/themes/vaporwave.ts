import type { ThemeDefinition } from './types';

export const vaporwaveTheme: ThemeDefinition = {
  id: 'vaporwave',
  name: 'Vaporwave',
  era: '2010s',
  description: 'Retro-futurist aesthetic with neon colors and nostalgic digital vibes',
  preview: {
    background: '#1a0a2e',
    foreground: '#ff71ce',
    accent: '#01cdfe',
  },
  fonts: {
    primary: 'var(--font-vaporwave)',
    heading: 'var(--font-vaporwave)',
  },
  effects: {
    borderRadius: '0',
    animationStyle: 'smooth',
  },
};
