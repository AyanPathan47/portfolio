"use client"

import { motion } from "framer-motion"
import { Code2, Database, Plug, Cloud, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { about, profile } from "@/data/portfolio"

const icons = { Code2, Database, Plug, Cloud }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 font-mono text-sm mb-2 block">
            // About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            A developer who works across the stack
          </h2>
          <p className="flex items-center gap-1.5 text-zinc-500 text-sm">
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {about.focus.map((item) => {
              const Icon = icons[item.icon]
              return (
                <Card
                  key={item.title}
                  className="p-4 flex items-start gap-3 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-zinc-100">{item.title}</div>
                    <div className="text-xs text-zinc-500 leading-relaxed mt-1">
                      {item.text}
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
