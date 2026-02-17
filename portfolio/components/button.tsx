import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-accent-600 text-white hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 active:scale-95',
    secondary:
      'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 active:scale-95',
    ghost:
      'text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], !icon && sizes[size], icon && 'p-2', className)}
      {...props}
    >
      {children}
    </button>
  );
}
