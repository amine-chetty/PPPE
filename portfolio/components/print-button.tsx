'use client';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-3 bg-neutral-100 dark:bg-neutral-900 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
