'use client';

import { useTheme } from '@/lib/theme-context';

export function ThemeEffects() {
  const { themeId } = useTheme();

  return (
    <>
      {themeId === 'terminal' && (
        <>
          <div
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{
              background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)`,
            }}
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 pointer-events-none z-[9998]"
            style={{ boxShadow: 'inset 0 0 150px rgba(0, 255, 65, 0.05)' }}
            aria-hidden="true"
          />
        </>
      )}

      {themeId === 'swiss' && (
        <div
          className="fixed inset-0 pointer-events-none z-[9998]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
      )}

      {themeId === 'vaporwave' && (
        <div
          className="fixed bottom-0 left-0 right-0 h-1/3 pointer-events-none z-[9998]"
          style={{
            background: `linear-gradient(90deg, rgba(1,205,254,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(1,205,254,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 40px',
            transform: 'perspective(400px) rotateX(60deg)',
            transformOrigin: 'bottom',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {themeId === 'art-deco' && (
        <div className="fixed inset-0 pointer-events-none z-[9998]" aria-hidden="true">
          <div className="absolute top-4 left-4 w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary opacity-30" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-primary opacity-30" />
          </div>
          <div className="absolute top-4 right-4 w-12 h-12">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-primary opacity-30" />
            <div className="absolute top-0 right-0 w-0.5 h-full bg-primary opacity-30" />
          </div>
          <div className="absolute bottom-4 left-4 w-12 h-12">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-30" />
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-primary opacity-30" />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary opacity-30" />
            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary opacity-30" />
          </div>
        </div>
      )}
    </>
  );
}
