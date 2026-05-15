import Footer from "@/components/Footer";
import { Mail, MessageSquare, Twitter, Github } from 'lucide-react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZBR | Support",
};

export default function Contact() {
  return (
    <main className="min-h-screen selection:bg-primary/30 pt-32">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white font-['Hubot-Sans']">
          Contact & Support
        </h1>
        <p className="text-secondary/60 text-lg mb-16 max-w-2xl">
          Have questions about ZBR? Whether you need help with your code or want to report a bug, we&apos;re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="mailto:zubariel@gmail.com" className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all">
            <Mail className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-secondary/40 text-sm">Direct support for technical issues and inquiries.</p>
            <span className="text-primary text-sm mt-4 block font-medium">zubariel@gmail.com</span>
          </a>

          <a href="#" className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all">
            <MessageSquare className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Community Discord</h3>
            <p className="text-secondary/40 text-sm">Join our community to get help from other developers.</p>
            <span className="text-primary text-sm mt-4 block font-medium">Join Discord</span>
          </a>

          <a href="https://github.com/zbrlang/zbr/issues" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all">
            <Github className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">GitHub Issues</h3>
            <p className="text-secondary/40 text-sm">Found a bug? Report it on our GitHub repository.</p>
            <span className="text-primary text-sm mt-4 block font-medium">Open Issue</span>
          </a>

          <a href="#" className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all">
            <Twitter className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Twitter / X</h3>
            <p className="text-secondary/40 text-sm">Follow us for the latest updates and announcements.</p>
            <span className="text-primary text-sm mt-4 block font-medium">@zbrlang</span>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
