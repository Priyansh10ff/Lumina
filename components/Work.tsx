'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Tilt } from 'react-tilt';

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "A dark-mode analytics platform featuring real-time data visualization, user management, and report export capabilities.",
    tags: ["Next.js", "Tailwind", "Recharts"],
    link: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Commerce Storefront",
    description: "High-performance online store with cart functionality, Stripe payment integration, and mobile-first responsive design.",
    tags: ["React", "Redux", "Stripe"],
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Landing Page",
    description: "Modern landing page with scroll animations, glassmorphism UI, and optimized lead generation forms.",
    tags: ["Framer Motion", "TypeScript", "Vercel"],
    link: "#",
    color: "from-orange-500 to-red-500"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-white/20 transition-all group relative overflow-hidden"
      >
        {/* Gradient Glow on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
        <p className="text-gray-400 mb-6 flex-grow relative z-10">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
            Live Demo <ExternalLink className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
            Code <Github className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default function Work() {
  return (
    <section id="work" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A showcase of technical proficiency and design aesthetics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}