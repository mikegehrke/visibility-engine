import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

// H1 - Hero Headlines (48px) - Self-confident, premium
interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ className, children, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-5xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// H2 - Main Headlines (32px) - Clear hierarchy
interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H2({ className, children, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        'text-2xl sm:text-3xl font-semibold leading-[1.15] tracking-[-0.015em] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// H3 - Section Headlines (24px) - Calm authority
interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H3({ className, children, ...props }: H3Props) {
  return (
    <h3
      className={cn(
        'text-xl sm:text-2xl font-medium leading-[1.25] tracking-[-0.01em] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// H4 - Subsection Headlines (20px) - Quiet confidence
interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H4({ className, children, ...props }: H4Props) {
  return (
    <h4
      className={cn(
        'text-lg sm:text-xl font-medium leading-[1.3] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

// Body - Standard Text (16px) - Readable, calm
interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Body({ className, children, ...props }: BodyProps) {
  return (
    <p
      className={cn(
        'text-base font-normal leading-[1.65] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Lead - Lead Text (18px) - Prominent but calm
interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn(
        'text-lg font-normal leading-[1.6] text-slate',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Small - Small Text (14px) - Secondary information
interface SmallProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Small({ className, children, ...props }: SmallProps) {
  return (
    <small
      className={cn(
        'text-sm font-normal leading-[1.5] text-slate',
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
}

// Label - Form Labels (14px) - Clear, functional
interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor?: string;
}

export function Label({ className, children, htmlFor, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium leading-[1.5] text-ink',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

// Muted - Muted Text (14px) - Subtle, non-intrusive
interface MutedProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Muted({ className, children, ...props }: MutedProps) {
  return (
    <p
      className={cn(
        'text-sm text-slate leading-[1.5]',
        className
      )}
      {...props}
    >
      {children}
    </p>
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
