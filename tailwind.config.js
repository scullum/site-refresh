/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic theme colors (CSS variable backed)
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        fg: 'var(--color-fg)',
        'fg-muted': 'var(--color-fg-muted)',
        'fg-inverted': 'var(--color-fg-inverted)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        heading: ['var(--font-heading)'],
      },
      borderRadius: {
        theme: 'var(--radius)',
        'theme-lg': 'var(--radius-lg)',
      },
      transitionDuration: {
        theme: 'var(--transition-duration)',
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'terminal-flicker': 'terminal-flicker 5s linear infinite',
        'vaporwave-pulse': 'vaporwave-pulse 4s ease-in-out infinite',
        'y2k-shine': 'y2k-shine 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
