---
title: radio
---

单选按钮允许你选择单一的值来提交表单。编写单选框时要考虑的因素有：

* 单选框的表单控件属性，也就是基础的name、value、label属性
* 单选框的尺寸
* 单选框是否被禁用
* 单选框的大小

同时保留了单选框的modelValue改变时的change事件，参数是当前modelValue。radio.ts的代码如下：

```typescript
import { ComponentConstants } from '../../core/constants'; 
import {isString ,isNumber, isBoolean} from "../../core/lib/type-assert"

export const radioProps = {
    modelValue:{//单选框绑定的值
        type:[String,Number,Boolean],
        required: true,
    },
    name:{//随表单一起提交的原生的name属性
        type: String,
        required: true,
    },
    label:{//单选框的文本
        type: String,
        required:true,
    },
    disabled:{//是否禁用单选框
        type: Boolean,
        default: false
    },
    size:{//Radio 的尺寸
        type: String,
        default: 'default',
        validator(value: string) {
            return ComponentConstants.StandardSizeArr.includes(value)
        }
    },
}

export const radioEmits = {
    // onchange函数的验证函数
    change: (val: string | number | boolean) => isString(val) || isNumber(val) || isBoolean(val),
    'update:modelValue': (val: string | number | boolean) => isString(val) || isNumber(val) || isBoolean(val),
}
```

因为无法直接修改input元素的样式，也就是那个选择按钮的样式，因此准备自己实现一个选择的样式，以size="default"为例，使用`opacity`隐藏原生radio，再利用绝对布局将其移动到自己画的圆圈的位置。

```css
/* size=default */
.scene-radio-default input[type="radio"]{
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 0;
  opacity: 0;
  top: 6px;
  left: -8px;
  z-index: var(--scene-index-heighter);
}
```

利用:before伪元素构造一个圆圈：

```css
.scene-radio-default label:before{
  content: '';
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 18px;
  border: 1px solid var(--scene-border-color-dark);
  background: white;
  top: 5px;
  left: -9px;
  cursor: pointer;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
```

Radio选中时的特殊样式：

```css
/* 选中时圆圈样式 */
.scene-radio input[type="radio"]:checked + label:before{
  background: var(--scene-theme-color-main);
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
/* 获取焦点时圆圈样式 */
.scene-radio input[type="radio"]:focus + label:before{
  border-color: var(--scene-theme-color-main);
}
/* 选中时文本样式 */
.scene-radio input[type="radio"]:checked + label{
  color: var(--scene-theme-color-main);
}
```

完整代码：

```vue
<template>
  <div 
    class="scene-radio" 
    :class="[
      `scene-radio-${size}`,
    ]" 
  >
    <input
      type="radio" 
      :name="name" 
      :value="modelValue" 
      :disabled="disabled"
      @click="handleClick"
      @change="handleChange"
      :checked="label === modelValue"
    />
    <label>
      {{label}}
    </label>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import {radioProps, radioEmits} from './radio'
import '../../styles/global.css'

export default defineComponent({
  name:'scene-radio',
  props:radioProps,
  emits:radioEmits,
  setup(props,{emit,attrs,slots,expose}){
    // 组件原生的change事件回调函数
    const handleChange = (evt: MouseEvent)=>{
        if(props.modelValue === undefined)
          emit('change','undefined')
        else
          emit('change',props.modelValue)
    }

    const handleClick = ()=>{
      if(props.label !== undefined)
        emit('update:modelValue',props.label)
    }

    return {
      handleChange,
      handleClick
    }
  }
})
</script>

<style scoped>
.scene-radio{
  display: inline-flex;
  position: relative;
}
/* size=default */
.scene-radio-default input[type="radio"]{
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 0;
  opacity: 0;
  top: 6px;
  left: -8px;
  z-index: var(--scene-index-heighter);
}
.scene-radio-default label:before{
  content: '';
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 18px;
  border: 1px solid var(--scene-border-color-dark);
  background: white;
  top: 5px;
  left: -9px;
  cursor: pointer;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.scene-radio-default label{
  color: var(--scene-font-color-dark);
  font-size: var(--scene-font-size);
  font-family: var(--scene-font-family);
  letter-spacing: var(--scene-letter-spacing);
}
/* size=small */
.scene-radio-small input[type="radio"]{
  width: 14px;
  height: 14px;
  position: absolute;
  margin: 0;
  opacity: 0;
  top: 5px;
  left: -7px;
  z-index: var(--scene-index-heighter);
}
.scene-radio-small label:before{
  content: '';
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 16px;
  border: 1px solid var(--scene-border-color-dark);
  background: white;
  top: 4px;
  left: -8px;
  cursor: pointer;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.scene-radio-small label{
  color: var(--scene-font-color-dark);
  font-size: var(--scene-font-size-small);
  font-family: var(--scene-font-family);
  letter-spacing: var(--scene-letter-spacing);
}
/* size=large */
.scene-radio-large input[type="radio"]{
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 0;
  opacity: 0;
  top: 7px;
  left: -8px;
  z-index: var(--scene-index-heighter);
}
.scene-radio-large label:before{
  content: '';
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 22px;
  border: 1px solid var(--scene-border-color-dark);
  background: white;
  top: 6px;
  left: -9px;
  cursor: pointer;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.scene-radio-large label{
  color: var(--scene-font-color-dark);
  font-size: var(--scene-font-size-large);
  font-family: var(--scene-font-family);
  letter-spacing: var(--scene-letter-spacing);
}
/* 选中时圆圈样式 */
.scene-radio input[type="radio"]:checked + label:before{
  background: var(--scene-theme-color-main);
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
/* 获取焦点时圆圈样式 */
.scene-radio input[type="radio"]:focus + label:before{
  border-color: var(--scene-theme-color-main);
}
/* 选中时文本样式 */
.scene-radio input[type="radio"]:checked + label{
  color: var(--scene-theme-color-main);
}

.scene-radio input[type="radio"]:disabled + label:before {
  box-shadow: inset 0 0 0 4px #f4f4f4;
  background: var(--scene-color-disabled)
}

.scene-radio-border-true{
    border: var(--scene-theme-color-main) 1px solid;
}
</style>
```

