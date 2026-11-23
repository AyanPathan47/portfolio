"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillTiers } from "@/data/portfolio"

const accents = {
  blue: { dot: "bg-blue-500", pill: "bg-blue-500/10 border-blue-500/40 hover:bg-blue-500/20 hover:border-blue-400/70" },
  green: { dot: "bg-green-500", pill: "bg-green-500/10 border-green-500/40 hover:bg-green-500/20 hover:border-green-400/70" },
  orange: { dot: "bg-orange-500", pill: "bg-orange-500/10 border-orange-500/40 hover:bg-orange-500/20 hover:border-orange-400/70" },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 border-t border-zinc-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 font-mono text-sm mb-2 block">
            // Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {skillTiers.map((tier) => {
            const accent = accents[tier.accent]
            return (
              <motion.div key={tier.title} variants={itemVariants}>
                <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                    <h3 className="text-lg font-semibold text-zinc-100">{tier.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {tier.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className={`font-mono text-sm font-medium px-3 py-1.5 text-zinc-100 transition-colors ${accent.pill}`}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
