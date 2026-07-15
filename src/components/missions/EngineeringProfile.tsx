import type { Metric } from "./missionData";

const DOTS = 5;

export default function EngineeringProfile({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="space-y-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex items-center justify-between gap-4">
          <span className="text-technical-label">{metric.label}</span>
          <span className="flex items-center gap-1.5" aria-label={`${metric.label}: ${metric.value} of ${DOTS}`}>
            {Array.from({ length: DOTS }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: i < metric.value ? "var(--ink)" : "transparent",
                  border: i < metric.value ? "none" : "1px solid var(--hairline)",
                }}
              />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
