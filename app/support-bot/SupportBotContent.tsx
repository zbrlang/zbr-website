'use client';

import Footer from "@/components/Footer";
import { MessageSquare, Github, ExternalLink, Zap, Search, Book, Terminal, Bot, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SupportBotContent() {
  const features = [
    {
      title: "Function Discovery",
      description: "Instant access to syntax, arguments, and examples for any ZBR function.",
      icon: Search
    },
    {
      title: "Categorized Reference",
      description: "Interactive browsing of functions by categories like Moderation, Embeds, and HTTP.",
      icon: Book
    },
    {
      title: "Event Triggers",
      description: "Complete reference for all Discord gateway event triggers supported by ZBR.",
      icon: Zap
    },
    {
      title: "Built with ZBR",
      description: "A production-ready example of ZBR's capabilities, including SQLite caching and hot reloading.",
      icon: Terminal
    }
  ];

  const commands = [
    { trigger: "!help", description: "Displays all available commands." },
    { trigger: "!find <fn>", description: "Provides detailed documentation for a specific function." },
    { trigger: "!search <query>", description: "Searches for functions by name or description." },
    { trigger: "!category", description: "Opens an interactive menu to browse functions by category." },
    { trigger: "!random", description: "Displays a random ZBR function." },
    { trigger: "!related <fn>", description: "Lists other functions within the same category." },
    { trigger: "!triggers", description: "Lists all supported ZBR event triggers." },
    { trigger: "!stats", description: "Shows statistics about the ZBR language." },
    { trigger: "!links", description: "Provides important links related to ZBRLang and ZBR." },
  ];

  return (
    <div className="min-h-screen text-foreground font-['Hubot-Sans'] selection:bg-primary/30">
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          <div className="flex items-center gap-3 text-primary">
            <Bot size={24} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Official Utility</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Support Bot
          </h1>
          <p className="text-secondary/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            The official Discord utility for the ZBR scripting language. Built entirely in ZBR, it provides developers with instant access to documentation and tools.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Command Reference</h2>
          <div className="grid gap-3">
            {commands.map((cmd, i) => (
              <motion.div
                key={cmd.trigger}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/20">
                    {cmd.trigger}
                  </div>
                  <p className="text-secondary/60 text-sm">
                    {cmd.description}
                  </p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight size={16} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Bot size={120} />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Self-Host the Bot</h3>
            <p className="text-secondary/60 text-lg mb-8 leading-relaxed">
              Want to run your own instance of the ZBR Support Bot? The entire source code is available on GitHub as a production-ready example of what you can build.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/zbrlang/zbr-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <a
                href="/docs/resources/support-bot"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white font-bold hover:bg-white/[0.1] transition-all duration-300"
              >
                Full Documentation
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
