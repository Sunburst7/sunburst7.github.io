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
                { text: 'Scene-UI', link: '/scene-ui/' },
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
                    text: '组件编写',
                    collapsible: true,
                    children: ['/scene-ui/components/number-input.md', ],
                },
                {
                    text: '编译框架',
                    collapsible: true,
                    children: ['/scene-ui/frame/vue-generator.md'],
                },
            ],
        },
    },
  }