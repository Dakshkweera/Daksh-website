export default function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="relative pl-6">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px"
        style={{ background: "var(--hairline)" }}
        aria-hidden="true"
      />
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={step} className="relative">
            <span
              className="absolute -left-6 top-1.5 w-[15px] h-[15px] rounded-full border flex items-center justify-center"
              style={{
                borderColor: "var(--inkline)",
                background: "var(--surface)",
              }}
              aria-hidden="true"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === steps.length - 1 ? "var(--active)" : "var(--ink)" }}
              />
            </span>
            <p className="text-technical-label mb-0.5">Step {String(i + 1).padStart(2, "0")}</p>
            <p className="text-body text-sm md:text-base">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
