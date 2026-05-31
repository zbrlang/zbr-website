'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Database, ArrowRight, Play, Loader2, X, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from "@/components/Footer";

const endpoints = [
  {
    path: '/functions_list',
    source: 'functions.json',
    description: 'Returns the full list of available ZBR functions.',
    method: 'GET'
  },
  {
    path: '/functions/{name}',
    source: 'functions.json',
    description: 'Returns a specific function by name (e.g., /api/functions/Zabs).',
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
    path: '/triggers/{name}',
    source: 'triggers.json',
    description: 'Returns a specific trigger by name (e.g., /api/triggers/onBanAdd).',
    method: 'GET'
  },
  {
    path: '/triggers_tag_list',
    source: 'triggers_tag.json',
    description: 'Returns trigger metadata organized by tags.',
    method: 'GET'
  },
  {
    path: '/stats',
    source: 'Dynamic',
    description: 'Returns total function, category, trigger counts, and ZBR version.',
    method: 'GET'
  }
];

function EndpointCard({ endpoint, index }: { endpoint: typeof endpoints[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [param, setParam] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const hasParam = endpoint.path.includes('{name}');

  const handleTry = async () => {
    setLoading(true);
    try {
      let finalPath = endpoint.path;
      if (hasParam) {
        finalPath = finalPath.replace('{name}', param || (endpoint.path.includes('functions') ? 'Zabs' : 'onMessage'));
      }
      const res = await fetch(`/api${finalPath}`);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: 'Failed to fetch data' });
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white/[0.02] border rounded-2xl transition-all duration-300 max-w-full overflow-hidden ${
        isExpanded ? 'border-primary/50 bg-white/[0.04]' : 'border-white/5 hover:border-primary/30 hover:bg-white/[0.04]'
      }`}
    >
      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="shrink-0 px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
              {endpoint.method}
            </span>
            <code className="text-foreground font-mono text-lg group-hover:text-primary transition-colors truncate">
              {endpoint.path}
            </code>
          </div>
          <p className="text-secondary/40 text-sm line-clamp-2">
            {endpoint.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-secondary/60 hover:text-primary hover:border-primary/50 transition-all flex items-center gap-2"
          >
            {isExpanded ? 'Close Sandbox' : 'Try it Out'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <Link 
            href={`/api${endpoint.path}`}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary/20 hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5"
          >
            <div className="p-6 bg-black/20 space-y-4 max-w-full">
              {hasParam && (
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest">Parameter: name</label>
                  <input 
                    type="text" 
                    value={param}
                    onChange={(e) => setParam(e.target.value)}
                    placeholder={endpoint.path.includes('functions') ? 'e.g. Zabs' : 'e.g. onMessage'}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground outline-none focus:border-primary/50 transition-all w-full"
                  />
                </div>
              )}

              <button 
                onClick={handleTry}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-primary text-background font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
                Run Request
              </button>

              {response && (
                <div className="space-y-2 min-w-0 max-w-full">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest">Response Body</label>
                    <button onClick={() => setResponse(null)} className="text-secondary/20 hover:text-white transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="w-full min-w-0">
                    <pre className="p-4 bg-black/40 border border-white/5 rounded-xl text-xs font-mono text-primary/80 overflow-x-auto max-h-64 scrollbar-thin scrollbar-thumb-white/10 whitespace-pre">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ApiContent() {
  return (
    <div className="min-h-screen text-foreground font-['Hubot-Sans'] selection:bg-primary/30 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
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
            The Public API
          </h1>
          <p className="text-secondary/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          Public access to ZBR function and trigger definitions used across the documentation, CLI, and developer tooling.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest">Base URL</span>
            <code className="px-2 py-1 bg-white/[0.03] border border-white/[0.08] rounded text-primary text-xs font-mono truncate">
              https://zbrlang.vercel.app/api
            </code>
          </div>
        </motion.div>

        <div className="grid gap-4 w-full">
          {endpoints.map((endpoint, i) => (
            <EndpointCard key={endpoint.path} endpoint={endpoint} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
