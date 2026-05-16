'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, ArrowRight } from 'lucide-react';
import Footer from "@/components/Footer";

const endpoints = [
  {
    path: '/functions_list',
    source: 'functions.json',
    description: 'Returns the full list of available ZBR functions.',
    method: 'GET'
  },
  {
    path: '/functions_tag_list',
    source: 'functions_tag.json',
    description: 'Returns function metadata organized by tags.',
    method: 'GET'
  },
  {
    path: '/triggers_list',
    source: 'triggers.json',
    description: 'Returns the list of all supported event triggers.',
    method: 'GET'
  },
  {
    path: '/triggers_tag_list',
    source: 'triggers_tag.json',
    description: 'Returns trigger metadata organized by tags.',
    method: 'GET'
  }
];

export default function ApiContent() {
  return (
    <div className="min-h-screen text-foreground font-['Hubot-Sans'] selection:bg-primary/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          <div className="flex items-center gap-3 text-primary">
            <Database size={24} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">ZBR Web API</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            The Backbone of <span className="text-gradient">Automation</span>
          </h1>
          <p className="text-secondary/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Real-time access to the ZBR engine&apos;s internal function and trigger definitions. Powering your own documentation, CLI tools, and integrations.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {endpoints.map((endpoint, i) => (
            <motion.div
              key={endpoint.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href={`/api${endpoint.path}`}
                className="group block p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
                        {endpoint.method}
                      </span>
                      <code className="text-foreground font-mono text-lg group-hover:text-primary transition-colors">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-secondary/40 text-sm">
                      {endpoint.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <div className="text-[10px] font-bold text-secondary/20 uppercase tracking-widest mb-1">Source</div>
                      <div className="text-xs font-mono text-secondary/40">{endpoint.source}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/20 group-hover:text-primary group-hover:border-primary/50 group-hover:translate-x-1 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
