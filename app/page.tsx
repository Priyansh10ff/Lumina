import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Features from '@/components/Features';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Vision from '@/components/Vision';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField'; // <--- The 3D Engine is Back
import { Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-purple-500/90 selection:text-white">
      
      {/* 1. THE 3D UNIVERSE (Fixed Background) */}
      <StarField />
      
      {/* 2. THE CONTENT (Relative Z-10 to sit ON TOP of the stars) */}
      <div className="relative z-10">
        <Navbar />
        
        {/* We use the simple Hero text, but the background is now the 3D stars */}
        <Hero />
        
        <TechStack />
        <Features />
        <Work />
        <Process />
        <Vision />
        <FAQ />
        
        {/* FINAL CTA */}
        <section className="py-40 relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter mix-blend-difference">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ASCENSION</span>
            </h2>
            <div className="flex justify-center">
              <a 
                href="https://www.linkedin.com/in/priyansh-dugar-709333363/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full font-bold text-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
                Connect
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}