import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
}

export function SectionTitle({ title, subtitle, description }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      <div>
        {subtitle && (
          <p className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
      {description && <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">{description}</p>}
    </div>
  );
}
