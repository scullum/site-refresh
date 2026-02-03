'use client';

import { useTheme } from '@/lib/theme-context';
import { ThemeSelector } from './ThemeSelector';
import { ThemeEffects } from './ThemeEffects';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const { hasSelectedTheme } = useTheme();

  if (!hasSelectedTheme) {
    return <ThemeSelector />;
  }

  return (
    <>
      <ThemeEffects />
      {children}
    </>
  );
}
