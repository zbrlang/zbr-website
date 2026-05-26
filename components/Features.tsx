'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, Link as LinkIcon, Lock, Globe } from 'lucide-react';

const featureList = [
  { title: "Rust Core", icon: Zap },
  { title: "Hot Reload", icon: Sparkles },
  { title: "SQLite Native", icon: Shield },
  { title: "HTTP Server", icon: Globe },
  { title: "Slash Commands", icon: LinkIcon },
  { title: "Event Driven", icon: Lock },
];

export default function Features() {
  return (
    <section className="py-20 border-y border-border/50 bg-neutral/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="w-5 h-5 text-secondary/40 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                <feature.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-secondary/60 group-hover:text-foreground transition-colors uppercase tracking-widest">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
