import type { ThemeDefinition } from './types';

export const artDecoTheme: ThemeDefinition = {
  id: 'art-deco',
  name: 'Art Deco',
  era: '1920s',
  description: 'Roaring twenties glamour with gold accents and geometric patterns',
  preview: {
    background: '#1a1a1a',
    foreground: '#f5f0e6',
    accent: '#d4af37',
  },
  fonts: {
    primary: 'var(--font-artdeco-body)',
    heading: 'var(--font-artdeco)',
  },
  effects: {
    borderRadius: '0',
    animationStyle: 'smooth',
  },
};
