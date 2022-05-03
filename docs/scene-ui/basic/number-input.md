---
title: Number-Input 数字输入框
---

# Number-Input 数字输入框

只允许设置标准的数字值，可自定义范围，步长

## 基础用法

要使用它，只需要在 `<s-number-input>` 元素中使用 `v-model` 绑定变量即可

其他控制数字输入的属性有：

* **step**：控制每次按钮调整的步长，默认为1
* **max**：控制数字输入的最大值，默认无穷
* **min**：控制数字输入的最小值，默认负无穷

下面是一个从-10到10的数字选择器，步长为1：

<div class="line">
    <s-number-input name='num' v-model="num1" :max="10" :min="-10" :step="1"/>
</div>


```html
<template>
    <s-number-input name='num' v-model="num1" :max="10" :min="-10" :step="1"/>
</template>
<script setup>
import {ref} from 'vue'
const num1 = ref(0)
</script>
```

##  禁用

设置:disabled="true"即可实现禁用状态

<div class="line">
    <s-number-input name='num' v-model="num2" :max="10" :min="-10" :step="1" :disabled="true"/>
</div>


```html
<template>
    <s-number-input name='num' v-model="num2" :max="10" :min="-10" :step="1" :disabled="true"/>
</template>
<script setup>
import {ref} from 'vue'
const num2 = ref(0)
</script>
```

## Number-Input 属性

| 属性               | 说明                 | 类型    | 可选值              | 默认值    |
| ------------------ | -------------------- | ------- | ------------------- | --------- |
| name               | input原生name属性    | string  | -                   | -         |
| label              | input原生label属性   | string  | -                   | -         |
| modelValue/v-model | 数字输入框双向绑定值 | number  | -                   | -         |
| step               | 步长                 | number  | -                   | 1         |
| max                | 最大值               | number  | -                   | Infinity  |
| min                | 最小值               | number  | -                   | -Infinity |
| disabled           | 是否为禁用状态       | boolean | -                   | false     |
| size               | 按钮尺寸             | string  | default/small/large | default   |

## Number-Input 事件

| 事件名 | 说明                        | 回调参数                                               |
| :----- | :-------------------------- | :----------------------------------------------------- |
| change | 绑定值被改变时触发          | (currentValue: number \| NaN, oldValue: number \| NaN) |
| blur   | 在组件 Input 失去焦点时触发 | (event: Event)                                         |
| focus  | 在组件 Input 获得焦点时触发 | (event: Event)                                         |

## Number-Input 方法

| 方法名 | 说明                  | 参数 |
| :----- | :-------------------- | :--- |
| focus  | 使 input 组件获得焦点 | -    |
| blur   | 使 input 组件失去焦点 | —    |



<script setup>
import {ref} from 'vue'
const num1 = ref(0)
const num2 = ref(0)
</script>
<style scope>
.line{
    display: flex;
    justify-content: center;
    align-items: flex-end
}
</style>
