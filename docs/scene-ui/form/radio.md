---
title: Radio 单选框
---

# 单选框 Radio

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

一个单选按钮组由具有相同 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name)属性的单选按钮组成。 一旦单选按钮组被建立，选择那按钮组的任何单选按钮将会自动取消同组当前选择的任何按钮。

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着提交的值为name=modelValue， `label`可以是`String`、`Number` 或 `Boolean`。

<div class="line">
    <s-radio v-model="phone" name="contact" label="phone" :disabled="false" size="default"></s-radio>
    <s-radio v-model="email" name="contact" label="email" :disabled="false" size="default"></s-radio>
</div>

```html
<s-radio v-model="phone" name="contact" label="phone" :disabled="false" size="default"/>
<s-radio v-model="email" name="contact" label="email" :disabled="false" size="default"/>

<script lang="ts" setup>
import {ref} from 'vue'
 
const phone = ref('phone')
const email = ref('email')
    
</script>
```



## 禁用状态

设置disabled="true"实现禁用。

<div class="line">
    <s-radio v-model="phone" :name="contact" label="phone" :disabled="true" ></s-radio>
    <s-radio v-model="email" :name="contact" label="email" :disabled="true" ></s-radio>
</div>

```html
<s-radio v-model="phone" name="contact" label="phone" :disabled="true" size="default"/>
<s-radio v-model="phone" name="contact" label="email" :disabled="true" size="default"/>
<script lang="ts" setup>
import {ref} from 'vue'
 
const phone = ref('phone')
</script>
```



## 带有边框

设置:border="true"可以使得单选框有边框。

<div class="line">
    <s-radio v-model="phone" :name="contact" label="phone" :border="true"></s-radio>
    <s-radio v-model="email" :name="contact" label="email" :border="true"></s-radio>
</div>

```html
<s-radio v-model="phone" :name="contact" label="phone" :border="true"/>
<s-radio v-model="email" :name="contact" label="email" :border="true"/>

<script lang="ts" setup>
import {ref} from 'vue'
 
const phone = ref('phone')
const email = ref('email')
    
</script>
```

## Radio 属性

| 属性               | 说明                           | 类型                  | 可选值              | 默认值  |
| ------------------ | ------------------------------ | --------------------- | ------------------- | ------- |
| modelValue/v-model | 单选框绑定的值                 | String/Number/Boolean | -                   | -       |
| name               | 随表单一起提交的原生的name属性 | String                | -                   | -       |
| label              | 单选框的文本                   | String                | -                   | -       |
| border             | 是否显示边框                   | Boolean               | -                   | false   |
| disabled           | 是否为禁用状态                 | boolean               | -                   | false   |
| size               | 单选框尺寸                     | string                | default/small/large | default |

## Radio 事件

| 事件名 | 说明                   | 参数               |
| :----- | :--------------------- | :----------------- |
| change | 绑定值变化时触发的事件 | 绑定的modelValue值 |

<style scope>
.line{
    display: flex;
    justify-content: center;
    align-items: flex-end
}
</style>

