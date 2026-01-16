import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core semantic colors
        ink: 'var(--color-ink)',
        'ink-secondary': 'var(--color-ink-secondary)',
        slate: 'var(--color-slate)',
        mist: 'var(--color-mist)',
        canvas: 'var(--color-canvas)',
        smoke: 'var(--color-smoke)',
        
        // Brand / Signal colors
        signal: 'var(--color-signal)',
        'signal-hover': 'var(--color-signal-hover)',
        'signal-bg': 'var(--color-signal-bg)',
        'signal-bg-hover': 'var(--color-signal-bg-hover)',
        'signal-muted': 'var(--color-signal-muted)',
        
        // Border colors
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        
        // Primary alias for signal (accessibility compliant)
        primary: 'var(--color-signal)',
        
        // Surface layers
        'surface-0': 'var(--color-surface-0)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'surface-3': 'var(--color-surface-3)',
        
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
        '32': 'var(--space-32)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        glow: 'var(--shadow-glow)',
        ring: 'var(--ring-signal)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out-expo)',
        'out-quad': 'var(--ease-out-quad)',
        'in-out': 'var(--ease-in-out)',
      },
      backgroundImage: {
        'gradient-signal': 'var(--gradient-signal)',
        'gradient-surface': 'var(--gradient-surface)',
      },
    },
  },
  plugins: [],
};

export default config;
