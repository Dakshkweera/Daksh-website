import type { Mission } from "./missionData";
import MissionTabs from "./MissionTabs";

const FIELDS: { key: keyof Mission; label: string }[] = [
  { key: "objective", label: "Objective" },
  { key: "problem", label: "The problem" },
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
    <div className="p-8 md:p-10 lg:p-12">
      <div className="flex items-baseline justify-between mb-8">
        <p className="text-technical-label">Case File №{mission.number}</p>
        <p className="text-technical-label" style={{ color: "var(--dim)" }}>
          Engineering Dossier
        </p>
      </div>

      <h3 className="text-section-heading text-2xl md:text-3xl">{mission.title}</h3>
      <p className="text-technical-label mt-2 mb-10" style={{ color: "var(--ink)" }}>
        {mission.category}
      </p>

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
  );
}
