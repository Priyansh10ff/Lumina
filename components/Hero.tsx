'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <motion.div style={{ y: y1, x: -100 }} className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-600/30 rounded-full blur-[100px]" />
      <motion.div style={{ y: y2, x: 100 }} className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">✨ Accepting New Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experiences That Scale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build lightning-fast, visually stunning websites that convert visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* LINKEDIN LINK */}
            <motion.a 
              href="https://www.linkedin.com/in/priyansh-dugar-709333363/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg cursor-pointer hover:border-white/40 transition-colors flex items-center justify-center"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}