'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          
          <div className="md:w-1/3">
            {/* NEW LOGO */}
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              Ether<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Defying expectations. Building digital experiences that elevate brands above the noise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/priyansh-dugar-709333363/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-6">Sitemap</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#work" className="hover:text-blue-400 transition-colors">Work</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">Process</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ether Digital. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}