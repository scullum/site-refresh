/**
 * Feature Flags Configuration
 *
 * Use environment variables to control feature availability.
 * All flags use the NEXT_PUBLIC_ prefix for client-side access.
 *
 * To enable a feature locally, add to .env.local:
 *   NEXT_PUBLIC_ENABLE_THEME_SELECTOR=true
 */

export const featureFlags = {
  /**
   * Theme Selector Feature
   * When enabled, shows the theme selector on first visit and allows
   * users to switch between design era themes via the navigation.
   * When disabled, the site uses the default 'minimal' theme.
   */
  enableThemeSelector: process.env.NEXT_PUBLIC_ENABLE_THEME_SELECTOR === 'true',
} as const;
