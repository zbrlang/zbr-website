import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.05em' }}>ZBR</span>
      <span style={{ opacity: 0.5, fontWeight: 400 }}>Documentation</span>
    </div>
  ),
  project: {
    link: 'https://github.com/zbrlang/zbr',
  },
  head: (
    <>
      <title>ZBR Documentation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Official documentation for ZBR, a high-performance Discord bot framework built with Rust." />
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="ZBR Documentation" />
      <meta property="og:description" content="Master the ZBR DSL with our comprehensive function and trigger references." />
      <meta property="og:image" content="/images/ZBR_logo.png?v=1" />
      <meta name="apple-mobile-web-app-title" content="ZBR Docs" />
      <link rel="icon" type="image/png" href="/images/ZBR_logo.png?v=1" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/zbrlang/zbr-website/tree/main',
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://zbr-website.vercel.app/" target="_blank">
          ZBRLang
        </a>
        .
      </span>
    )
  }
}

export default config
