'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Laser Focus",
    description: "I am currently accepting a limited number of clients. This means your project gets my absolute, undivided attention."
  },
  {
    icon: Zap,
    title: "Hunger to Win",
    description: "I am building my reputation, which means I cannot afford to deliver anything less than perfection. I work harder than the big agencies."
  },
  {
    icon: Heart,
    title: "Long-Term Partner",
    description: "I'm not looking for a quick gig. I'm looking for visionary business owners who want to dominate their market."
  }
];

export default function Vision() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">Current Status</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Open for Business</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I don't have a 10-year backlog. I have skills, modern tech, and a drive to build the best websites on the internet. 
            <br /><span className="text-white font-bold">I am looking for my first success story. Let that be you.</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <v.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{v.title}</h4>
              <p className="text-gray-400 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}