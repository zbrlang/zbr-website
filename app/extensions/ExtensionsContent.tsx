'use client';

import Footer from "@/components/Footer";
import { Code2, Github, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExtensionsContent() {
  const extensions = [
    {
      id: 'vscode',
      name: 'VS Code',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official VS Code extension for ZBR with full editor support.',
      features: [
        'Syntax highlighting for .zbr files',
        '400+ code snippets',
        'Smart completions',
        'Function references'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/vscode',
          icon: Github
        }
      ]
    },
    {
      id: 'zed',
      name: 'Zed',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official Zed extension powered by Tree-sitter grammar.',
      features: [
        'Tree-sitter powered parsing',
        'Lightning-fast performance',
        'Native Zed integration',
        'Full language support'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/zed',
          icon: Github
        }
      ]
    },
    {
      id: 'neovim',
      name: 'Neovim',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official Neovim extension powered by Tree-sitter grammar.',
      features: [
        'Tree-sitter powered highlighting',
        'Smart indentation and folding',
        'Filetype detection',
        '400+ code snippets'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/neovim',
          icon: Github
        }
      ]
    },
    {
      id: 'helix',
      name: 'Helix',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official Helix extension powered by Tree-sitter grammar.',
      features: [
        'Tree-sitter powered highlighting',
        'Smart indentation and folding',
        'Native Helix integration',
        '400+ code snippets'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/helix',
          icon: Github
        }
      ]
    },
    {
      id: 'sublime',
      name: 'Sublime Text',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official Sublime Text extension with custom syntax highlighting.',
      features: [
        'Custom .sublime-syntax definition',
        'Smart bracket matching',
        'Comment toggling',
        '400+ function completions'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/sublime',
          icon: Github
        }
      ]
    },
    {
      id: 'intellij',
      name: 'JetBrains',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Official JetBrains IDE extension with TextMate grammar and live templates.',
      features: [
        'TextMate grammar highlighting',
        '400+ live templates',
        'Smart bracket matching',
        'Comment toggling'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/intellij',
          icon: Github
        }
      ]
    },
    {
      id: 'bat',
      name: 'bat',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Syntax highlighting for ZBR scripts in bat, a cat(1) clone with wings.',
      features: [
        'Terminal syntax highlighting',
        'Sublime syntax definition',
        'bat cache integration',
        'Git integration support'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/bat',
          icon: Github
        }
      ]
    },
    {
      id: 'highlightjs',
      name: 'highlight.js',
      status: 'Ready',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Language definition for ZBR in highlight.js, a syntax highlighter for the web.',
      features: [
        'Web syntax highlighting',
        'ESM module format',
        'Function and trigger highlighting',
        'Easy integration'
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/zbrlang/zbr-extensions/tree/main/highlightjs',
          icon: Github
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen selection:bg-primary/30 pt-32">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-primary mb-6">
            <Code2 size={24} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">IDE Extensions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white font-['Hubot-Sans']">
            Extensions
          </h1>
          <p className="text-secondary/60 text-lg mb-16 max-w-2xl">
            Write ZBR commands with full editor support. Syntax highlighting, snippets, and smart completions across your favorite IDEs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {extensions.map((ext, idx) => (
            <motion.div
              key={ext.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{ext.name}</h3>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${ext.statusColor}`}>
                    {ext.status}
                  </span>
                </div>
              </div>

              <p className="text-secondary/60 text-sm mb-6">
                {ext.description}
              </p>

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 mb-3">Features</p>
                <ul className="space-y-2">
                  {ext.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary/70 text-sm">
                      <Zap size={14} className="text-primary/60 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                {ext.links.map((link, i) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all text-primary text-sm font-medium"
                    >
                      <IconComponent size={16} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
        >
          <h3 className="text-xl font-bold text-white mb-3">Quick Start</h3>
          <p className="text-secondary/60 text-sm mb-6">
            Get started with ZBR extensions in minutes. Choose your editor and install the extension to begin writing ZBR code with full editor support.
          </p>
          <a
            href="https://github.com/zbrlang/zbr-extensions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
