import type { Mission } from "./missionData";
import ArchitectureDiagram from "./ArchitectureDiagram";
import EngineeringProfile from "./EngineeringProfile";

export default function RightPage({ mission }: { mission: Mission }) {
  return (
    <div className="p-8 md:p-10 lg:p-12">
      <p className="text-technical-label mb-4">System Architecture</p>
      <ArchitectureDiagram steps={mission.architecture} />

      <p className="text-technical-label mb-3 mt-10">Technology Stack</p>
      <div className="flex flex-wrap gap-1.5 mb-10">
        {mission.techStack.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded border border-hairline text-warmgray">
            {t}
          </span>
        ))}
      </div>

      <p className="text-technical-label mb-4">Engineering Profile</p>
      <EngineeringProfile metrics={mission.metrics} />

      <div className="flex flex-wrap gap-3 mt-10">
        <a
          href={mission.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-xs uppercase tracking-wide px-4 py-2 rounded-full border transition-colors duration-200"
          style={{ borderColor: "var(--inkline)", color: "var(--ink)" }}
        >
          Live Demo ↗
        </a>
        <a
          href={mission.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-xs uppercase tracking-wide px-4 py-2 rounded-full border border-hairline text-warmgray hover:text-parchment transition-colors duration-200"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
