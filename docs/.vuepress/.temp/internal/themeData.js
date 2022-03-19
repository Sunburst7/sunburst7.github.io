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
      "link": "/scene-ui/"
    },
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
    }
  ],
  "sidebar": {
    "/note/": [],
    "/scene-ui/": [
      {
        "text": "组件编写",
        "collapsible": true,
        "children": [
          "/scene-ui/components/number-input.md"
        ]
      },
      {
        "text": "编译框架",
        "collapsible": true,
        "children": [
          "/scene-ui/frame/vue-generator.md"
        ]
      }
    ]
  },
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
