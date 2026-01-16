import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'flat' | 'glass';
  padding?: 'default' | 'compact' | 'spacious' | 'none';
  hover?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

export default function Card({
  variant = 'elevated',
  padding = 'default',
  hover = false,
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles - refined radius, smooth transitions
        'rounded-lg',
        'transition-all duration-slow ease-out-expo',
        
        // Padding variants - more generous, breathing room
        padding === 'default' && 'p-6',
        padding === 'compact' && 'p-4',
        padding === 'spacious' && 'p-8',
        padding === 'none' && 'p-0',
        
        // Variant styles - layered, sophisticated
        variant === 'elevated' && [
          'bg-canvas',
          'shadow-sm',
          'border border-border/60',
        ],
        variant === 'outlined' && [
          'bg-canvas',
          'border border-border',
        ],
        variant === 'flat' && [
          'bg-surface-1',
          'border border-transparent',
        ],
        variant === 'glass' && [
          'bg-canvas/80 backdrop-blur-sm',
          'border border-border/50',
          'shadow-sm',
        ],
        
        // Hover effect - subtle lift (opt-in)
        hover && [
          'hover:shadow-md hover:border-border hover:-translate-y-0.5',
          'cursor-pointer',
        ],
        
        // Interactive - for clickable cards
        interactive && [
          'hover:shadow-md hover:border-border hover:-translate-y-0.5',
          'active:scale-[0.99] active:shadow-sm',
          'cursor-pointer select-none',
        ],
        
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-tight tracking-tight text-ink', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn('text-sm text-slate leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('flex items-center pt-4 mt-4 border-t border-border/50', className)}
      {...props}
    >
      {children}
    </div>
  );
}
