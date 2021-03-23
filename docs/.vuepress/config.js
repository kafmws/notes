const versioning = require('./versioning.js')

module.exports = {
  title: 'kafm\'s notebook',
  description: 'Learn notes',
  head: [ //<head>
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.jsdelivr.net/gh/kafmws/pictures/notes/宫内莲华2.jpg',
      },
    ], // customed favicon
    ['meta', {
      name: 'keywords',
      content: 'kafm的个人网站'
    }]
  ],

  base: '/',
  markdown: {
    lineNumbers: true,
  },
  theme: 'default-prefers-color-scheme',
  repo: 'kafmws/kafmws.github.io',
  repoLabel: 'Github',
  themeConfig: {
    docsDir: 'docs/',
    versions: {
      latest: versioning.versions.latest,
      selected: versioning.versions.latest,
      all: versioning.versions.all
    },
    nav: [
      // navigation bar
      {
        text: 'Notes',
        items: [{
            text: 'Course Notes',
            link: '/Cousre/The-Missing-Semester/ch0.html',
          },
          {
            text: 'Practice Notes',
            link: '/Pratice/',
          },
          {
            text: 'Other Notes',
            link: '/Other/Build-a-personal-website/use%20jsDelivr.html',
          },
        ],
      },
      {
        text: 'About',
        items: [{
            text: 'Home',
            link: 'https://kafmws.github.io',
          },
          {
            text: 'Blog',
            link: 'https://kafmws.github.io/blog',
          },
          {
            text: 'WeChat',
            link: 'https://kafmws.github.io/wechat-official-account',
          },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/kafmws',
      },
    ],

    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
    logo: 'https://cdn.jsdelivr.net/gh/kafmws/pictures/notes/kafm-text.png',
    smoothScroll: true,
    sidebar: {
      '/Course/': [{
        title: '🧰 The Missing Semster',
        children: [
          'The-Missing-Semester/ch0',
          'The-Missing-Semester/ch1',
        ]
      }, ],

      '/Other/': [{
          title: '🧰 Build a personal website',
          children: [
            'Build-a-personal-website/use%20jsDelivr',
          ]
        },
        {
          title: '📔 简明Git教程',
          children: [
            'Brief-Git/basical%20usage',
          ]
        },
      ],
    },
    sidebarDepth: 1,
  },
  plugins: [
    ['vuepress-plugin-container', {
      type: 'callout',
      before: info => `<div class="callout"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['vuepress-plugin-container', {
      type: 'tree',
      before: `<pre class="tree"><code>`,
      after: `</code></pre>`
    }],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-mathjax'],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-144595390-1'
      }
    ],
    ['@vuepress/medium-zoom'],
    ['@markspec/vuepress-plugin-footnote']
  ]
};