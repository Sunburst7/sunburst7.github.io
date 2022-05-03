---
title: Loading 加载

---

# Loading 加载

使用函数的方式提供一个全屏或局部的加载动画，在需要的时候展示加载动画，防止页面失去响应提高用户体验。

导入全局对象：

```typescript
import {SceneLoading} from 'scene-ui'
```

该对象只有一个唯一方法`service(options: loadingProps)`，其中`options`参数为 Loading 的配置项，具体见下表。该方法用于根据你的props参数创建一个loading实例并返回他。

::: tip 注意

loading组件是一个单例模式，也就是说无法在已经有一个正在运行的loading组件的情况下再调用SceneLoading.service(options: loadingProps)创建另一个loading组件

:::

返回的loading实例有两个函数方法：

* `open()`：表示开启loading动画
* `close()`：表示关闭loading动画

## 全局加载

演示一个全局5s的loading动画

<div class="line">
    <s-button @click="onGlobalLoading">全局loading</s-button>
</div>




```vue
<s-button @click="onGlobalLoading">全局loading</s-button>
<script lang="ts" setup>
import {ref} from 'vue'
import { SceneLoading } from 'scene-ui'
const onGlobalLoading = () =>{
  // 创建一个loadingInstance实例	
  let loadingInstance = SceneLoading.service({
    target: 'body',
    fullScreen: true,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
</script>
```


## 局部加载

演示一个局部5s的loading动画

<div class="line">
    <s-card id="card" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
        <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button @click="onLocalLoading('#card')" type="text">
              局部loading
            </s-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
   </s-card>
</div>



```vue
<s-card id="card" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
    <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button @click="onLocalLoading('#card')" type="text">
              局部loading
            </s-button>
          </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
</s-card>

<script lang="ts" setup>
import {ref} from 'vue'
import { SceneLoading } from 'scene-ui'
const onLocalLoading = (target: HTMLElement | string) =>{
  let loadingInstance = SceneLoading.service({
    target: target,
    fullScreen: false,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
</script>
```

## Loaidng 属性

| 属性       | 说明                                                         | 类型                        | 可选值 | 默认值                              |
| ---------- | ------------------------------------------------------------ | --------------------------- | ------ | ----------------------------------- |
| target     | Loading需要覆盖的 DOM 节点.可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入document.querySelector以获取到对应DOM节点 | VNode \|string\|HTMLElement | -      | 'body'                              |
| fullScreen | 是否占据整个屏幕，当target指向document.body时生效            | boolean                     | -      | true                                |
| text       | loading组件的文本提示                                        | string                      | -      | 'loading...'                        |
| onClose    | loading组件关闭的回调函数                                    | Function                    | -      | ()=>{console.log('loading close!')} |

<script lang="ts" setup>
import {ref,onMount} from 'vue'
import { SceneLoading } from '../../../../components/loading/loading'
const onLocalLoading = (target: HTMLElement | string) =>{
  let loadingInstance = SceneLoading.service({
    target: target,
    fullScreen: false,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
const onGlobalLoading = () =>{
  // 创建一个loadingInstance实例	
  let loadingInstance = SceneLoading.service({
    target: 'body',
    fullScreen: true,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
/* card 测试css */
.square{
  width: 400px;
  height: 300px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
  flex-grow: 1;
   }
</style>    