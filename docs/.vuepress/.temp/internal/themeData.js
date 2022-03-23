export const themeData = {
  "logo": "/blog.png",
  "heme": "/",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "学习笔记",
      "link": "/note/"
    },
    {
      "text": "Scene-UI",
      "link": "/scene-ui/",
      "children": [
        {
          "text": "说明文档",
          "link": "/scene-ui/"
        },
        {
          "text": "组件源码",
          "link": "/scene-code/1-button.md"
        }
      ]
    },
    {
      "text": "链接",
      "children": [
        {
          "text": "成员github",
          "children": [
            {
              "text": "Sunburst7",
              "link": "https://github.com/Sunburst7"
            },
            {
              "text": "skr305",
              "link": "https://github.com/skr305"
            },
            {
              "text": "ahhweb",
              "link": "https://github.com/ahhweb"
            }
          ]
        },
        {
          "text": "官方文档",
          "children": []
        }
      ]
    }
  ],
  "sidebar": {
    "/note/": [],
    "/scene-ui/": [
      {
        "text": "基础组件",
        "collapsible": true,
        "children": [
          "/scene-ui/basic/button.md",
          "/scene-ui/basic/link.md"
        ]
      },
      {
        "text": "表单组件",
        "collapsible": true,
        "children": [
          "/scene-ui/form/radio.md",
          "/scene-ui/form/number-input.md"
        ]
      },
      {
        "text": "编译框架",
        "collapsible": true,
        "children": [
          "/scene-ui/frame/vue-generator.md"
        ]
      }
    ],
    "/scene-code/": [
      "/scene-code/1-button.md",
      "/scene-code/2-radio.md",
      "/scene-code/3-number-input.md"
    ]
  },
  "plugins": [
    [
      "@vuepress/register-components",
      {
        "componentsDir": "E:/my_git/my-blog/docs/.vuepress/components"
      }
    ],
    [
      "@vuepress/docsearch",
      {
        "apiKey": "f13e2eebec8dabf08c32343ce8b66671",
        "indexName": "Blog",
        "locales": {
          "/": {
            "placeholder": "Search Documentation",
            "translations": {
              "button": {
                "buttonText": "Search Documentation"
              }
            }
          },
          "/zh/": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档"
              }
            }
          }
        }
      }
    ]
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
