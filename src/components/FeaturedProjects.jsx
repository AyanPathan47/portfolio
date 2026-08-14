"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
        image: "/images/project-1.png",
        tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        color: "blue",
    },
    {
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates, kanban boards, and team communication features.",
        image: "/images/project-2.png",
        tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        color: "purple",
    },
    {
        title: "AI Content Generator",
        description:
            "SaaS platform leveraging AI to generate marketing copy, blog posts, and social media content.",
        image: "/images/project-3.png",
        tags: ["Next.js", "OpenAI", "Prisma", "Vercel"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        color: "green",
    },
    {
        title: "Real-time Analytics Dashboard",
        description:
            "Interactive dashboard for monitoring business metrics with customizable widgets and data visualization.",
        image: "/images/project-4.png",
        tags: ["React", "D3.js", "AWS", "GraphQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        color: "orange",
    },
]

const colorVariants = {
    blue: "from-blue-500/20 to-blue-600/5",
    purple: "from-purple-500/20 to-purple-600/5",
    green: "from-green-500/20 to-green-600/5",
    orange: "from-orange-500/20 to-orange-600/5",
}

const glowVariants = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
}

function ProjectCard({ project, index }) {
    return (
        <Card className="group w-[350px] md:w-[450px] shrink-0 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
            {/* Project Image/Preview */}
            <div className={`relative h-48 md:h-56 bg-gradient-to-br ${colorVariants[project.color]} overflow-hidden`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />

                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }} />
                </div>

                {/* Glowing accent */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${glowVariants[project.color]}`} />

                {/* Project number */}
                <div className="absolute top-4 left-4 font-mono text-xs text-zinc-500 z-20">
                    0{index + 1}
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 z-20">
                    <div className="p-2 rounded-full bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                    </div>
                </div>

                {/* Center content - project icon/visual */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-6xl md:text-7xl font-bold text-zinc-800/50 font-mono group-hover:text-zinc-700/50 transition-colors">
                        {project.title.charAt(0)}
                    </div>
                </div>
            </div>

            <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                </h3>
            </CardHeader>

            <CardContent className="pb-4">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className="font-mono text-xs px-2 py-0.5 bg-zinc-800/50"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-3">
                <Button size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                </Button>
                <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"  className="flex items-center justify-between gap-1">
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function FeaturedProjects() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    // Transform vertical scroll to horizontal movement
    // Adjust the output range based on number of cards and their width
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"])

    return (
        <section id="projects" ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Section Header */}
                <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-8 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-blue-500 font-mono text-sm mb-2 block">
              // Featured Work
                        </span>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                                    Selected Projects
                                </h2>
                                <p className="text-zinc-400 max-w-lg text-sm md:text-base">
                                    A collection of projects that showcase my skills in building
                                    scalable, user-centric applications.
                                </p>
                            </div>
                            {/* Scroll indicator */}
                            {/* <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm">
                                <span>Scroll to explore</span>
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Left fade gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />

                    {/* Right fade gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

                    <motion.div
                        style={{ x }}
                        className="flex gap-6 px-4 md:px-12"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}

                        {/* End card - CTA */}
                        <Card className="w-[350px] md:w-[400px] shrink-0 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 flex flex-col items-center justify-center p-8 text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                Want to see more?
                            </h3>
                            <p className="text-zinc-400 text-sm mb-6">
                                Check out my GitHub for more projects and open source contributions.
                            </p>
                            <Button className="gap-2" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"  className="flex items-center justify-between gap-1">
                                    <Github className="w-4 h-4" />
                                    View GitHub
                                </a>
                            </Button>
                        </Card>
                    </motion.div>
                </div>

                {/* Progress indicator */}
                <div className="container mx-auto max-w-6xl px-4 md:px-6 mt-8">
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                            />
                        </div>
                        <span className="text-zinc-500 text-sm font-mono">
                            {projects.length} projects
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
