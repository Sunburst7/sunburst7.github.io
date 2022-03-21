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
        heme: '/',
        navbar: [
                { text: '首页', link: '/' },
                { text: '学习笔记', link: '/note/'},
                { text: 'Scene-UI', link: '/scene-ui/', 
                    children: [
                        { text: '说明文档', link: '/scene-ui/' },
                        { text: '组件源码', link: '/scene-code/1-button.md' },
                    ],
                },
                { 
                    text: '成员github', 
                    children: [
                        { text: 'Sunburst7', link: 'https://github.com/Sunburst7' },
                        { text: 'skr305', link: 'https://github.com/skr305' },
                        { text: 'ahhweb', link: 'https://github.com/ahhweb' },
                    ],
                }
        ],
        // 可折叠的侧边栏
        sidebar: {
            '/note/': [
                // {
                //     text: 'VuePress Reference',
                //     collapsible: true,
                //     children: ['/reference/cli.md', '/reference/config.md'],
                // },
                // {
                //     text: 'Bundlers Reference',
                //     collapsible: true,
                //     children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
                // },
            ],
            '/scene-ui/': [
                {
                    text: '基础组件',
                    collapsible: true,
                    children: [
                        '/scene-ui/basic/button.md',
                        '/scene-ui/basic/radio.md',
                        '/scene-ui/basic/number-input.md', 
                    ],
                },
                {
                    text: '编译框架',
                    collapsible: true,
                    children: ['/scene-ui/frame/vue-generator.md'],
                },
            ],
            '/scene-code/': [
                '/scene-code/1-button.md',
                '/scene-code/2-radio.md',
                '/scene-code/3-number-input.md',
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