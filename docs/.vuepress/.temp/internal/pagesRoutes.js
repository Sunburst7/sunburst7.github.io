import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-15054f24","/note/",{"title":""},["/note/index.html","/note/README.md"]],
  ["v-20a55da0","/note/course-notes/Web%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86.html",{"title":"Web数据管理"},["/note/course-notes/Web数据管理.html","/note/course-notes/Web%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86","/note/course-notes/Web数据管理.md","/note/course-notes/Web%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86.md"]],
  ["v-19cf9e3a","/note/course-notes/%E8%BD%AF%E4%BB%B6%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86.html",{"title":"软件项目管理"},["/note/course-notes/软件项目管理.html","/note/course-notes/%E8%BD%AF%E4%BB%B6%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86","/note/course-notes/软件项目管理.md","/note/course-notes/%E8%BD%AF%E4%BB%B6%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86.md"]],
  ["v-65768081","/scene-ui/",{"title":"Scene-UI:A simple ui-component-lib with simple style"},["/scene-ui/index.html","/scene-ui/README.md"]],
  ["v-7962711f","/scene-code/button.html",{"title":"button"},["/scene-code/button","/scene-code/button.md"]],
  ["v-3ba28601","/scene-code/card.html",{"title":"card"},["/scene-code/card","/scene-code/card.md"]],
  ["v-76fff476","/scene-code/datetime.html",{"title":"datetime"},["/scene-code/datetime","/scene-code/datetime.md"]],
  ["v-38aa0e6e","/scene-code/dialog.html",{"title":"dialog"},["/scene-code/dialog","/scene-code/dialog.md"]],
  ["v-11458390","/scene-code/icon.html",{"title":"icon"},["/scene-code/icon","/scene-code/icon.md"]],
  ["v-ae42d7e8","/scene-code/info-panel.html",{"title":"info-panel"},["/scene-code/info-panel","/scene-code/info-panel.md"]],
  ["v-bcb6afd2","/scene-code/input.html",{"title":"input"},["/scene-code/input","/scene-code/input.md"]],
  ["v-2d265952","/scene-code/link.html",{"title":"link"},["/scene-code/link","/scene-code/link.md"]],
  ["v-0b8c23e5","/scene-code/loading.html",{"title":"loading"},["/scene-code/loading","/scene-code/loading.md"]],
  ["v-7122ae8b","/scene-code/number-input.html",{"title":"number-input"},["/scene-code/number-input","/scene-code/number-input.md"]],
  ["v-4edee286","/scene-code/radio.html",{"title":"radio"},["/scene-code/radio","/scene-code/radio.md"]],
  ["v-f6c4218a","/scene-code/scrollbar.html",{"title":"scrollbar"},["/scene-code/scrollbar","/scene-code/scrollbar.md"]],
  ["v-21cf1cd6","/scene-code/select.html",{"title":"select"},["/scene-code/select","/scene-code/select.md"]],
  ["v-19a87817","/scene-code/textarea.html",{"title":"textarea"},["/scene-code/textarea","/scene-code/textarea.md"]],
  ["v-215f11ba","/note/react/1-jsx.html",{"title":"1.JSX学习与深入"},["/note/react/1-jsx","/note/react/1-jsx.md"]],
  ["v-1d3cc2d6","/note/react/2-%E6%B8%B2%E6%9F%93%E5%85%83%E7%B4%A0.html",{"title":"2.渲染元素(createRoot与render)"},["/note/react/2-渲染元素.html","/note/react/2-%E6%B8%B2%E6%9F%93%E5%85%83%E7%B4%A0","/note/react/2-渲染元素.md","/note/react/2-%E6%B8%B2%E6%9F%93%E5%85%83%E7%B4%A0.md"]],
  ["v-4c5c31b6","/note/react/3-%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",{"title":"3.组件与生命周期"},["/note/react/3-组件与生命周期.html","/note/react/3-%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F","/note/react/3-组件与生命周期.md","/note/react/3-%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md"]],
  ["v-b3178a0e","/note/react/4-%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A.html",{"title":"4.绑定事件"},["/note/react/4-事件绑定.html","/note/react/4-%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A","/note/react/4-事件绑定.md","/note/react/4-%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A.md"]],
  ["v-09639625","/scene-ui/basic/button.html",{"title":"Button 按钮"},["/scene-ui/basic/button","/scene-ui/basic/button.md"]],
  ["v-7d953487","/scene-ui/basic/card.html",{"title":"Card 卡片"},["/scene-ui/basic/card","/scene-ui/basic/card.md"]],
  ["v-45c2a25f","/scene-ui/basic/checkbox-button.html",{"title":"CheckboxButton 选择按钮"},["/scene-ui/basic/checkbox-button","/scene-ui/basic/checkbox-button.md"]],
  ["v-15a39942","/scene-ui/basic/checkbox-group.html",{"title":"CheckboxGroup 组件"},["/scene-ui/basic/checkbox-group","/scene-ui/basic/checkbox-group.md"]],
  ["v-2d537cb4","/scene-ui/basic/checkbox.html",{"title":"Checkbox 选择器"},["/scene-ui/basic/checkbox","/scene-ui/basic/checkbox.md"]],
  ["v-0b4beffc","/scene-ui/basic/datetime.html",{"title":"Datetime 日期时间选择器"},["/scene-ui/basic/datetime","/scene-ui/basic/datetime.md"]],
  ["v-73ac1dcf","/scene-ui/basic/dialog.html",{"title":"Dialog 对话框"},["/scene-ui/basic/dialog","/scene-ui/basic/dialog.md"]],
  ["v-394fecbe","/scene-ui/basic/icon.html",{"title":"Icon 图标"},["/scene-ui/basic/icon","/scene-ui/basic/icon.md"]],
  ["v-c3f06b5e","/scene-ui/basic/input.html",{"title":"Input 输入框"},["/scene-ui/basic/input","/scene-ui/basic/input.md"]],
  ["v-2b5f81dd","/scene-ui/basic/link.html",{"title":"Link 链接"},["/scene-ui/basic/link","/scene-ui/basic/link.md"]],
  ["v-7baf9f9f","/scene-ui/basic/loading.html",{"title":"Loading 加载"},["/scene-ui/basic/loading","/scene-ui/basic/loading.md"]],
  ["v-4a3ff098","/scene-ui/basic/message.html",{"title":"Message 消息"},["/scene-ui/basic/message","/scene-ui/basic/message.md"]],
  ["v-7f4d11de","/scene-ui/basic/number-input.html",{"title":"Number-Input 数字输入框"},["/scene-ui/basic/number-input","/scene-ui/basic/number-input.md"]],
  ["v-4b4204c0","/scene-ui/basic/radio.html",{"title":"Radio 单选框"},["/scene-ui/basic/radio","/scene-ui/basic/radio.md"]],
  ["v-79d16475","/scene-ui/basic/scrollbar.html",{"title":"Scrollbar 滚动条"},["/scene-ui/basic/scrollbar","/scene-ui/basic/scrollbar.md"]],
  ["v-7f19969b","/scene-ui/basic/select.html",{"title":"Select 选择器"},["/scene-ui/basic/select","/scene-ui/basic/select.md"]],
  ["v-a41718c6","/scene-ui/basic/textarea.html",{"title":"Textarea 文本域"},["/scene-ui/basic/textarea","/scene-ui/basic/textarea.md"]],
  ["v-25b41fc6","/scene-ui/scene/chat.html",{"title":"Chat 聊天框"},["/scene-ui/scene/chat","/scene-ui/scene/chat.md"]],
  ["v-38618e70","/scene-ui/scene/info-panel.html",{"title":"Info-Panel 信息板"},["/scene-ui/scene/info-panel","/scene-ui/scene/info-panel.md"]],
  ["v-31d0d6e6","/scene-ui/scene/login-reg.html",{"title":"Login Reg 登录注册"},["/scene-ui/scene/login-reg","/scene-ui/scene/login-reg.md"]],
  ["v-2fc9755a","/scene-ui/scene/payment-input.html",{"title":"PaymentInput 支付输入框"},["/scene-ui/scene/payment-input","/scene-ui/scene/payment-input.md"]],
  ["v-5e5cd636","/scene-ui/scene/search-panel.html",{"title":"SearchPanel 搜索面板"},["/scene-ui/scene/search-panel","/scene-ui/scene/search-panel.md"]],
  ["v-f19117c0","/scene-ui/scene/session-list.html",{"title":"SessionList 会话表"},["/scene-ui/scene/session-list","/scene-ui/scene/session-list.md"]],
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
