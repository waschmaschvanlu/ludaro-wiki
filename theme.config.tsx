import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo:    <>
  <img width="24" height="24" viewBox="0 0 24 24" src="poro.png"></img>
  <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
   Ludaro-Wiki
  </span>
</>,
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
