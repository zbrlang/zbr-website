'use client';

import Link from 'next/link';
import { Github, Code2, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-8 opacity-0 -translate-y-4 animate-[load_1.5s_ease-out_forwards,up_1s_ease-out_forwards]">
      {/* Left: Brand Name */}
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2 group w-fit">
          <span className="text-xl font-bold tracking-tighter text-[#bad6f7] hover:text-white transition-colors uppercase font-['Hubot-Sans']">ZBR</span>
        </Link>
      </div>

      {/* Center: Middle Icon */}
      <div className="flex-none absolute left-1/2 -translate-x-1/2">
        <div className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] cursor-default">
          <Code2 size={20} strokeWidth={1.5} className="text-[#9dc3f7] drop-shadow-[0_0_8px_rgba(157,195,247,0.4)] group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Right: GitHub + Get Started (Responsive) */}
      <div className="flex-1 flex justify-end items-center gap-3 md:gap-6">
        <Link 
          href="https://github.com/zbrlang/zbr" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[#bad6f7] opacity-0 group-hover:opacity-10 rounded-full blur-md transition-opacity" />
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] backdrop-blur-sm group-hover:border-white/[0.15] transition-all bg-white/[0.03] group-hover:bg-white/[0.08]">
            <Github size={18} strokeWidth={1.5} className="text-[#bad6f7] group-hover:text-white transition-colors" />
          </div>
        </Link>
        
        <Link href="/docs" className="pill-button-primary px-3 md:px-8 h-9 md:h-10 flex items-center justify-center min-w-[36px] md:min-w-fit">
          <span className="text-xs font-semibold tracking-wide hidden md:block">Get started</span>
          <span className="md:hidden flex items-center justify-center">
            <Zap size={16} fill="currentColor" />
          </span>
        </Link>
      </div>
    </nav>
  );
}
