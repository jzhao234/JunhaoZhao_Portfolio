// Category colors are theme-aware: the -400 shades read well on the dark
// canvas but fail contrast on white, so light mode uses darker shades.
export default function SkillCategoryColor(category: string) {
  const colors: Record<string, { text: string; bg: string }> = {
    Language: {
      text: "text-blue-700 dark:text-blue-400",
      bg: "bg-blue-600/10 dark:bg-blue-400/15",
    },
    Backend: {
      text: "text-violet-700 dark:text-violet-400",
      bg: "bg-violet-600/10 dark:bg-violet-400/15",
    },
    DataVisualization: {
      text: "text-teal-700 dark:text-teal-400",
      bg: "bg-teal-600/10 dark:bg-teal-400/15",
    },
    DatabaseCloud: {
      text: "text-rose-700 dark:text-rose-400",
      bg: "bg-rose-600/10 dark:bg-rose-400/15",
    },
    Frontend: {
      text: "text-emerald-700 dark:text-emerald-400",
      bg: "bg-emerald-600/10 dark:bg-emerald-400/15",
    },
    Others: {
      text: "text-amber-700 dark:text-amber-400",
      bg: "bg-amber-600/10 dark:bg-amber-400/15",
    },
  };

  return (
    colors[category] ?? {
      text: "text-muted",
      bg: "bg-line",
    }
  );
}
