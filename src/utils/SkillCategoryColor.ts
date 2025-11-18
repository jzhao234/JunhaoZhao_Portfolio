"use client"; 

export default function SkillCategoryColor(category: string){
    const colors = {
        Language: {text: "text-blue-500", bg: "bg-blue-500/20" },
        Frontend: { text: "text-green-500", bg: "bg-green-500/20" },
        Backend: { text: "text-purple-500", bg: "bg-purple-500/20" },
        "DatabaseCloud": { text: "text-red-500", bg: "bg-red-500/20" },
        Practice: { text: "text-yellow-500", bg: "bg-yellow-500/20" },
        Other: { text: "text-gray-500", bg: "bg-gray-500/20 "}
    };
    return colors[category] || { text: "text-gray-400", bg: "bg-gray-400/20" };
}
