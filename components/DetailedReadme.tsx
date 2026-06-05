'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Box, Code2 } from 'lucide-react';
import FAQ from './FAQ';

const examples = [
  {
    title: "Rank Command",
    file: "rank.zbr",
    code: `#trigger !rank 
#name Rank Command 
#type prefix 
 
Zvar{xp;ZgetUserVar{xp}} 
Zvar{level;ZgetUserVar{level}} 
Zvar{rank;1} 
 
Ztitle{Zusername's Rank} 
Zdescription{Level: Zvar{level} 
XP: Zvar{xp}} 
Zcolor{#5865F2} 
ZaddField{Server Rank;#Zvar{rank};true}`
  },
  {
    title: "Ban Command",
    file: "ban.zbr",
    code: `#trigger /ban 
#name Ban Command 
#type slash 
#description Ban a user 
#option user|User to ban|user|required 
 
ZonlyIf{ZisAdmin==true;No permissions} 
Zban{Zoption{user}} 
Banned Zoption{user}.`
  }
];

const features = [
  "Math", "String", "Embeds", "Variables", "Cooldowns", "Moderation", 
  "Roles", "Invites", "Voice", "Stage", "Stickers", "Events", 
  "Forum", "Components", "HTTP", "JSON", "Loops", "Async", 
  "Control Flow", "Error Handling"
];

export default function DetailedReadme() {
  return (
    <div className="space-y-64 pb-40">
      {/* How it Works - Cinematic Split */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs">The Engine</span>
            <h2 className="text-5xl font-bold leading-tight">High performance.<br />Low friction.</h2>
            <p className="text-xl text-secondary/40 leading-relaxed">
              ZBR is powered by a high-performance runtime engine built in Rust that parses and executes bot logic. Built on <a href="https://github.com/serenity-rs/serenity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Serenity</a> and <a href="https://tokio.rs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tokio</a>, it handles the Discord gateway with native speed.
            </p>
            <div className="flex gap-12 pt-4">
              <div className="space-y-3">
                <Cpu className="text-primary" size={24} />
                <h4 className="font-bold">Rust Core</h4>
                <p className="text-sm text-secondary/40">Blazing fast execution and memory safety.</p>
              </div>
              <div className="space-y-3">
                <Zap className="text-primary" size={24} />
                <h4 className="font-bold">Hot Reload</h4>
                <p className="text-sm text-secondary/40">Live updates without engine restarts.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-1000" />
            <div className="glass-panel aspect-square rounded-3xl flex flex-col items-center justify-center relative overflow-hidden p-12 bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent" />
              
              {/* Complex Engine Schematic Visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 border border-primary/5 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border border-primary/10 rounded-full border-dashed"
                />
                
                {/* Core Processor Unit */}
                <div className="relative z-10 w-32 h-32 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                  <div className="absolute inset-0 bg-primary/10 animate-pulse rounded-2xl" />
                  <Cpu size={48} className="text-primary/60 relative z-20" strokeWidth={1} />
                  
                  {/* Data Lines radiating out */}
                  {[0, 90, 180, 270].map((angle) => (
                    <div 
                      key={angle}
                      className="absolute w-20 h-px bg-gradient-to-r from-primary/40 to-transparent"
                      style={{ transform: `rotate(${angle}deg) translateX(64px)` }}
                    />
                  ))}
                </div>

                {/* Floating Tech Modules */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity, 
                      delay: i * 0.5 
                    }}
                    className="absolute text-[8px] font-mono text-primary/40 px-2 py-1 border border-primary/10 rounded bg-black/40"
                    style={{ 
                      top: i < 2 ? '15%' : '75%', 
                      left: i % 2 === 0 ? '10%' : '70%' 
                    }}
                  >
                    {["MEM_ALLOC", "GW_SHARD", "AST_PARSER", "TOKIO_ASYNC"][i]}
                  </motion.div>
                ))}
              </div>

              {/* Added: Connection status in the "empty" space */}
              <div className="absolute top-8 right-8 text-right space-y-1">
                <div className="text-[8px] text-primary/40 uppercase tracking-widest font-bold">Shard #0</div>
                <div className="text-[8px] text-green-500/60 uppercase tracking-widest font-bold flex items-center gap-1 justify-end">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
                  Ready
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2">Engine Core Active</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: [4, 16, 4], opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
                      className="w-1 bg-primary/40 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syntax & Command Types */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Modern Syntax</span>
              <h2 className="text-5xl font-bold mb-6">Built for speed.<br />Designed for humans.</h2>
              <p className="text-xl text-secondary/40 leading-relaxed">
                ZBR uses a functional, tag-based syntax that feels familiar but removes all the boilerplate of traditional Discord libraries.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { type: "Functional Syntax", desc: "Concise function-based logic like Ztitle{args}." },
                { type: "SQLite Persistence", desc: "Native state management with ZsetVar and ZgetVar." },
                { type: "In-Process Engine", desc: "Code executes directly in the gateway process, no separate server needed." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <div>
                    <h4 className="font-bold text-sm">{item.type}</h4>
                    <p className="text-xs text-secondary/30">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-3xl p-8 bg-black/40 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-sm space-y-4 relative z-10">
              <div className="flex gap-3 text-white/20 border-b border-white/5 pb-4 mb-4">
                <span className="text-primary/60">#syntax</span>
                <span>example.zbr</span>
              </div>
              <div className="space-y-2">
                <div className="text-secondary/60">#trigger !ping</div>
                <div className="text-secondary/60">#name Ping</div>
                <div className="text-secondary/60">#type prefix</div>
                <div className="text-secondary/60">{"// This is a comment"}</div>
                <div className="pt-2 text-primary">Zreply{"{Pong! Latency: Zpingms}"}</div>
              </div>
              <div className="pt-6 space-y-2">
                <div className="text-secondary/60">#trigger /userinfo</div>
                <div className="text-secondary/60">#type slash</div>
                <div className="text-secondary/60">#description Get info about a user</div>
                <div className="text-primary">Ztitle{"{Zusername{Zoption{user}}}"}</div>
                <div className="text-primary">Zdescription{"{Joined: ZuserJoined{Zoption{user}}}"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />

      {/* The Toolkit - Original Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-4"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Toolkit</span>
          <h2 className="text-5xl font-bold">Batteries included.</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="glass-panel py-6 px-8 rounded-2xl text-center cursor-default transition-all duration-300 group"
            >
              <span className="text-sm font-semibold text-secondary/40 group-hover:text-primary transition-colors tracking-wide uppercase">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
