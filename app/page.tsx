import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Features from '@/components/Features';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Vision from '@/components/Vision';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <Work />
      <Process />
      <Vision />
      <FAQ />
      
      {/* FINAL CTA - REVERTED TO "RULE THE WORLD" */}
      <section className="py-32 relative overflow-hidden text-center border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
            Let's Rule the World.
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">
            You have the vision. I have the code. 
            Connect with me, and let's build a digital experience that leaves your competition in the dust.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/priyansh-dugar-709333363/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0077b5] text-white rounded-full font-bold text-lg hover:bg-[#006396] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,119,181,0.3)]"
            >
              <Linkedin className="w-6 h-6" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}