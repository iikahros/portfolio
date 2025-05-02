import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink?: string
  linkedinLink?: string
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  githubLink,
  linkedinLink,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-pink-300 dark:hover:border-pink-700">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-pink-100 dark:bg-pink-900/30 px-2.5 py-0.5 text-xs font-medium text-pink-700 dark:text-pink-300 transition-colors duration-300 hover:bg-pink-200 dark:hover:bg-pink-800/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex gap-4">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors duration-300"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        )}
        {linkedinLink && (
          <Link
            href={linkedinLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-300"
          >
            <Linkedin className="h-4 w-4" />
            View on LinkedIn
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
