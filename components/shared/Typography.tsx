import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

// ═══════════════════════════════════════════════════════════
// VISIBILITY ENGINE TYPOGRAPHY SYSTEM
// Premium SaaS typographic hierarchy
// ═══════════════════════════════════════════════════════════

// H1 - Hero Headlines - Self-confident, premium, commanding
interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  gradient?: boolean;
}

export function H1({ className, children, gradient, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-5xl lg:text-6xl',
        'font-semibold',
        'leading-[1.05] tracking-[-0.025em]',
        'text-ink',
        'text-balance',
        gradient && 'text-gradient',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// H2 - Section Headlines - Clear hierarchy, quiet authority
interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H2({ className, children, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        'text-2xl sm:text-3xl lg:text-4xl',
        'font-semibold',
        'leading-[1.1] tracking-[-0.02em]',
        'text-ink',
        'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// H3 - Card Headlines - Calm, focused
interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H3({ className, children, ...props }: H3Props) {
  return (
    <h3
      className={cn(
        'text-lg sm:text-xl',
        'font-semibold',
        'leading-[1.25] tracking-[-0.01em]',
        'text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// H4 - Subsection Headlines - Quiet confidence
interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H4({ className, children, ...props }: H4Props) {
  return (
    <h4
      className={cn(
        'text-base sm:text-lg',
        'font-semibold',
        'leading-[1.3]',
        'text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

// Body - Standard Text - Readable, comfortable
interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Body({ className, children, ...props }: BodyProps) {
  return (
    <p
      className={cn(
        'text-base',
        'font-normal',
        'leading-[1.7]',
        'text-ink',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Lead - Lead Text - Prominent intro text
interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn(
        'text-lg sm:text-xl',
        'font-normal',
        'leading-[1.6]',
        'text-slate',
        'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Small - Secondary information
interface SmallProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Small({ className, children, ...props }: SmallProps) {
  return (
    <small
      className={cn(
        'text-sm',
        'font-normal',
        'leading-[1.5]',
        'text-slate',
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
}

// Label - Form Labels - Clear, functional
interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor?: string;
}

export function Label({ className, children, htmlFor, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm',
        'font-medium',
        'leading-[1.5]',
        'text-ink',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

// Muted - Tertiary text - Subtle, non-intrusive
interface MutedProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Muted({ className, children, ...props }: MutedProps) {
  return (
    <p
      className={cn(
        'text-sm',
        'text-slate',
        'leading-[1.5]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Overline - Section label above headlines
interface OverlineProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Overline({ className, children, ...props }: OverlineProps) {
  return (
    <span
      className={cn(
        'text-xs',
        'font-semibold',
        'uppercase tracking-[0.1em]',
        'text-signal',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// Code - Inline Code - Technical, precise
interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Code({ className, children, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'relative rounded-md bg-mist px-1.5 py-0.5 font-mono text-[0.875em] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

// Stat - Large numbers for dashboards
interface StatProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Stat({ className, children, ...props }: StatProps) {
  return (
    <span
      className={cn(
        'text-4xl sm:text-5xl',
        'font-semibold',
        'leading-none tracking-[-0.02em]',
        'text-ink',
        'tabular-nums',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
