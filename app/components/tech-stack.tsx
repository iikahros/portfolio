import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    textColor: "text-pink-700 dark:text-pink-300",
    ringColor: "ring-pink-500/20 dark:ring-pink-500/10",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Flask", "Python", "Java"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-300",
    ringColor: "ring-purple-500/20 dark:ring-purple-500/10",
  },
  {
    category: "DevOps",
    skills: ["Git", "Github", "AWS", "Azure", "Google Cloud"],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    textColor: "text-indigo-700 dark:text-indigo-300",
    ringColor: "ring-indigo-500/20 dark:ring-indigo-500/10",
  },
  {
    category: "Tools",
    skills: ["VS Code", "Adobe CC", "Figma", "TouchDesigner", "Yolo", "Ultralytics"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-300",
    ringColor: "ring-blue-500/20 dark:ring-blue-500/10",
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-opacity-50 hover:border-purple-300 dark:hover:border-purple-700"
        >
          <h3 className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}>
            {tech.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className={`inline-flex items-center rounded-full ${tech.bgColor} px-2.5 py-1 text-sm font-medium ${tech.textColor} ring-1 ring-inset ${tech.ringColor} transition-all duration-300 hover:scale-105`}
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
