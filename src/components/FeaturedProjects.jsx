"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, profile } from "@/data/portfolio"
import ProjectPreview from "@/components/ProjectPreview"

const colorVariants = {
    blue: "from-blue-500/20 to-blue-600/5",
    purple: "from-purple-500/20 to-purple-600/5",
    green: "from-green-500/20 to-green-600/5",
    orange: "from-orange-500/20 to-orange-600/5",
    cyan: "from-cyan-500/20 to-cyan-600/5",
}

const glowVariants = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500",
}

function ProjectCard({ project, index }) {
    return (
        <Card className="group w-[350px] md:w-[450px] shrink-0 flex flex-col bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
            {/* Project Image/Preview */}
            <div className={`relative h-48 md:h-56 bg-gradient-to-br ${colorVariants[project.color]} overflow-hidden`}>
                {project.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {/* Temporary illustrated preview, until a real screenshot is set */}
                {!project.image && <ProjectPreview type={project.preview} color={project.color} />}

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
                <div className={`absolute inset-0 flex items-center justify-center z-10 ${project.image || project.preview ? "hidden" : ""}`}>
                    <div className="text-5xl md:text-6xl font-bold text-zinc-800/50 font-mono group-hover:text-zinc-700/50 transition-colors">
                        {project.title.charAt(0)}
                    </div>
                </div>
            </div>

            <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-zinc-500">{project.category}</span>
                    {project.status && (
                        <Badge variant="secondary" className="text-xs shrink-0">
                            {project.status}
                        </Badge>
                    )}
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                </h3>
            </CardHeader>

            <CardContent className="pb-4 flex-1">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                {project.features.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                        {project.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-xs text-zinc-300">
                                <span className="text-blue-500">→</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
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
                    {project.note && (
                        <Badge
                            variant="outline"
                            className="gap-1.5 text-xs px-2 py-0.5 border-dashed text-zinc-500"
                        >
                            <Lock className="w-3 h-3" />
                            {project.note}
                        </Badge>
                    )}
                </div>
            </CardContent>

            {project.links.length > 0 && (
                <CardFooter className="gap-3">
                    {project.links.map((link) => (
                        <Button
                            key={link.href}
                            size="sm"
                            variant={link.type === "live" ? "default" : "outline"}
                            className="gap-2 flex-1"
                            asChild
                        >
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="gap-2">
                                {link.type === "live" ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                                {link.label}
                            </a>
                        </Button>
                    ))}
                </CardFooter>
            )}
        </Card>
    )
}

export default function FeaturedProjects() {
    const targetRef = useRef(null)
    const trackRef = useRef(null)
    const [distance, setDistance] = useState(0)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    // Measure how far the card track overflows the viewport so the horizontal
    // movement ends exactly on the last card, whatever the number of projects.
    useEffect(() => {
        const measure = () => {
            const track = trackRef.current
            if (!track) return
            const viewport = track.parentElement.clientWidth
            // scrollWidth leaves out the track's right padding, so add it back
            const padRight = parseFloat(getComputedStyle(track).paddingRight) || 0
            setDistance(Math.max(0, track.scrollWidth + padRight - viewport))
        }
        measure()
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    // Transform vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

    return (
        <section
            id="projects"
            ref={targetRef}
            className="relative"
            style={{ height: `calc(100vh + ${distance}px)` }}
        >
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
                                    Mobile and full-stack products I have built, plus academic and
                                    research work.
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
                        ref={trackRef}
                        style={{ x }}
                        className="flex gap-6 px-4 md:px-12 min-[2200px]:pl-[max(3rem,calc((100vw_-_72rem)/2_+_1.5rem))]!"
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
                                Browse my GitHub for more of my code.
                            </p>
                            <Button className="gap-2" asChild>
                                <a href={profile.github} target="_blank" rel="noopener noreferrer"  className="flex items-center justify-between gap-1">
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
