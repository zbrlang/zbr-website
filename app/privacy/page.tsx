import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy Policy for the ZBR framework, detailing data collection and storage practices.",
};

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
            <h2 className="text-2xl font-bold text-white mb-4">1. Data We Collect</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR collects and stores data necessary to provide its scripting and automation services:
            </p>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>Discord Identifiers</strong>: User IDs, Guild IDs, Channel IDs, and Role IDs.</li>
              <li><strong>Message Content</strong>: We process message content to detect script triggers. Content is only stored if explicitly saved by a script using our variable system.</li>
              <li><strong>Custom Variables</strong>: Any data an administrator or script developer chooses to store using ZBR functions (ZsetVar, ZsetUserVar, ZsetServerVar, ZsetChannelVar).</li>
              <li><strong>Cooldown Information</strong>: Timestamps of command usage to enforce rate limits.</li>
              <li><strong>Interaction Data</strong>: Data submitted through Discord components like Modals and Select Menus.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Data</h2>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>Service Execution</strong>: To run your custom scripts and respond to commands.</li>
              <li><strong>Persistence</strong>: To remember user settings, experience points, or any other custom data defined in your scripts.</li>
              <li><strong>Rate Limiting</strong>: To prevent abuse and manage bot performance.</li>
              <li><strong>Moderation</strong>: To execute moderation actions as directed by server administrators.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage and Security</h2>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>SQLite Database</strong>: All persistent data is stored in a local SQLite database.</li>
              <li><strong>Encryption</strong>: We recommend securing the environment where the bot is hosted, as the database itself is stored in plain text by default.</li>
              <li><strong>Data Retention</strong>: Data in variables is stored until explicitly deleted by a script (e.g., ZresetUserVar) or until the database is cleared.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Sharing</h2>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>Discord</strong>: Data is shared with Discord as part of standard bot operations (sending messages, managing roles).</li>
              <li><strong>External APIs</strong>: If a script uses ZBR&apos;s HTTP functions (ZhttpPost, ZhttpGet, etc.), data may be sent to external URLs specified in the script. Users should be aware of where their scripts are sending data.</li>
              <li><strong>No Sale of Data</strong>: We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Rights and Control</h2>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>Access and Deletion</strong>: Users can request the deletion of their data from a server administrator. Administrators can use ZBR functions to clear stored user data.</li>
              <li><strong>Opt-Out</strong>: Users can stop interacting with the bot or leave the server to prevent further data collection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Compliance with Discord</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR complies with the Discord Developer Policy and Terms of Service. We do not collect more data than is necessary for the bot&apos;s functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p className="text-secondary/60 leading-relaxed">
              For questions regarding this policy or data deletion requests, please contact the bot host/administrator of your specific server.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
