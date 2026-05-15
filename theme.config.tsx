import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ZBR Documentation</span>,
  project: {
    link: 'https://github.com/zbrlang/zbr',
  },
  head: (
    <>
      <title>ZBR Documentation</title>
      <link rel="icon" type="image/png" href="/images/ZBR_logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ZBR Documentation" />
      <meta property="og:description" content="Official documentation for the ZBR DSL." />
    </>
  ),
  docsRepositoryBase: 'https://github.com/zbrlang/zbr-website/tree/main/docs',
  footer: {
    content: 'ZBRLang © 2026',
  }
}

export default config
