import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        slate: 'var(--color-slate)',
        mist: 'var(--color-mist)',
        canvas: 'var(--color-canvas)',
        signal: 'var(--color-signal)',
        'signal-hover': 'var(--color-signal-hover)',
        border: 'var(--color-border)',
        smoke: 'var(--color-smoke)',
        // Status colors
        success: 'var(--color-success)',
        'success-muted': 'var(--color-success-muted)',
        warning: 'var(--color-warning)',
        'warning-muted': 'var(--color-warning-muted)',
        danger: 'var(--color-danger)',
        'danger-muted': 'var(--color-danger-muted)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-base)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-base)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      transitionDuration: {
        fast: '100ms',
        DEFAULT: '150ms',
        slow: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [],
};

export default config;
