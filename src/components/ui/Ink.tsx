/**
 * A small, restrained set of ink-inspired visual primitives used in
 * place of neon/glow decoration. Keep usage sparse — these are accents,
 * not a recurring pattern applied to every element.
 */

export function InkCircle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full border border-ink ${className}`}
      style={{ borderWidth: 1.5 }}
      aria-hidden="true"
    />
  );
}

export function InkUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 6"
      className={`w-24 h-1.5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 3.6C22 1.8 48 4.4 63 2.6C82 0.4 102 3.8 118 2.2"
        stroke="var(--ink)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ background: "var(--hairline)" }}
      aria-hidden="true"
    />
  );
}

export function InkLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-px ${className}`}
      style={{ background: "linear-gradient(to bottom, var(--ink), transparent)" }}
      aria-hidden="true"
    />
  );
}

export function InkMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-4 h-4 ${className}`} aria-hidden="true">
      <path
        d="M4 18C7 14 6 8 11 5C13.5 3.5 17 4 19 6.5"
        stroke="var(--ink)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
