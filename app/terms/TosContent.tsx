'use client';

import Footer from "@/components/Footer";
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TosContent() {
  return (
    <main className="min-h-screen selection:bg-primary/30 pt-32">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-primary mb-6">
            <FileText size={24} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">ZBR Terms</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white font-['Hubot-Sans']">
            Terms of Service
          </h1>
          <p className="text-secondary/60 text-lg mb-12">Last updated: May 26, 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-blue max-w-none space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Description of Service</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR is a scripting engine and Discord bot framework that allows users to create custom automation and functionality using a specialized scripting language. The service includes the bot, its runtime environment, and associated command-loading capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Bot Permissions and Usage</h2>
            <p className="text-secondary/60 leading-relaxed">
              By inviting ZBR to your server, you acknowledge and grant the bot permissions to:
            </p>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li><strong>Read and Send Messages</strong>: Necessary for trigger detection and response.</li>
              <li><strong>Moderate Members</strong>: Including kicking, banning, and timing out users (via Zkick, Zban, Ztimeout).</li>
              <li><strong>Manage Roles</strong>: Creating, deleting, and assigning roles (via ZcreateRole, ZroleGrant).</li>
              <li><strong>Manage Channels</strong>: Creating and modifying channels (via ZcreateChannel, ZmodifyChannel).</li>
              <li><strong>Manage Server</strong>: Server-wide modifications including lockdown, welcome screen, and server settings (via ZserverModify, ZserverLockdown, ZeditWelcomeScreen).</li>
              <li><strong>Manage Automod</strong>: Creating, editing, and deleting automod rules (via ZautomodRuleCreate, ZautomodRuleEdit, ZautomodRuleDelete).</li>
              <li><strong>Manage Webhooks</strong>: Creating and deleting webhooks for advanced notifications.</li>
              <li><strong>Manage Voice</strong>: Controlling stage channel voice states, including suppressing and allowing speakers (via ZvoiceSuppress, ZvoiceRequestToSpeak).</li>
              <li><strong>Manage Soundboard</strong>: Uploading, editing, and deleting soundboard sounds (via ZsoundboardCreate, ZsoundboardEdit, ZsoundboardDelete).</li>
              <li><strong>Manage Polls</strong>: Creating and ending polls (via ZpollCreate, ZpollEnd).</li>
              <li><strong>Interact with Components</strong>: Handling buttons, select menus, and modals.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
            <p className="text-secondary/60 leading-relaxed">
              You agree not to use ZBR for:
            </p>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li>Any illegal activities or to violate any local, state, or international laws.</li>
              <li>Spamming, harassment, or spreading malicious software.</li>
              <li>Bypassing Discord&apos;s own Terms of Service or Developer Policy.</li>
              <li>Making excessive or abusive external HTTP requests using our scripting functions.</li>
              <li>Creating automod rules that discriminate against protected groups or violate Discord&apos;s community guidelines.</li>
              <li>Uploading prohibited content via sticker or soundboard functions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Scripting Responsibilities</h2>
            <p className="text-secondary/60 leading-relaxed">
              As ZBR is a scripting engine, the functionality of the bot is determined by the scripts provided by the user/admin. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-secondary/60 space-y-2 mt-2">
              <li>The content or consequences of scripts executed by the engine.</li>
              <li>Data loss or server damage resulting from poorly written or malicious scripts.</li>
              <li>Unexpected bot behavior due to script logic.</li>
              <li>The content of files uploaded via sticker or soundboard functions.</li>
              <li>The configuration or enforcement of automod rules created through the engine.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. External Communications</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR scripts have the capability to make external HTTP requests (ZhttpGet, ZhttpPost, etc.). The engine includes built-in SSRF protection that blocks requests to private, reserved, or known-dangerous IP addresses. You remain responsible for ensuring that your requests comply with the terms of the receiving services and do not transmit sensitive data insecurely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-secondary/60 leading-relaxed">
              ZBR is provided &quot;as is&quot; and &quot;as available&quot; without any warranties. In no event shall the developers be liable for any damages arising out of the use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
            <p className="text-secondary/60 leading-relaxed">
              We reserve the right to terminate access to the service for any user or server that violates these terms or Discord&apos;s policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
            <p className="text-secondary/60 leading-relaxed">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
