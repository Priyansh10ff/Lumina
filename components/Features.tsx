'use client';

import { motion } from 'framer-motion';
import { Zap, Layers, Code } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
  >
    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default function Features() {
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for speed with 99+ Google PageSpeed scores to boost SEO." },
    { icon: Layers, title: "Modern Stack", description: "Built with Next.js 14, React, and Tailwind for scalable codebases." },
    { icon: Code, title: "Clean Code", description: "Component-driven development ensuring easy future updates." },
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why choose me?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}