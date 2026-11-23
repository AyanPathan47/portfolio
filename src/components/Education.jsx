"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education, certifications } from "@/data/portfolio"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6 border-t border-zinc-800/50">
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
            // Education & Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Academic Background
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Education and certifications that reflect my technical growth and domain expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* Education Cards - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu) => (
              <motion.div key={edu.degree} variants={itemVariants}>
                <Card
                  className={`h-full p-6 border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden ${edu.status === "Pursuing"
                    ? "bg-gradient-to-br from-blue-950/50 via-zinc-900 to-zinc-950"
                    : "bg-gradient-to-br from-zinc-900 to-zinc-950"
                    }`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {edu.status === "Pursuing" ? (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Currently Pursuing
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="gap-1.5">
                        <span className="text-green-400">✓</span>
                        Completed
                      </Badge>
                    )}
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 pr-28">
                    <div
                      className={`p-3 rounded-xl shrink-0 ${edu.status === "Pursuing"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/10 text-green-400"
                        }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-zinc-400 text-sm">{edu.school}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GPA */}
                  {edu.gpa && (
                  <div className="mb-5">
                    <Badge
                      variant="outline"
                      className={`${edu.status === "Pursuing"
                        ? "border-blue-500/30 text-blue-400"
                        : "border-green-500/30 text-green-400"
                        }`}
                    >
                      GPA: {edu.gpa}
                    </Badge>
                  </div>

                  )}

                  {/* Highlights */}
                  <div className="mb-5">
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-zinc-300"
                        >
                          <span
                            className={`${edu.status === "Pursuing"
                              ? "text-blue-500"
                              : "text-green-500"
                              }`}
                          >
                            →
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="font-mono text-xs bg-zinc-800/50"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-medium mb-4">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="p-4 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group h-full">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-zinc-100 text-sm group-hover:text-white transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-zinc-500">{cert.issuer}</p>
                        {cert.note && (
                          <p className="text-xs text-zinc-600 mt-0.5">{cert.note}</p>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {cert.date}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Always Learning Card */}
          <motion.div variants={itemVariants}>
            <Card className="p-5 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <p className="text-sm font-medium text-zinc-200">
                    Continuous Learning
                  </p>
                  <p className="text-xs text-zinc-500">
                    Expanding my expertise in full-stack engineering, cloud platforms, and performance-oriented application development. Actively experimenting with new tools, automation workflows, and AI-powered integrations — such as chatbots and messaging systems — to build smarter and scalable software solutions.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
