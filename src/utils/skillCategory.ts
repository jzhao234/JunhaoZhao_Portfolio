export default function skillCategory(skill: string){
    const Language = [
        "Java", 
        "Python", 
        "C",
        "JavaScript",
        "TypeScript",
        "HTML5"
    ]
    const Frontend = [
        "React", 
        "Next.js",
        "Tailwind CSS",
        "D3.js",
        "Plotly"
    ]
    const Backend = [
        "FastAPI",
        "Flask"
    ]
    const DatabaseCloud = [
        "PostgreSQL",
        "AWS"
    ]
    const Others = [
        "Google Suite"
    ]

    const inputSkill = skill.toLowerCase();
    if (Language.map(s => s.toLowerCase()).includes(inputSkill)) {
        return "Language";
    } else if (Frontend.map(s => s.toLowerCase()).includes(inputSkill)) {
        return "Frontend";
    } else if (Backend.map(s => s.toLowerCase()).includes(inputSkill)) {
        return "Backend";
    } else if (DatabaseCloud.map(s => s.toLowerCase()).includes(inputSkill)) {
        return "DatabaseCloud";
    } else if (Others.map(s => s.toLowerCase()).includes(inputSkill)) {
        return "Others";
    } else {
        return null;
    }
}