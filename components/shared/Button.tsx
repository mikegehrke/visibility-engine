import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - refined, premium
          'inline-flex items-center justify-center',
          'font-medium',
          'transition-all duration-150 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
          
          // Size variants - refined proportions
          size === 'sm' && 'h-8 px-3 text-sm rounded-md gap-1.5',
          size === 'md' && 'h-10 px-4 text-sm rounded-md gap-2',
          size === 'lg' && 'h-11 px-5 text-base rounded-lg gap-2',
          
          // Variant styles - subtle, no jarring hover
          variant === 'primary' && [
            'bg-signal text-white',
            'hover:bg-signal-hover',
            'active:bg-signal-hover',
          ],
          variant === 'secondary' && [
            'border border-border text-ink bg-canvas',
            'hover:bg-smoke hover:border-slate/30',
            'active:bg-mist',
          ],
          variant === 'ghost' && [
            'text-ink bg-transparent',
            'hover:bg-mist',
            'active:bg-smoke',
          ],
          variant === 'danger' && [
            'bg-danger text-white',
            'hover:bg-red-600',
            'active:bg-red-700',
          ],
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
