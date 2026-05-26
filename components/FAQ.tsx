'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is ZBR?",
    answer: "ZBR is a scripting language for building Discord bots. You write simple .zbr files with ZBR functions, run zbr run, and your bot is online, no coding required."
  },
  {
    question: "Is it faster than JavaScript?",
    answer: "ZBR runs on a high-performance Rust backend so the runtime engine itself is fast, but speed isn't really the point, simplicity is. You don't write Rust or JS, you write ZBR syntax like Zban{userID} and the engine handles everything."
  },
  {
    question: "Can I use it with existing projects?",
    answer: "ZBR is standalone, you install it via npm, add your bot token to .env, write .zbr command files, and run it. It's not designed to integrate with existing codebases, it's its own self-contained bot runtime."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, ZBR is fully open source under the MIT license. Free for personal and commercial use forever. You self-host your own bot, we don't charge for hosting."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-0 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-['Hubot-Sans'] mb-6">
            Frequently Asked
          </h2>
          <p className="text-secondary/40 text-lg">Everything you need to know about ZBR.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <div className="text-primary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-secondary/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
