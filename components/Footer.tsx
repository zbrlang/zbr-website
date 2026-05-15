'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, MessageSquare, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden bg-background">
      {/* Top Divider with subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Massive Background Text - Hidden on mobile */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-0 animate-[load_2s_ease-out_1s_forwards] hidden lg:block">
        <h2 className="footer-text-giant">ZBR</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          {/* Brand Info */}
          <div className="max-w-sm space-y-6">
            <div className="text-3xl font-bold tracking-tighter text-foreground font-['Hubot-Sans']">ZBR</div>
            <p className="text-secondary/60 leading-relaxed text-sm">
              A high-performance Discord bot framework built with Rust. Powering the next generation of automation with speed and safety.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/zbrlang/zbr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary/50 transition-all">
                <Github size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary/50 transition-all">
                <MessageSquare size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary/50 transition-all">
                <Terminal size={18} />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Product</h4>
              <ul className="space-y-3">
                <li><Link href="/introduction" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">Documentation</Link></li>
                <li><Link href="https://github.com/zbrlang/zbr/releases" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">Releases</Link></li>
                <li><Link href="https://www.npmjs.com/package/@zbrlang/zbr" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">CLI</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">Privacy Policy</Link></li>
                <li><Link href="/tos" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-secondary/40 hover:text-primary transition-colors text-xs font-medium">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/20">
          <div className="flex items-center gap-2">
            <span>© 2026 ZBRLANG</span>
            <span className="w-1 h-1 rounded-full bg-white/[0.05]" />
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH</span>
            <span className="text-foreground/40 font-black">ZBR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
