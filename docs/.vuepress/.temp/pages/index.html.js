export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroText": "Sunburst7's Blog",
    "actions": [
      {
        "text": "快速了解",
        "link": "/note/",
        "type": "primary"
      },
      {
        "text": "Scene-UI",
        "link": "/scene-ui/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "JavaScript",
        "details": "深入学习JS有关内容"
      },
      {
        "title": "React",
        "details": "React学习笔记"
      },
      {
        "title": "Scene-UI",
        "details": "场景组件库与低代码开发平台"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647670250000,
    "contributors": [
      {
        "name": "sunburst7",
        "email": "1064658281@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
