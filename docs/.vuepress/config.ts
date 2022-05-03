const { path } = require('@vuepress/utils')

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Sunburst7的博客',
    description: '记录自己的学习过程',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/blog.png',
        home: '/',
        search: true,
        searchMaxSuggestions: 10,
        navbar: [
                { text: '首页', link: '/' },
                { text: '学习笔记', link: '/note/',
                    children: [
                      { text: '目录', link: '/note/' },
                      { text: '算法', link: '/note/algorithm/' },
                  ],
                },
                { text: 'Scene-UI', link: '/scene-ui/', 
                    children: [
                        { text: '说明文档', link: '/scene-ui/' },
                        { text: '组件源码', link: '/scene-code/button.md' },
                    ],
                },
                { 
                    text: '链接', 
                    children: [
                      { 
                        text: '成员github',
                        children:[
                          { text: 'Sunburst7', link: 'https://github.com/Sunburst7' },
                          { text: 'skr305', link: 'https://github.com/skr305' },
                          { text: 'ahhweb', link: 'https://github.com/ahhweb' },
                        ]
                      },
                      { 
                        text: '官方文档',
                        children:[]
                      },
                    ],
                }
        ],
        // 可折叠的侧边栏
        sidebar: {
            '/note/': [],
            '/scene-ui/': [
                {
                    text: '基础组件',
                    collapsible: true,
                    children: [
                        '/scene-ui/basic/button.md',
                        '/scene-ui/basic/card.md',
                        '/scene-ui/basic/datetime.md',
                        '/scene-ui/basic/dialog.md',
                        '/scene-ui/basic/icon.md',
                        '/scene-ui/basic/input.md',
                        '/scene-ui/basic/link.md',
                        '/scene-ui/basic/loading.md',
                        '/scene-ui/basic/number-input.md',
                        '/scene-ui/basic/radio.md',
                        '/scene-ui/basic/select.md',
                        '/scene-ui/basic/scrollbar.md',
                        '/scene-ui/basic/textarea.md',
                    ],
                },
                {
                  text: '场景组件',
                  collapsible: true,
                  children: [
                    '/scene-ui/scene/info-panel.md',
                    '/scene-ui/scene/login-reg.md',
                  ],
                },
                // {
                //     text: '编译框架',
                //     collapsible: true,
                //     children: ['/scene-ui/frame/vue-generator.md'],
                // },
            ],
            '/scene-code/': [
                '/scene-code/button.md',
                '/scene-code/card.md',
                '/scene-code/datetime.md',
                '/scene-code/dialog.md',
                '/scene-code/icon.md',
                '/scene-code/input.md',
                '/scene-code/link.md',
                '/scene-code/loading.md',
                '/scene-code/number-input.md',
                '/scene-code/radio.md',
                '/scene-code/scrollbar.md',
                '/scene-code/select.md',
                '/scene-code/textarea.md',
                '/scene-code/info-panel.md'
            ],
        },
        plugins: [
            [
              '@vuepress/register-components',
              {
                componentsDir: path.resolve(__dirname, './components'),
              },
            ],
            [
                '@vuepress/docsearch',
                {
                  apiKey: 'f13e2eebec8dabf08c32343ce8b66671',
                  indexName: 'Blog',
                  locales: {
                    '/': {
                      placeholder: 'Search Documentation',
                      translations: {
                        button: {
                          buttonText: 'Search Documentation',
                        },
                      },
                    },
                    '/zh/': {
                      placeholder: '搜索文档',
                      translations: {
                        button: {
                          buttonText: '搜索文档',
                        },
                      },
                    },
                  },
                },
              ],
        ],
    },
  }