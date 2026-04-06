function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
      {children}
    </h2>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="text-gray-400 flex-shrink-0 mt-0.5">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export type OverviewProp = { overview?: string };
export function Overview({ overview }: OverviewProp) {
  if (!overview) return null;
  return (
    <div>
      <SectionLabel>Overview</SectionLabel>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{overview}</p>
    </div>
  );
}

export type ProblemProp = { problem?: string };
export function Problem({ problem }: ProblemProp) {
  if (!problem) return null;
  return (
    <div>
      <SectionLabel>Problem</SectionLabel>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{problem}</p>
    </div>
  );
}

export type SolutionProp = { solution?: string };
export function Solution({ solution }: SolutionProp) {
  if (!solution) return null;
  return (
    <div>
      <SectionLabel>Solution</SectionLabel>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{solution}</p>
    </div>
  );
}

export type ArchitectureProp = { architecture?: string[] };
export function Architecture({ architecture }: ArchitectureProp) {
  if (!architecture || architecture.length === 0) return null;
  return (
    <div>
      <SectionLabel>Architecture</SectionLabel>
      <DashList items={architecture} />
    </div>
  );
}

export type ChallengesProp = { challenges?: string[] };
export function Challenges({ challenges }: ChallengesProp) {
  if (!challenges || challenges.length === 0) return null;
  return (
    <div>
      <SectionLabel>Challenges</SectionLabel>
      <DashList items={challenges} />
    </div>
  );
}

export type ImprovementsProp = { improvements?: string[] };
export function Improvements({ improvements }: ImprovementsProp) {
  if (!improvements || improvements.length === 0) return null;
  return (
    <div>
      <SectionLabel>Future Improvements</SectionLabel>
      <DashList items={improvements} />
    </div>
  );
}

export type FeaturesProp = { features?: string[] };
export function Features({ features }: FeaturesProp) {
  if (!features || features.length === 0) return null;
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-300 mb-3">
        Key Features
      </h2>
      <DashList items={features} />
    </div>
  );
}
