import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ZBR Documentation</span>,
  project: {
    link: 'https://github.com/zbrlang/zbr',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Official documentation for ZBR, a high-performance Discord bot framework built with Rust." />
      <meta property="og:title" content="ZBR Documentation" />
      <meta property="og:description" content="Master the ZBR DSL with our comprehensive function and trigger references." />
      <meta property="og:image" content="/images/ZBR_logo.png" />
      <link rel="icon" type="image/png" href="/images/ZBR_logo.png" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/zbrlang/zbr-website/tree/main/docs',
  footer: {
    content: 'ZBRLang © 2026',
  }
}

export default config
