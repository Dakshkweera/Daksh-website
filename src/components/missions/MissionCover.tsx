import type { Mission } from "./missionData";

export default function MissionCover({
  mission,
  onOpen,
}: {
  mission: Mission;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-full aspect-[3/4] rounded-sm border border-hairline overflow-hidden text-left transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-1"
      style={{
        background:
          "linear-gradient(155deg, var(--soft) 0%, var(--raised) 55%, var(--surface) 100%)",
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)",
      }}
      aria-label={`Open mission file: ${mission.title}`}
    >
      <span
        className="absolute inset-y-0 left-0 w-2"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.5), transparent)" }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 border-2 rounded-sm m-3 transition-colors duration-300 group-hover:border-[var(--inkline)]"
        style={{ borderColor: "var(--hairline)" }}
        aria-hidden="true"
      />

      <span className="relative h-full flex flex-col items-center justify-between p-6 md:p-8">
        <span className="text-technical-label" style={{ color: "var(--dim)" }}>
          Case File №{mission.number}
        </span>

        <span className="text-center">
          <span className="block text-display text-2xl md:text-3xl transition-colors duration-300 group-hover:text-parchment">
            {mission.title}
          </span>
          <span className="block text-technical-label mt-3" style={{ color: "var(--ink)" }}>
            {mission.category}
          </span>
        </span>

        <span
          className="text-technical-label transition-colors duration-300"
          style={{ color: "var(--dim)" }}
        >
          <span className="group-hover:text-parchment transition-colors duration-300">Open File ↦</span>
        </span>
      </span>
    </button>
  );
}
