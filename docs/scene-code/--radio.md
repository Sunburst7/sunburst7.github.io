---
title: 2.单选框组件
---

组件编写初期，对于单选框的美化暂时不涉及

单选按钮允许你选择单一的值来提交表单。编写单选框时要考虑的因素有：

* 单选框的表单控件属性，也就是基础的name、value、label属性
* 单选框的尺寸
* 单选框是否被禁用
* 单选框的大小

同时保留了单选框的modelValue改变时的change事件，参数是当前modelValue。radio.ts的代码如下：

```typescript
import { componentSize } from "../../utils/constant"
import {isString ,isNumber, isBoolean} from '../../utils/typeAssert'

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
    border:{//是否显示边框
        type: Boolean,
        default: false
    },
    size:{//Radio 的尺寸
        type: String,
        default: 'default',
        validator(value: string) {
            return componentSize.includes(value)
        }
    },
    
}

export const radioEmits = {
    // onchange函数的验证函数
    change: (val: string | number | boolean) => isString(val) || isNumber(val) || isBoolean(val),
}
```

因为无法直接修改input元素的样式，也就是那个选择按钮的样式，因此在外层套了个div用于调整大小、边框等等。整个单选框的结构如下：

```html
<template>
  <div 
    class="scene-radio-default" 
    :class="[
            `scene-radio-${size}`,
            `scene-radio-border-${border}`
    ]" 
  >
        <input
            type="radio" 
            :name="name" 
            :value="modelValue" 
            :disabled="disabled"
            @change="handleChange"
        />
        <label>
            {{label}}
        </label>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import {radioProps, radioEmits} from './radio'

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

    return {
      handleChange
    }
  }
})
</script>

<style scoped>
.scene-radio-default{
    width: 100px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.scene-radio-small{
    width: 80px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.scene-radio-large{
    width: 120px;
    height: 55px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.scene-radio-default:checked{
    
}
.scene-radio-default:disabled{
    border-color: #b4b4b4;
    background: #b4b4b4;
}
.scene-radio-border-true{
    border: black 1px solid;
}
</style>
```

