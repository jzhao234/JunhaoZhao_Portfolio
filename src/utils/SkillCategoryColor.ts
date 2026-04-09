export default function SkillCategoryColor(category: string) {
  const colors = {
    Language: { text: "text-blue-400", bg: "bg-blue-400/15" },
    Backend: { text: "text-violet-400", bg: "bg-violet-400/15" },
    DataVisualization: { text: "text-teal-400", bg: "bg-teal-400/15" },
    DatabaseCloud: { text: "text-rose-400", bg: "bg-rose-400/15" },
    Frontend: { text: "text-emerald-400", bg: "bg-emerald-400/15" },
    Others: { text: "text-amber-400", bg: "bg-amber-400/15" },
  };

  return colors[category] || { text: "text-gray-400", bg: "bg-gray-400/15" };
}