---
title: loading

---

loading组件的实现形式与之前的组件都有所不同，loading组件采用的是函数调用的方式触发，而且其内部编写的方式也与一般组件不同，不是以模板的方式构造组件而是通过[渲染函数](https://staging-cn.vuejs.org/guide/extras/render-function.html)的方式。挂载的实现主要依靠vue的`createApp()`API。

预定义的类型：

```typescript
import {App, VNode} from 'vue'

/**
 * loading 组件的props类型
 */
export type loadingProps = {
    target: VNode | string | HTMLElement //  Loading需要覆盖的 DOM 节点.可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入document.querySelector以获取到对应DOM节点
    fullScreen: boolean     // 是否占据整个屏幕
    text: string            // loading组件的文本提示
    onClose: Function       // loading组件关闭的回调函数
}

/**
 * loading组件的内置data类型
 */
export type loadingData = {
    target: VNode | string | HTMLElement 
    fullScreen: boolean 
    text: string            
    onClose: Function       
    loadingVM: App<Element>
    loadingMountElement: HTMLElement
    visible: boolean            // loading组件的可见性
    originalPosition: string,   // target原始的css position值
    originalOverflow: string    // target原始的css overflow值
}
```

因为loading组件会挂载到不同的地方，因此如果允许同时有多个loading组件渲染会引起界面混乱，采用设计模式中的单例模式限制loading组件的数量，这是通过SceneLoading全局变量暴漏的唯一方法`service`实现的：使用loading组件必须会导入核心的ts文件，在该文件中创建一个全局对象，当调用`SceneLoading.service(options: loadingProps)`时会判断改全局对象是否为null，只有是null时会创建新的loading实例，否则会返回已有的loading实例：

```typescript
// 单例模式
let loadingInstance = null;
/**
 * 创建一个loading服务
 * @param options loading的Props
 * @returns 返回一个loading组件实例
 */
function service(options: loadingProps = defaultLoadingProps){
    // 单例模式
    if(loadingInstance === null)
        loadingInstance = createLoadingComponent(options);
    
    return loadingInstance
}
```

每个loading实例有两个函数方法：

* `open()`：表示开启loading动画
* `close()`：表示关闭loading动画

下面介绍`createLoadingComponent(options: loadingProps )`方法，这个函数创建一个拥有完整生命周期的对象：

```typescript
/**
 * 创建一个loading组件实例
 * @param options loading的Props
 * @returns 返回一个有完整生命周期的loading组件实例
 */
function createLoadingComponent(options: loadingProps = defaultLoadingProps){
    return {
        open,
        close,
    }
}
```

该方法首先声明了一个内部的变量集data。因为实现一个完整的生命周期需要将createApp()函数返回的vue应用实例保存，loadingVM表示的正是这个：

```typescript
const data = reactive<loadingData>({
        ...options,
        loadingVM: null,            // loading 组件的vm实例
        loadingMountElement: null,  // loading 组件vm实例挂载的div，是target的child
        visible: false,             // loading 组件的可见性
        originalPosition: '',       // target原始的css position值
        originalOverflow: ''        // target原始的css overflow值
})
```

`init()`函数表示loading组件的初始化的过程，包括创建vue应用实例，初始化loading样式，挂载vue实例到target上等操作。

因为整个组件是一个绝对布局，需要将target所值的DOM元素设置为组件的相对元素(position:relative)，需要保存target原始的css position值，同时还需要关闭滚轮事件与滚动条，需要保存target原始的css overflow值。

::: tip 注意

在实现全屏效果的时候需要使用绝对布局，需要获知此时整个页面滚动到了那里来设置top与left属性，document.body.scrollTop与document.documentElement.scrollTop都可以获取窗口的位置，但同时只会有一个值生效。

:::

```typescript
async function init(){
        // 防止创建多个loading组件
        if(data.loadingMountElement === null && data.loadingVM === null){
            data.loadingVM = createApp(sceneLoadingComponent)
            // 包裹loading组件vm实例的DOM节点
            data.loadingMountElement = document.createElement('div')
            // 设置loading最外层div的样式
            data.loadingMountElement.style.position = "absolute";
            data.loadingMountElement.style.top = '0px'
            data.loadingMountElement.style.left = '0px'
            data.loadingMountElement.style.padding = '0'
            data.loadingMountElement.style.width = '100%'
            data.loadingMountElement.style.height = '100%'
            // 挂载实例到最外层div上
            data.loadingVM.mount(data.loadingMountElement)

            
            // 添加最外层div到target上
            if(typeof data.target === 'object'){
                let parent = data.target as VNode
                // 关闭滚轮的默认行为——页面锁定
                parent.el.addEventListener("wheel", preventDefaultFunc, {passive:false});
                // 保存target的position值与overflow值
                data.originalPosition = parent.el.style.position
                data.originalOverflow = parent.el.style.overflow

                parent.el.style.position = 'relative'   // 设置为absolute布局的子元素的相对元素
                parent.el.style.overflow = 'hidden'
                parent.el.appendChild(data.loadingMountElement)
            }
            else{
                let parent: HTMLElement = document.querySelector(data.target as string)
                // 关闭滚轮的默认行为——页面锁定
                parent.addEventListener("wheel", preventDefaultFunc, {passive:false});
                // console.log(parent,document.body, data.fullScreen, parent === document.body);
                // 如果是全屏loading
                if(document.body === parent && data.fullScreen){
                    
                    // 保存target的position值与overflow值
                    data.originalPosition = parent.style.position
                    data.originalOverflow = parent.style.overflow
                    // 设置body的样式
                    // document.body.scrollTop与document.documentElement.scrollTop同时只会有一个值生效。
                    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                    let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
                    let bodyStyle:CSSStyleDeclaration = window.getComputedStyle(document.body)
                    data.loadingMountElement.style.top = `${scrollTop - parseInt(bodyStyle.marginTop)}px`
                    data.loadingMountElement.style.left = `${scrollLeft - parseInt(bodyStyle.marginLeft)}px`
                    data.loadingMountElement.style.width = '100vw'
                    data.loadingMountElement.style.height = '100vh'
                }
                parent.style.overflow = 'hidden'
                parent.style.position = 'relative'      // 设置为absolute布局的子元素的相对元素
                parent.appendChild(data.loadingMountElement);
            }
        }
    }

```

这里`createApp(rootComponent: Component)`传入的组件`sceneLoadingComponent`为loading组件的本体，使用渲染函数构造：

```typescript
const sceneLoadingComponent = {
        name: 'scene-loading',
        setup(){
            const spinner = h('div',{class: 'loading'},[h('div'),h('div')])
            const spinnerText = data.text? h(
                'p', 
                { 
                    class: 'scene-loading-text',
                    style:{
                        cursor: 'pointer'
                    }
                }, 
                [data.text]
            ): undefined

            return () =>{
                return h(
                    Transition, // 使用渲染函数渲染<Transition>时，不能用string而是需要导入内置的Transition
                    {
                        name: 'scene-loading',
                    },
                    ()=>[ // 在render函数中使用默认指令 withDirectives
                        withDirectives(
                            h(
                                'div',
                                {
                                    class: ['scene-loading-mask'],
                                    style: { 
                                        background: 'rgba(255, 255, 255, .9)',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: '10000',
                                        color: '#9000ff',
                                    }
                                },
                                [spinner,spinnerText]
                            ),
                        [[vShow, data.visible]]
                        )
                    ]
                )
            }
        }
}
```

`destroy()`函数用于卸载vue应用实例，同时销毁创建的HTML元素，恢复target的属性，同时设置loadingInstance = null，清空单例：

```typescript
// loading组件的销毁
function destroy(){
        // 防止创建多个loading组件
        if(data.loadingMountElement !== null && data.loadingVM !== null){
            // vue app销毁
            data.loadingVM.unmount()
            // div从target上移除
            if(typeof data.target === 'object'){
                let parent = data.target as VNode
                parent.el.removeEventListener("wheel", preventDefaultFunc);
                // 恢复target的position与overflow值
                parent.el.style.position = data.originalPosition
                parent.el.style.overflow = data.originalOverflow
                parent.el.removeChild(data.loadingMountElement) // 从target上移除loading组件的div
            }
            else{
                let parent: HTMLElement = document.querySelector(data.target as string)
                parent.removeEventListener("wheel", preventDefaultFunc);
                // 恢复target的position与overflow值
                parent.style.position = data.originalPosition
                parent.style.overflow = data.originalOverflow
                parent.removeChild(data.loadingMountElement);   // 从target上移除loading组件的div
            }
            // 销毁data上的loadingVM与loadingMountElement
            data.loadingVM = null
            data.loadingMountElement = null
        }
        // 销毁单例loading组件实例
        loadingInstance = null
}
```

对外暴漏的open与close方法主要表示的就是这两个过程：

```typescript
// 打开loading组件
function open(){
    init()
    data.visible = true
}

// 关闭loading组件
function close(){
    data.visible = false
    destroy()
    data.onClose()// 触发props的onclose事件
}
```

