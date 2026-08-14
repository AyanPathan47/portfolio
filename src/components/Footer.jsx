"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Heart, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/AyanPathan47",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ayannpathan/",
        icon: Linkedin,
    },
    // {
    //     name: "X (Twitter)",
    //     href: "https://x.com",
    //     icon: Twitter,
    // },
    {
        name: "Email",
        href: "mailto:pathanayan9457@gmail.com",
        icon: Mail,
    },
]

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
]

// Mini calendar helper - generates current month's mini calendar
const MiniCalendar = () => {
    const now = new Date()
    const currentDay = now.getDate()
    const currentMonth = now.toLocaleString('default', { month: 'long' })
    const currentYear = now.getFullYear()

    // Get first day of month and total days
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay()
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()

    // Generate calendar grid
    const days = []
    for (let i = 0; i < firstDay; i++) {
        days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
    }

    return (
        <div className="relative group hidden md:block">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-4 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-zinc-200">{currentMonth}</p>
                            <p className="text-[10px] text-zinc-500">{currentYear}</p>
                        </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Open
                    </span>
                </div>

                {/* Day labels */}
                <div className="grid grid-cols-7 gap-1.5 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, i) => (
                        <span key={i} className="w-6 h-5 text-[10px] font-medium text-zinc-500 flex items-center justify-center">
                            {day}
                        </span>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1.5">
                    {days.slice(0, 35).map((day, i) => (
                        <span
                            key={i}
                            className={`w-6 h-6 text-[11px] flex items-center justify-center rounded-md transition-all duration-200
                                ${day === null ? '' :
                                    day === currentDay
                                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25'
                                        : day < currentDay
                                            ? 'text-zinc-600 hover:bg-zinc-800/50'
                                            : 'text-zinc-300 hover:bg-zinc-800/50'
                                }`}
                        >
                            {day}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Code snippet component
const CodeSnippet = () => {
    return (
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 font-mono text-xs w-fit">
            <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-zinc-600 text-[10px] ml-2">status.js</span>
            </div>
            <pre className="text-zinc-400 leading-relaxed">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-zinc-500">{"{"}</span>{"\n"}
                {"  "}<span className="text-zinc-300">name</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-400">&apos;Ayan Pathan&apos;</span>
                <span className="text-zinc-500">,</span>{"\n"}
                {"  "}<span className="text-zinc-300">status</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-400">&apos;Available&apos;</span>
                <span className="text-zinc-500">,</span>{"\n"}
                {"  "}<span className="text-zinc-300">coffee</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-orange-400">Infinity</span>
                <span className="text-zinc-500">,</span>{"\n"}
                <span className="text-zinc-500">{"}"}</span>
                <span className="text-zinc-500">;</span>
            </pre>
        </div>
    )
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="py-5 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 mb-16">
                    {/* Left Side - CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-500 font-mono text-sm mb-4 block">
                            // Get in Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Have a{" "}
                            <span className="gradient-text">product</span>
                            {" "}, <span className="gradient-text">idea</span>
                            {" "}, <span className="gradient-text">or feature in mind?</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            I work on full-stack development, automation workflows, and performance-focused web systems. If you're looking for someone who can ship real features - not just prototypes - let’s talk !!
                        </p>
                        <div className="flex items-start gap-4">
                            <Button size="lg" className="gap-2 px-8" asChild>
                                <a href="mailto:pathanayan9457@gmail.com" className="flex items-center justify-between gap-1">
                                    <Mail className="w-4 h-4" />
                                    Say Hello
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                                <a href="/Ayann_Resume_Sep2025.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-1">
                                    Download CV
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side - Availability & Code Snippet */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Availability Card */}
                        <div className="flex gap-4 items-start">
                            {/* Status Badge + Info */}
                            <div className="flex flex-col gap-3">
                                {/* Availability Badge */}
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-emerald-400 text-sm font-medium">Available for freelance</span>
                                </div>

                                {/* Location & Time */}
                                <div className="flex items-center gap-4 text-sm text-zinc-400">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                        India
                                    </span>
                                    <span className="text-zinc-600">•</span>
                                    <span>IST (UTC +5:30)</span>
                                </div>
                                <CodeSnippet />
                            </div>

                            {/* Mini Calendar */}
                            <MiniCalendar />
                        </div>

                        {/* Code Snippet */}
                        {/* <CodeSnippet /> */}

                        {/* Quick Links - Horizontal */}
                        <div className="flex gap-4 items-center justify-center text-sm">
                            {quickLinks.map((link, index) => (
                                <span key={link.name} className="flex items-center gap-4">
                                    <a
                                        href={link.href}
                                        className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                    {index < quickLinks.length - 1 && (
                                        <span className="text-zinc-700">/</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <Separator className="mb-12" />

                {/* Social Links & Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-zinc-500">
                        <span>
                            © {currentYear} Ayan Pathan. All rights reserved.
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using Next.js
                        </span>
                    </div>
                </motion.div>

                {/* Decorative gradient */}
                <div className="relative mt-16">
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                </div>
            </div>
        </footer>
    )
}
