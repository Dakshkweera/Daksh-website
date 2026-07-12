export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 900 900"
      className="absolute right-[-6rem] top-1/2 -translate-y-1/2 w-[34rem] h-[34rem] md:w-[46rem] md:h-[46rem] opacity-[0.14] pointer-events-none"
      aria-hidden="true"
    >
      <circle
        cx="600"
        cy="420"
        r="260"
        stroke="var(--ink)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="180 40 60 90 30 200"
      />
      <circle
        cx="480"
        cy="500"
        r="150"
        stroke="var(--warmgray)"
        strokeWidth="0.75"
        fill="none"
        strokeDasharray="90 30 140 60"
      />
      <path
        d="M690,300 C610,260 550,320 570,400 C590,480 690,505 735,440 C768,392 735,335 685,348"
        stroke="var(--ink)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
