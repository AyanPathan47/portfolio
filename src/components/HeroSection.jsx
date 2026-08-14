"use client"

import { motion } from "framer-motion"
import { ArrowRight, Terminal, Code2, Database, Cloud, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Main Hero Card - Spans 2 columns and 2 rows on desktop */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <Card className="h-full p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 min-h-[320px] md:min-h-[400px]">
              <div>
                <Badge variant="secondary" className="mb-6 w-fit gap-2 pl-2 pr-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for work
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
                  Building Scalable{" "}
                  <span className="text-zinc-500">Digital Experiences</span>
                </h1>
                <p className="text-zinc-400 text-base md:text-lg max-w-lg mb-6 md:mb-8 leading-relaxed">
                  Full Stack Developer specializing in React, Node.js, and Cloud
                  Architecture. Crafting performant web applications with modern
                  technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="gap-2" asChild>
                  <a href="#work" className="flex items-center justify-between gap-1">
                    View Projects <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Terminal/Code Card */}
          <motion.div variants={itemVariants} className="h-52 md:h-auto">
            <Card className="h-full overflow-hidden relative border-zinc-800 bg-zinc-950">
              {/* Glowing gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
              
              <div className="p-5 relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-zinc-500 font-mono ml-2">developer.js</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-zinc-400 space-y-1 flex-1">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    name: <span className="text-green-400">&quot;Ayan Pathan&quot;</span>,
                  </p>
                  <p className="pl-4">
                    role: <span className="text-green-400">&quot;Full Stack&quot;</span>,
                  </p>
                  <p className="pl-4">
                    skills: [
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">&quot;React&quot;</span>,{" "}
                    <span className="text-green-400">&quot;React Native&quot;</span>,{" "}
                    <span className="text-green-400">&quot;Node.js&quot;</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">&quot;Express.js&quot;</span>,{" "}
                    <span className="text-green-400">&quot;Mongo DB&quot;</span>,{" "}
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    passion: <span className="text-green-400">&quot;∞&quot;</span>
                  </p>
                  <p>
                    <span className="text-yellow-400">{"}"}</span>;
                  </p>
                  <p className="text-white animate-pulse">▊</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats Cards Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 md:gap-4">
            <Card className="p-4 flex flex-col justify-center items-center text-center border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover:border-zinc-700">
              <span className="text-2xl md:text-3xl font-bold text-zinc-100">2+</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider mt-1">
                Years Exp
              </span>
            </Card>
            <Card className="p-4 flex flex-col justify-center items-center text-center border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover:border-zinc-700">
              <span className="text-2xl md:text-3xl font-bold text-zinc-100">15+</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider mt-1">
                Projects
              </span>
            </Card>
            <Card className="p-4 flex flex-col justify-center items-center text-center border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover:border-zinc-700">
              <span className="text-2xl md:text-3xl font-bold text-zinc-100">100%</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider mt-1">
                Quality
              </span>
            </Card>
          </motion.div>

          {/* Tech Stack Mini Cards */}
          <motion.div variants={itemVariants} className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card className="p-4 flex items-center gap-3 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 group">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm text-zinc-100">Frontend</div>
                <div className="text-xs text-zinc-500">React, React Native, Next.js</div>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 group">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm text-zinc-100">Backend</div>
                <div className="text-xs text-zinc-500">Node, Express, Mongo, Postgres</div>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 group">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm text-zinc-100">Cloud</div>
                <div className="text-xs text-zinc-500">AWS, Docker, Vercel, Render</div>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 group">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm text-zinc-100">More</div>
                <div className="text-xs text-zinc-500">TypeScript, Git, Other</div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
