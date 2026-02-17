import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50',
    accent: 'bg-accent-100 text-accent-900 dark:bg-accent-900 dark:text-accent-100',
    outline:
      'border border-neutral-300 text-neutral-900 dark:border-neutral-700 dark:text-neutral-50',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs font-medium rounded',
    md: 'px-3 py-1.5 text-sm font-medium rounded-lg',
  };

  return (
    <span className={clsx(variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
