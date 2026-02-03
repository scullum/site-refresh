'use client';

import { useState, useCallback, useEffect, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';
import { themes, themeIds, type ThemeId } from '@/lib/themes';
import {
  TerminalPreview,
  SwissPreview,
  BrutalistPreview,
  Y2KPreview,
  ArtDecoPreview,
  VaporwavePreview,
  ModernPreview,
} from './theme-previews';

const previewComponents: Record<ThemeId, React.ComponentType> = {
  terminal: TerminalPreview,
  swiss: SwissPreview,
  brutalist: BrutalistPreview,
  y2k: Y2KPreview,
  'art-deco': ArtDecoPreview,
  vaporwave: VaporwavePreview,
  minimal: ModernPreview,
};

export function ThemeSelector() {
  const { setTheme } = useTheme();
  const [hoveredTheme, setHoveredTheme] = useState<ThemeId>('minimal');
  const [focusedIndex, setFocusedIndex] = useState(themeIds.indexOf('minimal'));

  const activeTheme = themes[hoveredTheme];
  const PreviewComponent = previewComponents[hoveredTheme] ?? ModernPreview;

  const handleSelect = useCallback(
    (id: ThemeId) => {
      setTheme(id);
    },
    [setTheme]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const cols = 2;
      const total = themeIds.length;

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % total);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + total) % total);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => Math.min(prev + cols, total - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => Math.max(prev - cols, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          handleSelect(themeIds[focusedIndex]);
          break;
      }
    },
    [focusedIndex, handleSelect]
  );

  useEffect(() => {
    setHoveredTheme(themeIds[focusedIndex]);
  }, [focusedIndex]);

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-950 text-white overflow-auto">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Preview Panel */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredTheme}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: `0 25px 50px -12px ${activeTheme.preview.accent}40`,
                  }}
                >
                  <PreviewComponent />
                </motion.div>
              </AnimatePresence>

              <motion.div
                key={`info-${hoveredTheme}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="mt-8 text-center"
              >
                <p className="text-neutral-400 text-sm tracking-wide mb-2">
                  {activeTheme.era}
                </p>
                <h2 className="text-2xl font-semibold mb-3">{activeTheme.name}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto">
                  {activeTheme.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Selection Panel */}
        <div className="lg:w-1/2 flex flex-col p-8 lg:p-16 bg-neutral-900">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Choose your era
            </h1>
            <p className="text-neutral-400 leading-relaxed">
              Select a design aesthetic to experience my portfolio.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-4 flex-1"
            role="listbox"
            aria-label="Theme selection"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {themeIds.map((id, index) => {
              const theme = themes[id];
              const isFocused = index === focusedIndex;

              return (
                <motion.button
                  key={id}
                  role="option"
                  aria-selected={isFocused}
                  aria-label={`${theme.name} theme, ${theme.era}`}
                  onClick={() => handleSelect(id)}
                  onMouseEnter={() => {
                    setHoveredTheme(id);
                    setFocusedIndex(index);
                  }}
                  className={`
                    relative p-6 rounded-lg text-left transition-all duration-200
                    border-2 focus:outline-none
                    ${isFocused
                      ? 'border-white bg-neutral-800'
                      : 'border-neutral-700 bg-neutral-800/50 hover:border-neutral-500'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex gap-1.5 mb-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.preview.background }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.preview.foreground }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.preview.accent }}
                    />
                  </div>

                  <p className="text-xs text-neutral-500 tracking-wide mb-1">
                    {theme.era}
                  </p>
                  <h3 className="text-lg font-medium">{theme.name}</h3>

                  {isFocused && (
                    <motion.div
                      layoutId="selector"
                      className="absolute inset-0 rounded-lg border-2 border-white pointer-events-none"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 text-center text-neutral-500 text-sm">
            <p>
              <kbd className="px-2 py-0.5 bg-neutral-800 rounded text-xs">↑↓←→</kbd>{' '}
              navigate{' '}
              <kbd className="px-2 py-0.5 bg-neutral-800 rounded text-xs">enter</kbd>{' '}
              select
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
