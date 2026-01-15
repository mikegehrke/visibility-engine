import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-medium transition-all duration-150',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2',
          
          // Size variants
          size === 'sm' && 'h-9 px-3 text-sm rounded-sm',
          size === 'md' && 'h-10 px-4 text-sm rounded-sm',
          size === 'lg' && 'h-12 px-6 text-base rounded-sm',
          
          // Variant styles
          variant === 'primary' && [
            'bg-signal text-white',
            'hover:bg-signal-hover',
            'active:translate-y-px',
          ],
          variant === 'secondary' && [
            'border border-slate text-ink bg-transparent',
            'hover:bg-mist',
            'active:translate-y-px',
          ],
          variant === 'ghost' && [
            'text-ink bg-transparent',
            'hover:bg-mist',
            'active:translate-y-px',
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
