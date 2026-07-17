import type { Metric } from "./missionData";

const SIZE = 280;
const CENTER = SIZE / 2;
const MAX_RADIUS = 88;
const MAX_VALUE = 5;
const RINGS = [0.2, 0.4, 0.6, 0.8, 1];

function pointAt(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function polygonPoints(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => pointAt(-90 + i * (360 / count), radius));
}

function toPath(points: { x: number; y: number }[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ") + " Z";
}

export default function EngineeringProfile({ metrics }: { metrics: Metric[] }) {
  const count = metrics.length;
  const dataPoints = metrics.map((m, i) =>
    pointAt(-90 + i * (360 / count), MAX_RADIUS * (m.value / MAX_VALUE))
  );
  const outerPoints = polygonPoints(count, MAX_RADIUS);

  return (
    <div className="flex justify-center">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        role="img"
        aria-label={metrics.map((m) => `${m.label}: ${m.value} of ${MAX_VALUE}`).join(", ")}
      >
        {RINGS.map((frac) => (
          <polygon
            key={frac}
            points={polygonPoints(count, MAX_RADIUS * frac).map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="var(--hairline)"
            strokeWidth={1}
          />
        ))}

        {outerPoints.map((p, i) => (
          <line key={i} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} stroke="var(--hairline)" strokeWidth={1} />
        ))}

        <path d={toPath(dataPoints)} fill="var(--ink)" fillOpacity={0.16} stroke="var(--ink)" strokeWidth={1.75} />

        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3} fill="var(--ink)" />
        ))}

        {metrics.map((m, i) => {
          const angle = -90 + i * (360 / count);
          const label = pointAt(angle, MAX_RADIUS + 26);
          const cos = Math.cos((angle * Math.PI) / 180);
          const sin = Math.sin((angle * Math.PI) / 180);
          const anchor = Math.abs(sin) > 0.9 ? "middle" : cos > 0 ? "start" : "end";
          return (
            <text
              key={m.label}
              x={label.x}
              y={label.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="var(--dim)"
              fontFamily="var(--font-heading)"
              fontSize={10.5}
              letterSpacing="0.12em"
              style={{ textTransform: "uppercase" }}
            >
              {m.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
