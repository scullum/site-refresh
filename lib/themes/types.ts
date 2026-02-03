export type ThemeId =
  | 'terminal'
  | 'swiss'
  | 'brutalist'
  | 'y2k'
  | 'art-deco'
  | 'vaporwave'
  | 'minimal';

export interface ThemePreviewColors {
  background: string;
  foreground: string;
  accent: string;
}

export interface ThemeEffects {
  borderRadius: string;
  animationStyle: 'smooth' | 'snappy' | 'glitch' | 'none';
}

export interface ThemeFonts {
  primary: string;
  heading?: string;
}

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  era: string;
  description: string;
  preview: ThemePreviewColors;
  fonts: ThemeFonts;
  effects: ThemeEffects;
}
