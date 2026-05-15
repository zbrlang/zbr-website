import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import DetailedReadme from "@/components/DetailedReadme";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Hero />
      <Features />
      <QuickStart />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Snippet</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Clean. Expressive. Powerful.</h2>
        <CodeBlock />
      </div>
      <div className="pt-48">
        <DetailedReadme />
      </div>
      <Footer />
    </main>
  );
}
