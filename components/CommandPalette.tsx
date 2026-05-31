'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Zap, Activity, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import searchIndex from '@/context/search-index.json';

type SearchItem = {
  name: string;
  description: string;
  type: string;
  url: string;
};

export default function CommandPalette({ isInline = false }: { isInline?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = query === '' 
    ? (searchIndex as SearchItem[]).slice(0, 5)
    : (searchIndex as SearchItem[]).filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSelect = useCallback((item: SearchItem) => {
    setIsOpen(false);
    setQuery('');
    router.push(item.url);
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => (i + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => (i - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, handleSelect]);

  return (
    <>
      {isInline ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-full md:w-64 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border/40 text-secondary/40 hover:bg-surface/80 hover:border-border transition-all text-sm group"
        >
          <Search size={14} />
          <span className="flex-1 text-left">Search docs...</span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-background/50 rounded border border-border/40 text-[10px] font-bold">
            <Command size={8} />
            <span>K</span>
          </div>
        </button>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-[150] w-12 h-12 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center justify-center text-primary hover:bg-primary/20 transition-all group shadow-lg shadow-primary/5"
          title="Search (Cmd+K)"
        >
          <Search size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-6 py-4 border-b border-border/50">
                <Search size={20} className="text-secondary/30 mr-4" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search functions, triggers..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground text-lg placeholder:text-secondary/20"
                />
                <div className="flex items-center gap-1.5 px-2 py-1 bg-background rounded border border-border text-[10px] font-bold text-secondary/40">
                  <Command size={10} />
                  <span>K</span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item, i) => (
                      <button
                        key={`${item.type}-${item.name}`}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                          i === selectedIndex ? 'bg-primary/10 text-primary' : 'text-secondary/60 hover:bg-background/50'
                        }`}
                      >
                        <div className="flex items-center gap-4 text-left">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            item.type === 'function' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                          }`}>
                            {item.type === 'function' ? <Zap size={18} /> : <Activity size={18} />}
                          </div>
                          <div>
                            <div className="font-bold font-mono">{item.name}</div>
                            <div className="text-xs opacity-60 line-clamp-1">{item.description}</div>
                          </div>
                        </div>
                        {i === selectedIndex && (
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span>Open</span>
                            <ArrowRight size={14} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-secondary/30">
                    No results for &quot;{query}&quot;
                  </div>
                )}
              </div>

              <div className="px-6 py-3 border-t border-border/50 bg-background/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-secondary/30">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-background rounded border border-border">↑↓</span>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-background rounded border border-border">Enter</span>
                    <span>Select</span>
                  </div>
                </div>
                <div>ZBR Command Palette</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
