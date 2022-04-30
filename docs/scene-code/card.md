---
title: card  
---

Card的html结构如下：

```html
<div ref="el" class="scene-card">
    <div v-if="$slots.header || header" class="scene-card-head">
        <slot name="header">{{ header }}</slot>
    </div>
    <div class="scene-card-body" :style="bodyStyle">
        <slot></slot>
    </div>
</div>
```

当用户没有提供header或header插槽则不会渲染第二行的div。

对于卡片的阴影的控制在组件挂载完成时，读取props.shadow，根据不同的情况改变card模板的style：

```typescript
onMounted(()=>{
      let card: HTMLElement = el.value!;
      // 对不同的卡片出现时机设置不同的阴影效果
      if(shadowTime === 'always')
        card.style.boxShadow = "0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)"
      if(shadowTime === 'hover'){
        // 获取旧的 class
        let oldClassName = card.getAttribute('class')
        card.setAttribute('class',oldClassName+' scene-card-hover')
        // 设置过度效果
        card.style.transition = "box-shadow 0.5s"
      }
})
```

完整代码——card.vue：

```vue
<template>
  <div ref="el" class="scene-card">
    <div v-if="$slots.header || header" class="scene-card-head">
        <slot name="header">{{ header }}</slot>
    </div>
    <div class="scene-card-body" :style="bodyStyle">
        <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, onMounted, ref} from 'vue'
import {cardProps} from './card'
import '../../styles/global.css'

export default defineComponent({
  name:'scene-card',
  props:cardProps,
  setup(props,{emit,attrs,slots,expose}){
    // 卡片阴影出现的时机
    const shadowTime = props.shadow;
    // 卡片元素
    const el = ref<HTMLElement>()

    onMounted(()=>{
      let card: HTMLElement = el.value!;
      // 对不同的卡片出现时机设置不同的阴影效果
      if(shadowTime === 'always')
        card.style.boxShadow = "0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)"
      if(shadowTime === 'hover'){
        // 获取旧的 class
        let oldClassName = card.getAttribute('class')
        card.setAttribute('class',oldClassName+' scene-card-hover')
        // 设置过度效果
        card.style.transition = "box-shadow 0.5s"
      }
    })
    
    return {
      el
    }
  }
})
</script>
<style scoped>
.scene-card{
  display: inline-flex;
  flex-direction: column;
  border-radius: var(--scene-border-radius);
  border: var(--scene-border-size) solid var(--scene-color-light-gray);
  overflow: hidden;
  box-sizing: border-box; /** 设置宽高为加上border与padding的宽高 */

  font-size: var(--scene-font-size);
  font-family: var(--scene-font-family);
  letter-spacing: var(--scene-letter-spacing);
}
.scene-card-hover:hover{
  box-shadow: var(--scene-box-shadow)
}
.scene-card-head{
  padding: 10px 20px;
  border-bottom: var(--scene-border-inner-size) solid var(--scene-color-light-gray);
  box-sizing: border-box;
  flex-grow: 0; /** 不占据剩余空间 */
}
.scene-card-body{
  padding: 20px;
  flex-grow: 1; /** 占据所有的剩余空间 */
}
</style>
```

完整代码——card.ts

```typescript
export const cardProps = {
    header:{
        type:String,
    },
    shadow:{// 显示阴影的时机
        type:String,
        default: 'always',
        validator(val: string){
            return ['always','hover','never'].includes(val);
        }
    },
    bodyStyle:{//卡片的 body 的样式 object — { padding: '20px' }
        type:Object
    }
}
```

