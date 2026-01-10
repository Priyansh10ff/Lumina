'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "It depends on complexity. A landing page usually takes 1-2 weeks, while a full SaaS platform or E-commerce store can take 4-8 weeks. I prioritize speed without sacrificing quality."
  },
  {
    question: "Do you handle mobile design?",
    answer: "Absolutely. Every website I build is 'Mobile-First', meaning it looks perfect on iPhones, iPads, and desktops. Google loves this, and so will your customers."
  },
  {
    question: "What are your payment terms?",
    answer: "I typically work on a 50/50 structure. 50% deposit to start the project and lock in my time, and the remaining 50% upon successful launch and your satisfaction."
  },
  {
    question: "Will I be able to edit the text myself?",
    answer: "Yes! I can integrate a CMS (Content Management System) so you can update text, images, and blogs without needing to touch a single line of code."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-gray-400">Everything you need to know before we start.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl bg-black overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === i ? <Minus className="text-blue-500" /> : <Plus className="text-gray-500" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}