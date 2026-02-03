'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { type ThemeId, type ThemeDefinition, themes, defaultThemeId, getTheme, themeIds } from './themes';

const STORAGE_KEY = 'scullum-theme';

function isValidThemeId(value: unknown): value is ThemeId {
  return typeof value === 'string' && themeIds.includes(value as ThemeId);
}

function safeGetStorage(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function safeSetStorage(value: string): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private browsing or storage disabled - theme still works for session
  }
}

function safeClearStorage(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

interface ThemeContextValue {
  theme: ThemeDefinition;
  themeId: ThemeId;
  hasSelectedTheme: boolean;
  setTheme: (id: ThemeId) => void;
  clearTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(defaultThemeId);
  const [hasSelectedTheme, setHasSelectedTheme] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = safeGetStorage();
    if (isValidThemeId(stored)) {
      setThemeId(stored);
      setHasSelectedTheme(true);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId, isHydrated]);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
    setHasSelectedTheme(true);
    safeSetStorage(id);
  }, []);

  const clearTheme = useCallback(() => {
    setHasSelectedTheme(false);
    safeClearStorage();
  }, []);

  const theme = getTheme(themeId);

  // Render with default theme during hydration to avoid flash
  const contextValue: ThemeContextValue = {
    theme: isHydrated ? theme : getTheme(defaultThemeId),
    themeId: isHydrated ? themeId : defaultThemeId,
    hasSelectedTheme: isHydrated ? hasSelectedTheme : false,
    setTheme,
    clearTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
