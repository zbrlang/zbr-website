export default function CodeBlock() {
  const code = `// ZBR Rank Command Example
#trigger !rank 
#name Rank Command 
#type prefix 
 
Zvar{xp;ZgetUserVar{xp}} 
Zvar{level;ZgetUserVar{level}} 
 
Ztitle{Zusername{}'s Rank} 
Zdescription{Level: Zvar{level} 
XP: Zvar{xp}} 
Zcolor{#5865F2} 
ZaddField{Server Rank;#Zvar{rank};true}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-panel rounded-xl overflow-hidden shadow-2xl">
        <div className="px-6 py-3 border-b border-border/50 flex items-center justify-between bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">rank.zbr</span>
        </div>
        <div className="p-8 overflow-x-auto text-left bg-neutral/30">
          <pre className="text-sm md:text-base font-mono leading-relaxed">
            <code className="text-foreground/80">
              {code.split('\n').map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell pr-6 text-secondary/20 select-none text-right w-8">{i + 1}</span>
                  <span className="table-cell whitespace-pre">
                    {line.split(/(#\w+|Z\w+|{|}|\/\/.*|#\w+)/).map((part, j) => {
                      if (part.startsWith('//')) return <span key={j} className="text-secondary/30">{part}</span>;
                      if (part.startsWith('#')) return <span key={j} className="text-primary font-semibold">{part}</span>;
                      if (part.startsWith('Z')) return <span key={j} className="text-[#9dc3f7] font-bold">{part}</span>;
                      if (part === '{' || part === '}') return <span key={j} className="text-white/40">{part}</span>;
                      return part;
                    })}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
