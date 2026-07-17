import type { Mission } from "./missionData";
import MissionTabs from "./MissionTabs";
import { leftPagePhotoStyle, paperInkStyle, paperVignetteStyle } from "./paperPage";

const FIELDS: { key: keyof Mission; label: string }[] = [
  { key: "objective", label: "Objective" },
  { key: "problem", label: "The problem" },
  { key: "role", label: "Role" },
  { key: "technicalChallenge", label: "Technical challenge" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
];

export default function LeftPage({
  mission,
  missions,
  onSelect,
}: {
  mission: Mission;
  missions: Mission[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative h-full p-8 md:p-10 lg:p-12" style={{ ...leftPagePhotoStyle, ...paperInkStyle }}>
      <div className="absolute inset-0 pointer-events-none z-0" style={paperVignetteStyle} aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-display text-5xl text-dim">{mission.number}</span>
          <div>
            <h3 className="text-section-heading text-2xl md:text-3xl">{mission.title}</h3>
            <p className="text-technical-label mt-1" style={{ color: "var(--ink)" }}>
              {mission.category}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {FIELDS.map(({ key, label }) => (
            <div key={key}>
              <p className="text-technical-label mb-1.5">{label}</p>
              <p className="text-body text-sm md:text-base">{mission[key] as string}</p>
            </div>
          ))}
        </div>

        <MissionTabs missions={missions} activeId={mission.id} onSelect={onSelect} />
      </div>
    </div>
  );
}
