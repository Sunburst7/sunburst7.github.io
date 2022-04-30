import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-15054f24","/note/",{"title":""},["/note/index.html","/note/README.md"]],
  ["v-1368222a","/scene-code/--number-input.html",{"title":"3.数字输入框组件"},["/scene-code/--number-input","/scene-code/--number-input.md"]],
  ["v-3db34e26","/scene-code/--radio.html",{"title":"2.单选框组件"},["/scene-code/--radio","/scene-code/--radio.md"]],
  ["v-7962711f","/scene-code/button.html",{"title":"button"},["/scene-code/button","/scene-code/button.md"]],
  ["v-3ba28601","/scene-code/card.html",{"title":"card"},["/scene-code/card","/scene-code/card.md"]],
  ["v-11458390","/scene-code/icon.html",{"title":"icon"},["/scene-code/icon","/scene-code/icon.md"]],
  ["v-2d265952","/scene-code/link.html",{"title":"link"},["/scene-code/link","/scene-code/link.md"]],
  ["v-21cf1cd6","/scene-code/select.html",{"title":"select"},["/scene-code/select","/scene-code/select.md"]],
  ["v-65768081","/scene-ui/",{"title":"Scene-UI组件库"},["/scene-ui/index.html","/scene-ui/README.md"]],
  ["v-76bd8bc4","/note/algorithm/",{"title":""},["/note/algorithm/index.html","/note/algorithm/README.md"]],
  ["v-52f2adf1","/scene-ui/basic/--number-input.html",{"title":"Number Input 数字输入框"},["/scene-ui/basic/--number-input","/scene-ui/basic/--number-input.md"]],
  ["v-a4526c40","/scene-ui/basic/--radio.html",{"title":"Radio 单选框"},["/scene-ui/basic/--radio","/scene-ui/basic/--radio.md"]],
  ["v-09639625","/scene-ui/basic/button.html",{"title":"Button 按钮"},["/scene-ui/basic/button","/scene-ui/basic/button.md"]],
  ["v-7d953487","/scene-ui/basic/card.html",{"title":"Card 卡片"},["/scene-ui/basic/card","/scene-ui/basic/card.md"]],
  ["v-394fecbe","/scene-ui/basic/icon.html",{"title":"Icon 图标"},["/scene-ui/basic/icon","/scene-ui/basic/icon.md"]],
  ["v-2b5f81dd","/scene-ui/basic/link.html",{"title":"Link 链接"},["/scene-ui/basic/link","/scene-ui/basic/link.md"]],
  ["v-7f19969b","/scene-ui/basic/select.html",{"title":"Select 选择器"},["/scene-ui/basic/select","/scene-ui/basic/select.md"]],
  ["v-1048a65d","/scene-ui/basic/template.html",{"title":"xx xx"},["/scene-ui/basic/template","/scene-ui/basic/template.md"]],
  ["v-c9a6d320","/scene-ui/frame/vue-generator.html",{"title":"vue模板生成"},["/scene-ui/frame/vue-generator","/scene-ui/frame/vue-generator.md"]],
  ["v-31d0d6e6","/scene-ui/scene/login-reg.html",{"title":"Login Reg 组件"},["/scene-ui/scene/login-reg","/scene-ui/scene/login-reg.md"]],
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
