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
          // Base styles - premium, confident
          'inline-flex items-center justify-center',
          'font-medium',
          'select-none',
          
          // Premium micro-motion (GPU accelerated: transform + opacity only)
          'transition-all duration-fast ease-out-expo',
          'active:scale-[0.98] active:transition-none',
          
          // Disabled state
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          
          // Focus ring - accessible, elegant
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
          
          // Size variants - refined proportions with better spacing
          size === 'sm' && 'h-8 px-3 text-[13px] rounded-md gap-1.5',
          size === 'md' && 'h-10 px-4 text-sm rounded-md gap-2',
          size === 'lg' && 'h-12 px-6 text-[15px] rounded-lg gap-2.5',
          
          // Variant styles - subtle, premium hover states
          variant === 'primary' && [
            'bg-signal-bg text-white',
            'hover:bg-signal-bg-hover hover:-translate-y-px',
            'shadow-sm hover:shadow-md',
          ],
          variant === 'secondary' && [
            'border border-border bg-canvas text-ink',
            'hover:bg-mist hover:border-border hover:-translate-y-px',
            'hover:shadow-sm',
          ],
          variant === 'ghost' && [
            'text-ink bg-transparent',
            'hover:bg-mist',
          ],
          variant === 'danger' && [
            'bg-danger text-white',
            'hover:bg-red-600 hover:-translate-y-px',
            'shadow-sm hover:shadow-md',
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
