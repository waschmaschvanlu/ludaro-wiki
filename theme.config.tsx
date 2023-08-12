import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ludaro-Wiki</span>,
  titleTemplate: '%s – Ludaro-Wiki(ENG)',
  project: {
    link: 'https://github.com/waschmaschvanlu/ludaro-wiki-nextra-english/tree/eng',
  },
  docsRepositoryBase: 'https://github.com/waschmaschvanlu/ludaro-wiki-nextra-english/tree/eng',
  footer: {
    text: 'Nextra Ludaro-Wiki',
  },
  faviconGlyph: '📚',
}

export default config
