import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-15054f24","/note/",{"title":""},["/note/index.html","/note/README.md"]],
  ["v-65768081","/scene-ui/",{"title":""},["/scene-ui/index.html","/scene-ui/README.md"]],
  ["v-24aa629b","/scene-ui/components/number-input.html",{"title":"数字输入框 number-input"},["/scene-ui/components/number-input","/scene-ui/components/number-input.md"]],
  ["v-c9a6d320","/scene-ui/frame/vue-generator.html",{"title":""},["/scene-ui/frame/vue-generator","/scene-ui/frame/vue-generator.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
