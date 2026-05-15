'use client';

import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen selection:bg-primary/30 pt-32">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white font-['Hubot-Sans']">
          Terms of Service
        </h1>
        <p className="text-secondary/60 text-lg mb-12">Last updated: May 15, 2026</p>

        <div className="prose prose-invert prose-blue max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary/60 leading-relaxed">
              By accessing or using ZBR, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. ZBR is a domain-specific language and toolset provided &quot;as is&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR is typically distributed under open-source licenses (e.g., MIT). Your use of the software is governed by the specific license associated with the ZBR repository.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p className="text-secondary/60 leading-relaxed">
              The materials on ZBR&apos;s website and software are provided on an &apos;as is&apos; basis. ZBR makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
            <p className="text-secondary/60 leading-relaxed">
              In no event shall ZBR or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use ZBR.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
