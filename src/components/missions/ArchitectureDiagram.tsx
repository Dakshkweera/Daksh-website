export default function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <p className="text-body text-sm md:text-base leading-relaxed">
      {steps.map((step, i) => (
        <span key={step}>
          {step}
          {i < steps.length - 1 && (
            <span className="mx-2" style={{ color: "var(--ink)" }}>
              →
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
