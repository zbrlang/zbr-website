'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Spotlights isolated to Hero */}
      <div className="spotlight-container">
        <div className="spotlight" style={{ '--rotation': '10deg' } as any} />
        <div className="spotlight" style={{ '--rotation': '-10deg' } as any} />
      </div>

      {/* Accent Lines Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="accent-line-h top-[10%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.5s_forwards] w-full h-px bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.1)] to-transparent absolute" />
        <div className="accent-line-h top-[25%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.5s_forwards] w-full h-px bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.1)] to-transparent absolute" />
        <div className="accent-line-h top-[40%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.5s_forwards] w-full h-px bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.1)] to-transparent absolute" />
        <div className="accent-line-h top-[60%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.5s_forwards] w-full h-px bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.1)] to-transparent absolute" />
        <div className="accent-line-h top-[75%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.5s_forwards] w-full h-px bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.1)] to-transparent absolute" />
        
        <div className="accent-line-v left-[20%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.2s_forwards] w-px h-full bg-[rgba(186,215,247,0.1)] absolute" />
        <div className="accent-line-v left-[35%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.2s_forwards] w-px h-full bg-[rgba(186,215,247,0.1)] absolute" />
        <div className="accent-line-v right-[20%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.2s_forwards] w-px h-full bg-[rgba(186,215,247,0.1)] absolute" />
        <div className="accent-line-v right-[35%] opacity-0 scale-0 animate-[accentload_2s_ease-out_2.2s_forwards] w-px h-full bg-[rgba(186,215,247,0.1)] absolute" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        {/* Subtitle */}
        <div className="opacity-0 -translate-y-4 animate-[load_2s_ease-in_2s_forwards,up_1.4s_ease-out_2s_forwards] mb-4">
          <div className="relative inline-block">
            <span className="text-base font-medium text-[#d8ecf8] opacity-70 uppercase tracking-[0.4em]">Introducing</span>
            <div className="absolute top-1/2 right-[120%] w-32 h-px bg-gradient-to-l from-[#9dc3f7] to-transparent opacity-30" />
            <div className="absolute top-1/2 left-[120%] w-32 h-px bg-gradient-to-r from-[#9dc3f7] to-transparent opacity-30" />
          </div>
        </div>

        {/* Title */}
        <div className="hero-text-container opacity-0 animate-[load_2s_ease-in-out_2.5s_forwards] mb-4">
          <h1 className="hero-text-main">ZBR</h1>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-[#d8ecf8] opacity-0 translate-y-4 animate-[load_2s_ease-out_3.5s_forwards,up_1.4s_ease-out_3.5s_forwards] max-w-3xl mx-auto text-shadow-[0_2px_16px_rgba(174,207,242,.24)] bg-gradient-to-b from-[#d8ecf8] to-[#98c0ef] bg-clip-text text-transparent leading-relaxed font-medium">
          The scripting language for discord bots. <br />
          Write commands as plain text. No boilerplate.
       </p>
      </div>

      {/* Mountains */}
      <div className="mountains opacity-0 animate-[load_2s_ease-in_2.8s_forwards]">
        <div />
        <div />
        <div />
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060f] pointer-events-none z-30" />
    </section>
  );
}
