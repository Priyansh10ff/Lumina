"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Terminal,
  TrendingUp,
  Users,
  Cpu,
} from "lucide-react";
import  Tilt  from "react-parallax-tilt";

// UPDATED WITH YOUR REAL PROJECTS
const projects = [
  {
    title: "Wealth Mirror",
    category: "FinTech / Analytics",
    description:
      "A high-fidelity financial tracking system. Visualizes net worth and asset allocation with institutional-grade data precision.",
    stack: ["Next.js", "Recharts", "Supabase"],
    icon: TrendingUp,
    color: "from-emerald-500/20 to-green-900/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "SkillBarter",
    category: "Peer-to-Peer Skill Marketplace",
    description:
      "A community-driven platform where individuals exchange skills and services without monetary transactions, enabling fair collaboration through direct skill swaps.",
    stack: ["React", "Node.js", "MongoDB","Socket.io"],
    icon: Users,
    color: "from-blue-500/20 to-indigo-900/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "SaaS Dashboard",
    category: "Business Intelligence",
    description:
      "Dark-mode administrative powerhouse. Handles millions of data points with zero latency. The command center for modern startups.",
    stack: ["TypeScript", "Tailwind", "Vercel"],
    icon: Terminal,
    color: "from-purple-500/20 to-pink-900/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Autonomous Debugger",
    category: "DevTool / AI",
    description:
      "Self-healing code infrastructure. Detects runtime errors and suggests patches before the developer even opens the console.",
    stack: ["Python", "AI/ML", "Shell"],
    icon: Cpu,
    color: "from-red-500/20 to-orange-900/20",
    border: "group-hover:border-red-500/50",
  },
  {
  title: "TrendTruk",
  category: "E-Commerce / Frontend Architecture",
  description:
    "A modern, responsive e-commerce application delivering a complete shopping flow—from product discovery to cart orchestration and checkout simulation. Built for performance, scalability, and clean state management.",
  stack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Context API"
  ],
  icon: TrendingUp,
  color: "from-orange-500/20 to-rose-900/20",
  border: "group-hover:border-orange-500/50",
},
{
  title: "Sacrificial Ping Pong",
  category: "Game / Experimental Mechanics",
  description:
    "A minimalist arcade-style ping pong game built around a sacrifice-based scoring mechanic. Players trade control, speed, or visibility to gain advantage, introducing strategic tension into a familiar system.",
  stack: ["JavaScript", "HTML5 Canvas", "CSS3"],
  icon: Cpu,
  color: "from-lime-500/20 to-emerald-900/20",
  border: "group-hover:border-lime-500/50",
},
{
  title: "Developer Portfolio",
  category: "Personal Brand / Web Presence",
  description:
    "A performance-focused personal portfolio showcasing selected projects, technical depth, and visual identity. Designed with motion, clarity, and narrative hierarchy.",
  stack: ["React", "Framer Motion", "Tailwind CSS"],
  icon: ExternalLink,
  color: "from-fuchsia-500/20 to-rose-900/20",
  border: "group-hover:border-fuchsia-500/50",
},
{
  title: "WeatherWise",
  category: "Web App / Real-Time Data",
  description:
    "A minimal, fast-loading weather intelligence app delivering real-time forecasts with location awareness and clean UI. Optimized for responsiveness and instant readability.",
  stack: ["JavaScript", "Weather API", "HTML5", "CSS3"],
  icon: Cpu,
  color: "from-sky-500/20 to-cyan-900/20",
  border: "group-hover:border-sky-500/50",
},
{
  title: "Bento Kanban Board",
  category: "Productivity / Systems Design",
  description:
    "A high-performance, offline-first Kanban system built as a single-file application. Combines Bento Grid aesthetics with drag-and-drop workflows, Pomodoro focus cycles, gamified task completion, and stealth productivity modes.",
  stack: [
    "Vanilla JS",
    "HTML5",
    "CSS Grid",
    "LocalStorage",
    "html2pdf.js",
    "canvas-confetti"
  ],
  icon: Terminal,
  color: "from-yellow-500/20 to-amber-900/20",
  border: "group-hover:border-yellow-500/50",
}
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              ARCHIVES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-xl">
            Selected deployments from the private repository.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              options={{ max: 15, scale: 1.02, speed: 400 }}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative h-full bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 ${project.border}`}
              >
                {/* GLOW EFFECT */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white">
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-black/50 border border-white/10 hover:bg-white hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-full bg-black/50 border border-white/10 hover:bg-white hover:text-black transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-mono mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-bold text-white bg-white/5 border border-white/10 rounded-full uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
