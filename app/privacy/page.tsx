'use client';

import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen selection:bg-primary/30 pt-32">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white font-['Hubot-Sans']">
          Privacy Policy
        </h1>
        <p className="text-secondary/60 text-lg mb-12">Last updated: May 15, 2026</p>

        <div className="prose prose-invert prose-blue max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR itself is a programming language and does not collect personal data. However, our website may collect basic analytical data to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
            <p className="text-secondary/60 leading-relaxed">
              Any data collected is used solely for the purpose of improving ZBR and its documentation. We do not sell or share your personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
            <p className="text-secondary/60 leading-relaxed">
              We may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p className="text-secondary/60 leading-relaxed">
              If there are any questions regarding this privacy policy, you may contact us using the information on our contact page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
