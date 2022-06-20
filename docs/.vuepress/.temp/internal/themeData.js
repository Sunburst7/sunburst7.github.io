export const themeData = {
  "logo": "/blog.png",
  "home": "/",
  "search": true,
  "searchMaxSuggestions": 10,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "学习笔记",
      "link": "/note/",
      "children": [
        {
          "text": "目录",
          "link": "/note/"
        },
        {
          "text": "react基础",
          "link": "/note/react/1-jsx.md"
        },
        {
          "text": "课程笔记",
          "children": [
            {
              "text": "Web数据管理",
              "link": "/note/course-notes/Web数据管理.md"
            }
          ]
        }
      ]
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
          "link": "/scene-code/button.md"
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
    "/note/react/": [
      "/note/react/1-jsx.md",
      "/note/react/2-渲染元素.md",
      "/note/react/3-组件与生命周期.md",
      "/note/react/4-事件绑定.md"
    ],
    "/note/course-notes/": [
      "/note/course-notes/Web数据管理.md",
      "/note/course-notes/软件项目管理.md"
    ],
    "/scene-ui/": [
      {
        "text": "基础组件",
        "collapsible": true,
        "children": [
          "/scene-ui/basic/button.md",
          "/scene-ui/basic/card.md",
          "/scene-ui/basic/checkbox-button.md",
          "/scene-ui/basic/checkbox-group.md",
          "/scene-ui/basic/checkbox.md",
          "/scene-ui/basic/datetime.md",
          "/scene-ui/basic/dialog.md",
          "/scene-ui/basic/icon.md",
          "/scene-ui/basic/input.md",
          "/scene-ui/basic/link.md",
          "/scene-ui/basic/loading.md",
          "/scene-ui/basic/message.md",
          "/scene-ui/basic/number-input.md",
          "/scene-ui/basic/radio.md",
          "/scene-ui/basic/select.md",
          "/scene-ui/basic/scrollbar.md",
          "/scene-ui/basic/textarea.md"
        ]
      },
      {
        "text": "场景组件",
        "collapsible": true,
        "children": [
          "/scene-ui/scene/chat.md",
          "/scene-ui/scene/info-panel.md",
          "/scene-ui/scene/login-reg.md",
          "/scene-ui/scene/payment-input.md",
          "/scene-ui/scene/search-panel.md",
          "/scene-ui/scene/session-list.md"
        ]
      }
    ],
    "/scene-code/": [
      "/scene-code/button.md",
      "/scene-code/card.md",
      "/scene-code/datetime.md",
      "/scene-code/dialog.md",
      "/scene-code/icon.md",
      "/scene-code/input.md",
      "/scene-code/link.md",
      "/scene-code/loading.md",
      "/scene-code/number-input.md",
      "/scene-code/radio.md",
      "/scene-code/scrollbar.md",
      "/scene-code/select.md",
      "/scene-code/textarea.md",
      "/scene-code/info-panel.md"
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
