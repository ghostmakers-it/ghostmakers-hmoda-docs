import { defineConfig } from 'vuepress/config';

export default defineConfig({
  title: 'Ghost Makers - HModa - Documentation',
  description: 'The documentation of the Ghost Makers HModa project',
  base: '/ghostmakers-hmoda-docs/',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'ghostmakers-it/ghostmakers-hmoda-docs',
    editLinks: true,
    docsBranch: 'main',
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'General',
        link: '/general/',
      },
      {
        text: 'The website',
        link: '/the-website/'
      },
      {
        text: 'Infrastructure',
        link: '/infrastructure/'
      },
      {
        text: 'Web App',
        link: '/web-app/'
      },
      {
        text: 'Rest APIs',
        link: '/rest-apis/'
      },
      {
        text: 'SDK',
        link: '/sdk/'
      }
    ],
    sidebar: {
      '/general/': [
        {
          title: 'General', 
          collapsable: false,
          children: [
            '',
            'infrastructure',
            'history',
            'people',
            'performance',
            'improvements'
          ]
        }
      ],
    }
  },

  plugins: {
    '@vuepress/plugin-back-to-top': {},
    '@vuepress/active-header-links': {},
    '@vuepress/plugin-medium-zoom': {},
    '@vuepress/pwa': {
      serviceWorker: true
    },
    'fulltext-search': {}
  }
});