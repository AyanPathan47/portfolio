"use client"

import { motion } from "framer-motion"
import {
  CalendarClock,
  Workflow,
  Receipt,
  BarChart3,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { productionCase, productionWork } from "@/data/portfolio"

const icons = { CalendarClock, Workflow, Receipt, BarChart3, ShieldCheck, Server }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProductionEngineering() {
  return (
    <section id="production" className="py-20 px-4 md:px-6 border-t border-zinc-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 font-mono text-sm mb-2 block">
            // Production Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work from a live product
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Built and maintained on Rentkar&apos;s rental platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Featured case study */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-950/40 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Database className="w-5 h-5" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {productionCase.tag}
                </Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-6">
                {productionCase.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  ["The problem", productionCase.problem],
                  ["The approach", productionCase.approach],
                  ["The result", productionCase.outcome],
                ].map(([label, text]) => (
                  <div key={label}>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-2 flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                      {label}
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {productionCase.stack.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="font-mono text-xs px-2 py-0.5 bg-zinc-800/50"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Other workstreams */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productionWork.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                // Each card animates itself (not via the parent) so it can never
                // get stuck hidden if it mounts after the parent has animated.
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <Card className="h-full p-5 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors w-fit mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-medium text-zinc-100 mb-1.5">{item.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
