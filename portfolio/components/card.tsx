import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  interactive?: boolean;
}

export function Card({ children, className, hover = false, interactive = false }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50',
        hover && 'hover:border-neutral-300 dark:hover:border-neutral-700',
        interactive && 'cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
