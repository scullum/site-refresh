'use client';

import { useTheme } from '@/lib/theme-context';
import { featureFlags } from '@/lib/feature-flags';
import { ThemeSelector } from './ThemeSelector';
import { ThemeEffects } from './ThemeEffects';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const { hasSelectedTheme } = useTheme();

  // When theme selector is disabled via feature flag, skip directly to content
  if (!featureFlags.enableThemeSelector) {
    return <>{children}</>;
  }

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
