export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className={`shrink-0 ${className}`} fill="none">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path d="M6 10.5l2.7 2.7L14 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className={`shrink-0 ${className}`} fill="none">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Shield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className={`shrink-0 ${className}`} fill="none">
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
