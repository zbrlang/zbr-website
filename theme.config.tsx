import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ZBR Documentation</span>,
  project: {
    link: 'https://github.com/zbrlang/zbr',
  },
  docsRepositoryBase: 'https://github.com/zbrlang/zbr-website/tree/main/docs',
  footer: {
    content: 'ZBR DSL © 2026',
  }
}

export default config
