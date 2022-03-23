---
title: 1.按钮组件
description: 初期编写不考虑主体样式
---
编写按钮组件时主要考虑有以下几个因素：

* 按钮的大小
* 按钮的造型
* 按钮是否可被禁用
* 按钮可以触发的事件

同时为了美化按钮，用户可以在按钮中添加图标，这里用到了Vue的插槽技术。

因此设置了以下几种Props，NativeType保留了按钮的原生类型：

```typescript
export const buttonProps = {
    type:{// 按钮类型
        type: String,
        default: 'default',
        required: true,
        validator(value: string) {
            // 这个值必须与下列字符串中的其中一个相匹配
            return ['default', 'round', 'text'].includes(value)
        }
    },
    size:{// 按钮的尺寸
        type: String,
        default: 'default',
        validator(value: string) {
            return componentSize.includes(value)
        }
    },
    disabled:{// 是否禁用
        type: Boolean,
        default: false,
    },
    nativeType:{// 原生button类型
        type: String,
        default: 'button',
        validator(value: string) {
            return ['button','reset','submit'].includes(value)
        }
    },
}
```

整个按钮组价的HTML布局如下：

```html
<template>
    <button 
        ref="root"
        class="scene-button-default"
        :class="[
            `scene-button-${size}`,
            `scene-button-${type}`,
        ]" 
        :disabled="disabled"
        :type='nativeType'
        @click="handleClick"
            
        >
        <span class="scene-button-icon-slot" v-if="icon">
            <slot name="icon"></slot>
        </span>
        <slot>button</slot><!-- 备用内容，默认插槽  -->
    </button>
</template>
```

模板内是一个原生button，通过读取props的值来动态更改button的class，切换CSS。

利用CSS实现有icon插槽时的动态样式切换，在组件渲染完成后添加一个class：

```typescript
// 获取根节点 必须放在全局作用域中，不能放在onMount中:模板引用只有在组件渲染完成后生效
 const root = ref<HTMLInputElement>();

// icon插槽
const icon = slots.icon;

onMounted(()=>{   
    if(icon){
    // 获取根节点button的类名
    let oldClassName:string | null | undefined = root.value?.getAttribute('class')
    // 拼接上设置icon的类名
    root.value?.setAttribute('class',oldClassName+' scene-button-icon')
	}
})
```

触发外层原生Click事件回调函数：

```typescript
setup(props,{emit,attrs,slots,expose}){
        // 组件原生click事件回调函数
        const handleClick = (evt: MouseEvent) => {
            emit('click', evt)// 触发父组件注册的原生click事件
        }
        
        return{
            handleClick,
        }
}
```

完整代码如下：

button.vue

```vue
<template>
    <button 
        ref="root"
        class="scene-button-default"
        :class="[
            `scene-button-${size}`,
            `scene-button-${type}`,
        ]" 
        :disabled="disabled"
        :type='nativeType'
        @click="handleClick"
            
        >
        <span class="scene-button-icon-slot" v-if="icon">
            <slot name="icon"></slot>
        </span>
        <slot>button</slot><!-- 备用内容，默认插槽  -->
    </button>
</template>

<script lang='ts'>
import {defineComponent, ref, onMounted} from 'vue'
import {buttonProps, buttonEmits } from './button'

export default defineComponent({
    name:'s-button',
    props: buttonProps,
    emits: buttonEmits,
    setup(props,{emit,attrs,slots,expose}){
        // 获取根节点 必须放在全局作用域中，不能放在onMount中:模板引用只有在组件渲染完成后生效
        const root = ref<HTMLInputElement>();
        // 组件原生click事件回调函数
        const handleClick = (evt: MouseEvent) => {
            emit('click', evt)// 触发父组件注册的原生click事件
        }
        // icon插槽
        const icon = slots.icon;

        onMounted(()=>{   
            if(icon){
                // 获取根节点button的类名
                let oldClassName:string | null | undefined = root.value?.getAttribute('class')
                // 拼接上设置icon的类名
                root.value?.setAttribute('class',oldClassName+' scene-button-icon')
            }
        })

        return{
            root,
            icon,
            handleClick,
        }
    }
})
</script>

<style scoped>
.scene-button-default{
    background: white;
    color:black;
    border:1px solid;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.scene-button-default:disabled{
    border:#C0C4CC 1px solid;
    color: #C0C4CC;
    /* 光标变化 */
    cursor: not-allowed; 
}
/* size=large */
.scene-button-large{
    width: 90px;
    height: 45px;
}
/* size=small */
.scene-button-small{
    width: 60px;
    height: 30px;
}
/* type=round */
.scene-button-round{
    border-radius: 20px;
}
/* type=text */
.scene-button-text{
    border: none;
}
/* 设置了icon slot时的button属性 */
.scene-button-icon{
    width:110px;
    height:45px;
}
.scene-button-icon-slot{
    margin-right: 5px;
}
</style>
```

button.ts

```typescript
import { componentSize } from "../../utils/constant"

export const buttonProps = {
    type:{// 按钮类型
        type: String,
        default: 'default',
        required: true,
        validator(value: string) {
            // 这个值必须与下列字符串中的其中一个相匹配
            return ['default', 'round', 'text'].includes(value)
        }
    },
    size:{// 按钮的尺寸
        type: String,
        default: 'default',
        validator(value: string) {
            return componentSize.includes(value)
        }
    },
    disabled:{// 是否禁用
        type: Boolean,
        default: false,
    },
    nativeType:{// 原生button类型
        type: String,
        default: 'button',
        validator(value: string) {
            return ['button','reset','submit'].includes(value)
        }
    },
}

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
```

