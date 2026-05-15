'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Database, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export default function InfoSections() {
  return (
    <div className="space-y-32 py-32">
      {/* Scripting Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">No Boilerplate</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Commands as plain text.<br />Logic in real-time.
            </h2>
            <p className="text-lg text-secondary/60 mb-8 max-w-lg">
              ZBR is a scripting language designed for Discord bots. Write your commands in `.zbr` files and watch them come to life without restarting your engine.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <RefreshCw className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Hot Reloading</h4>
                  <p className="text-xs text-secondary/40">Save a file and the changes are live instantly.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Bot className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Discord Native</h4>
                  <p className="text-xs text-secondary/40">Built-in support for embeds, components, and events.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group bg-[#080911]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
            <MessageSquare size={120} strokeWidth={0.5} className="text-primary/10 group-hover:text-primary/20 transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* Persistence Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 glass-panel rounded-2xl p-8 aspect-square flex flex-col justify-center gap-6 relative overflow-hidden bg-[#080911]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            <div className="space-y-4 relative z-10">
              <div className="pill-input w-full flex items-center gap-3">
                <Database className="text-primary" size={14} />
                <span className="text-xs text-secondary/60">ZgetUserVar{"{xp}"}</span>
              </div>
              <div className="pill-input w-full flex items-center gap-3">
                <Database className="text-primary" size={14} />
                <span className="text-xs text-secondary/60">ZgetServerVar{"{prefix}"}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Built-in Persistence</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              State that sticks.<br />Powered by SQLite.
            </h2>
            <p className="text-lg text-secondary/60 mb-8 max-w-lg">
              Manage user, server, and global variables effortlessly. ZBR handles the database for you, ensuring your bot&apos;s data is safe and accessible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap size={12} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Rust-powered execution engine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShieldCheck size={12} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Type-safe variable scoping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
