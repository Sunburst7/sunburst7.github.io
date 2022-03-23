import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-15054f24","/note/",{"title":""},["/note/index.html","/note/README.md"]],
  ["v-1f279383","/scene-code/1-button.html",{"title":"1.按钮组件"},["/scene-code/1-button","/scene-code/1-button.md"]],
  ["v-642b8901","/scene-code/2-radio.html",{"title":"2.单选框组件"},["/scene-code/2-radio","/scene-code/2-radio.md"]],
  ["v-6f6b8d1e","/scene-code/3-number-input.html",{"title":"3.数字输入框组件"},["/scene-code/3-number-input","/scene-code/3-number-input.md"]],
  ["v-65768081","/scene-ui/",{"title":"Scene-UI组件库"},["/scene-ui/index.html","/scene-ui/README.md"]],
  ["v-09639625","/scene-ui/basic/button.html",{"title":"Button 按钮"},["/scene-ui/basic/button","/scene-ui/basic/button.md"]],
  ["v-2b5f81dd","/scene-ui/basic/link.html",{"title":"Link 链接"},["/scene-ui/basic/link","/scene-ui/basic/link.md"]],
  ["v-58ff9cee","/scene-ui/form/number-input.html",{"title":"Number Input 数字输入框"},["/scene-ui/form/number-input","/scene-ui/form/number-input.md"]],
  ["v-65f3a148","/scene-ui/form/radio.html",{"title":"Radio 单选框"},["/scene-ui/form/radio","/scene-ui/form/radio.md"]],
  ["v-c9a6d320","/scene-ui/frame/vue-generator.html",{"title":"vue模板生成"},["/scene-ui/frame/vue-generator","/scene-ui/frame/vue-generator.md"]],
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
