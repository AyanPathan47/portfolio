"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { experiences } from "@/data/portfolio"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 font-mono text-sm mb-2 block">
            // Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Work across frontend, backend and deployment, from client websites to a live rental platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-zinc-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-[2.1rem] -translate-x-1/2 size-4 rounded-full border-2 border-blue-500 bg-[#09090b]">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-50" />
                )}
              </div>

              <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-zinc-100">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-zinc-500" />
                    <span className="text-zinc-400 font-mono">{exp.period}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium ">
                    Key Contributions
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <span className="text-blue-500">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Type badge */}
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    {exp.type}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
