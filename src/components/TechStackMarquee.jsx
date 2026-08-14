"use client"

import { motion } from "framer-motion"

const techStack = [
  { name: "React", color: "text-blue-400" },
  { name: "React Native", color: "text-cyan-500" },
  { name: "Next.js", color: "text-zinc-100" },
  { name: "Node.js", color: "text-green-500" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Mongo DB", color: "text-green-400" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Docker", color: "text-blue-400" },
  { name: "AWS", color: "text-orange-400" },
  { name: "Tailwind", color: "text-cyan-400" },
]

// Duplicate array for seamless loop
const duplicatedStack = [...techStack, ...techStack]

export default function TechStackMarquee() {
  return (
    <section className="py-12 overflow-hidden border-y border-zinc-800/50">
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

        {/* Marquee container */}
        <motion.div
          className="flex gap-8 md:gap-16"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 shrink-0"
            >
              <span
                className={`text-xl md:text-2xl font-semibold ${tech.color} whitespace-nowrap hover:scale-105 transition-transform cursor-default`}
              >
                {tech.name}
              </span>
              {index < duplicatedStack.length - 1 && (
                <span className="text-zinc-700 text-2xl">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
