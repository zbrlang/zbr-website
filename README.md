# ZBR Website

The official website and documentation for **ZBR**, a high-performance scripting language and execution engine for Discord bots.

## Overview

ZBR is a Rust-based runtime that allows you to write Discord bot commands as plain text files using a concise, function-based syntax. It removes the boilerplate of traditional bot frameworks, providing a streamlined CLI to initialize, manage, and run your bot projects.

## Key Features

- Rust Core: Blazing fast execution and memory safety.
- Functional Syntax: Write complex logic using Z-functions (e.g., Ztitle{args}).
- Hot Reloading: Commands are reloaded instantly on file save without restarting the engine.
- Native Persistence: Built-in SQLite support for user, server, and global variables.
- Comprehensive Library: Over 400 built-in functions covering all aspects of Discord bot development.

## Project Structure

- app/: Next.js App Router for the main landing page and legal pages.
- pages/docs/: Documentation content powered by Nextra.
- context/: Documentation source data (functions, triggers, categories).
- scripts/: Automation scripts for documentation generation.
- components/: Shared UI components.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate documentation from context data:
   ```bash
   node scripts/generate-docs.mjs
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## License

The ZBR website and documentation are All Rights Reserved. The ZBR engine and CLI are licensed under the MIT License.
