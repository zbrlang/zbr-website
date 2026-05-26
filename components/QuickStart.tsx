'use client';

import { Terminal, Check, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalSteps = [
  {
    title: "Install the CLI",
    command: "npm i @zbrlang/zbr",
    output: [
      "added 1 package in 0.8s",
      "zbr version",
      "zbr v1.2.0"
    ],
    description: "Install ZBR CLI, directly from npm."
  },
  {
    title: "Initialize Project",
    command: "zbr init",
    output: [
      "Creating commands/ folder...",
      "Creating zbr.json config...",
      "Creating .env template...",
      "Done! Ready to write commands."
    ],
    description: "Set up your workspace instantly. No framework knowledge or boilerplate handlers required. Just logic."
  },
  {
    title: "Run the Engine",
    command: "zbr run",
    output: [
      "Watching commands/ directory...",
      "Connected to Discord Gateway",
      "Bot is live: ZBR-Bot#1234",
      "Hot reloading active."
    ],
    description: "Launch your bot. ZBR Runtime Engine watches your files, save a command and the changes are live instantly on Discord."
  }
];

export default function QuickStart() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-40 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: How it works / Steps */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Quick Start</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">From install to live in seconds.</h2>
            <p className="text-lg text-secondary/60 max-w-lg">
              ZBR removes the complexity of Discord bot development. Focus on your commands, we handle the gateway and persistence.
            </p>
          </div>

          <div className="space-y-4">
            {terminalSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                  activeStep === index 
                    ? "bg-white/[0.03] border-white/[0.1] shadow-2xl" 
                    : "border-transparent hover:border-white/[0.05]"
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    activeStep === index ? "bg-primary text-neutral" : "bg-white/5 text-white/40"
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      activeStep === index ? "text-white" : "text-white/40 group-hover:text-white/60"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-2 leading-relaxed transition-opacity ${
                      activeStep === index ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Interactive Terminal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Terminal Header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">zbr-cli v1.0.0</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm min-h-[300px] bg-black/40 relative">
              {/* Added: Activity Indicator in the "empty" space */}
              <div className="absolute top-8 right-8 pointer-events-none">
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white/20 uppercase tracking-tighter">Gateway Active</span>
                  </div>
                  <div className="text-[10px] text-white/10 uppercase tracking-tighter font-mono">
                    latency: 14ms
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-primary mb-4">
                <Terminal size={14} />
                <span>{terminalSteps[activeStep].command}</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-2"
                >
                  {terminalSteps[activeStep].output.map((line, i) => (
                    <div key={i} className="flex gap-3 text-white/40">
                      <span className="text-primary/40 select-none">›</span>
                      <span>{line}</span>
                    </div>
                  ))}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-primary/40 inline-block mt-2"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
