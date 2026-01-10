'use client';

import { motion } from 'framer-motion';

const techs = [
  "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Node.js", "PostgreSQL", "Stripe", "AWS", "Vercel", "Figma"
];

export default function TechStack() {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...techs, ...techs].map((tech, i) => ( // Duplicate list for seamless loop
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}