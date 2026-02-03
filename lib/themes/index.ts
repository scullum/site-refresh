import type { ThemeId, ThemeDefinition } from './types';
import { terminalTheme } from './terminal';
import { swissTheme } from './swiss-design';
import { brutalistTheme } from './brutalist';
import { y2kTheme } from './y2k';
import { artDecoTheme } from './art-deco';
import { vaporwaveTheme } from './vaporwave';
import { modernMinimalTheme } from './modern-minimal';

export type { ThemeId, ThemeDefinition, ThemePreviewColors, ThemeEffects, ThemeFonts } from './types';

export const themes: Record<ThemeId, ThemeDefinition> = {
  terminal: terminalTheme,
  swiss: swissTheme,
  brutalist: brutalistTheme,
  y2k: y2kTheme,
  'art-deco': artDecoTheme,
  vaporwave: vaporwaveTheme,
  minimal: modernMinimalTheme,
};

export const themeIds = Object.keys(themes) as ThemeId[];

export const defaultThemeId: ThemeId = 'minimal';

export function getTheme(id: ThemeId): ThemeDefinition {
  return themes[id] ?? themes[defaultThemeId];
}

export {
  terminalTheme,
  swissTheme,
  brutalistTheme,
  y2kTheme,
  artDecoTheme,
  vaporwaveTheme,
  modernMinimalTheme,
};
