import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

// H1 - Hero Headlines (48px)
interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ className, children, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        'text-5xl font-bold leading-[1.0] tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// H2 - Main Headlines (36px)
interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H2({ className, children, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        'text-4xl font-bold leading-[1.1] tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// H3 - Section Headlines (30px)
interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H3({ className, children, ...props }: H3Props) {
  return (
    <h3
      className={cn(
        'text-3xl font-semibold leading-[1.2] tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// H4 - Subsection Headlines (24px)
interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H4({ className, children, ...props }: H4Props) {
  return (
    <h4
      className={cn(
        'text-2xl font-semibold leading-[1.3]',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

// Body - Standard Text (16px)
interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Body({ className, children, ...props }: BodyProps) {
  return (
    <p
      className={cn(
        'text-base font-normal leading-[1.6]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Lead - Lead Text (18px)
interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn(
        'text-lg font-normal leading-[1.5] text-slate',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Small - Small Text (14px)
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

// Label - Form Labels (14px, Medium)
interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor?: string;
}

export function Label({ className, children, htmlFor, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium leading-[1.5]',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

// Muted - Muted Text (14px, Slate)
interface MutedProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Muted({ className, children, ...props }: MutedProps) {
  return (
    <p
      className={cn(
        'text-sm text-slate',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Code - Inline Code
interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Code({ className, children, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'relative rounded bg-mist px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
