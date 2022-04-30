---
title: button
---
编写按钮组件时主要考虑有以下几个因素：

* 按钮的大小
* 按钮的造型
* 按钮是否可被禁用
* 按钮可以触发的事件

同时为了美化按钮，用户可以在按钮中添加图标，这里用到了Vue的插槽技术。

因此设置了以下几种Props，NativeType保留了按钮的原生类型：

```typescript
import { ComponentConstants } from '../../core/constants'; 

export const buttonProps = {
    type:{// 按钮类型
        type: String,
        default: 'default',
        validator(value: string) {
            // 这个值必须与下列字符串中的其中一个相匹配
            return ['default', 'round', 'text', 'circle'].includes(value)
        }
    },
    theme: {
        type: String,
        default: 'main',
        validator(value:ComponentConstants.StandardColor){
            return ComponentConstants.StandardColorArr.includes(value)
        },
    },
    size:{// 按钮的尺寸
        type: String,
        default: 'default',
        validator(value: string) {
            return ComponentConstants.StandardSizeArr.includes(value)
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

整个按钮组价的HTML布局如下：

```html
<template>
    <button 
        ref="root"
        class="scene-button"
        :class="[
            `scene-button-${type}`,
            `scene-button-${theme}`
        ]" 
        :style="styleObj"
        :disabled="disabled"
        :type='nativeType'
        @click="handleClick"
        >
        <span class="scene-button-icon-slot" v-if="icon">
            <slot name="icon"></slot>
        </span>
        <slot v-if="type !== 'circle'"></slot><!-- 备用内容，默认插槽  -->
    </button>
</template>
```

模板内是一个原生button，通过读取props的值来动态更改button的class，切换CSS。

由于按钮的内容区域的大小是根据用户输入的内容自适应的，所以控制大小主要通过控制button的padding来实现

```typescript
// size决定着缩放比例
let scaleSize = computed(()=>{
	switch(props.size){
		case 'default':
			return ['8px 16px','14px'];
		case 'large':
			return ['10px 20px','18px'];
		case 'small':
			return ['4px 8px','10px']
	}
})
// style对象
let styleObj = reactive<{
	padding?: string,
	fontSize: string,
	color: string | undefined,
}>({
	padding: scaleSize.value![0],
	fontSize: scaleSize.value![1],
	color: props.type === 'text'?ThemeColorMap.get(props.theme):'white'
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

```vue
<template>
    <button 
        ref="root"
        class="scene-button"
        :class="[
            `scene-button-${type}`,
            `scene-button-${theme}`
        ]" 
        :style="styleObj"
        :disabled="disabled"
        :type='nativeType'
        @click="handleClick"
        >
        <span class="scene-button-icon-slot" v-if="icon">
            <slot name="icon"></slot>
        </span>
        <slot v-if="type !== 'circle'"></slot><!-- 备用内容，默认插槽  -->
    </button>
</template>

<script lang='ts'>
import {defineComponent, ref, onMounted, computed, reactive} from 'vue'
import {buttonProps, buttonEmits } from './button'
import '../../styles/global.css'
import {ThemeColorMap} from '../../core/constants/constants'

export default defineComponent({
    name:'s-button',
    props: buttonProps,
    emits: buttonEmits,
    setup(props,{emit,attrs,slots,expose}){
        // 获取根节点 必须放在全局作用域中，不能放在onMount中:模板引用只有在组件渲染完成后生效
        const root = ref<HTMLInputElement>();
        // size决定着缩放比例
        let scaleSize = computed(()=>{
            switch(props.size){
                case 'default':
                    return ['8px 16px','14px'];
                case 'large':
                    return ['10px 20px','18px'];
                case 'small':
                    return ['4px 8px','10px']
            }
        })
        // style对象
        let styleObj = reactive<{
            padding?: string,
            fontSize: string,
            color: string | undefined,
        }>({
            padding: scaleSize.value![0],
            fontSize: scaleSize.value![1],
            color: props.type === 'text'?ThemeColorMap.get(props.theme):'white'
        })
        if(props.type=== 'circle')
            delete styleObj.padding
        // 组件原生click事件回调函数
        const handleClick = (evt: MouseEvent) => {
            emit('click', evt)// 触发父组件注册的原生click事件
        }
        // icon插槽
        const icon = slots.icon;

        return{
            root,
            styleObj,
            icon,
            handleClick,
        }
    }
})
</script>

<style>
.scene-button{
    border:var(--scene-border-size) solid;
    border-radius: var(--scene-border-radius);

    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);

    /* padding: 8px 16px; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
/* 不同的主题 */
.scene-button-main{
    border-color: var(--scene-theme-color-main);
    background: var(--scene-theme-color-main);
}
.scene-button-info{
    border-color: var(--scene-theme-color-info);
    background: var(--scene-theme-color-info);
}
.scene-button-success{
    border-color: var(--scene-theme-color-success);
    background: var(--scene-theme-color-success);
}
.scene-button-warning{
    border-color: var(--scene-theme-color-warning);
    background: var(--scene-theme-color-warning);
}
.scene-button-error{
    border-color: var(--scene-theme-color-error);
    background: var(--scene-theme-color-error);
}
.scene-button:disabled{
    border: var(--scene-color-disabled) 1px solid;
    color: var(--scene-color-disabled);
    /* 光标变化 */
    cursor: not-allowed; 
}
/* type=round */
.scene-button-round{
    border-radius: var(--scene-round-border-radius)
}
/* type=circle */
.scene-button-circle{
    padding: 5px;
    border-radius: 50%;
}
/* type=text */
.scene-button-text{
    border: none;
    background: var(--scene-color-white);
}
.scene-button-icon-slot{
    display: flex;
    justify-content: center;
    align-items: center;
}
.scene-button-icon-slot-text{
    margin-left: 5px;
}
</style>
```

