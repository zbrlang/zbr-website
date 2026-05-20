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
      <meta name="author" content="ZBRLang" />
      <meta name="description" content="Official documentation for ZBR, a high-performance Discord scripting language built with Rust." />
      <meta property="og:title" content="ZBR Documentation" />
      <meta property="og:description" content="Official documentation for ZBR, a high-performance Discord scripting language built with Rust." />
      <meta property="og:image" content="/images/ZBR_logo.png?v=1" />
      <meta property="og:url" content="https://zbr-website.vercel.app/docs" />
      <meta property="og:site_name" content="ZBR" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="apple-mobile-web-app-title" content="ZBR Documentation" />
      <link rel="icon" type="image/png" href="/images/ZBR_logo.png?v=1" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/zbrlang/zbr-website/',
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://zbr-website.vercel.app/" target="_blank">ZBRLang</a>.
      </span>
    )
  }
}

export default config