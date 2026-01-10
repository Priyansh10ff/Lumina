'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and brand voice to ensure a perfect fit."
  },
  {
    icon: PenTool,
    title: "Design",
    description: "I create high-fidelity wireframes and interactive prototypes so you can visualize the result before code is written."
  },
  {
    icon: Code2,
    title: "Development",
    description: "Using Next.js and Tailwind, I build a pixel-perfect, responsive website optimized for speed and SEO."
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deployment to Vercel/Netlify, performance testing, and final handoff with documentation."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/4 left-0 w-full h-96 bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Process</h2>
          <p className="text-gray-400">Simple, transparent, and efficient.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number/Icon Bubble */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-black border-4 border-blue-900 rounded-full z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-40px)] p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-colors ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}