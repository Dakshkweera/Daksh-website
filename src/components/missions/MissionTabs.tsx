import type { Mission } from "./missionData";

export default function MissionTabs({
  missions,
  activeId,
  onSelect,
}: {
  missions: Mission[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-8 border-t border-hairline" role="tablist" aria-label="Missions">
      {missions.map((mission) => {
        const active = mission.id === activeId;
        return (
          <button
            key={mission.id}
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(mission.id)}
            className="group text-left focus:outline-none"
          >
            <span
              className="text-technical-label transition-colors duration-200"
              style={{ color: active ? "var(--ink)" : "var(--dim)" }}
            >
              {mission.number}
            </span>
            <span
              className="block mt-0.5 text-sm font-heading tracking-wide transition-colors duration-200 group-hover:text-parchment group-focus-visible:text-parchment"
              style={{ color: active ? "var(--parchment)" : "var(--warmgray)" }}
            >
              {mission.title}
            </span>
            <span
              className="block mt-1.5 h-px transition-all duration-300"
              style={{
                width: active ? "100%" : "0%",
                background: "var(--ink)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
