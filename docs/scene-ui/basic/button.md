---
title: Button 按钮
---

# Button 按钮

常用的操作按钮。

## 基础用法

设置大小：通过设置size="default" | "small" | "large" 改变按钮的大小

<div class="line">
    <s-button size="small">提交</s-button>
    <s-button size="default">提交</s-button>
    <s-button size="large">提交</s-button>
</div>


```html
<s-button size="small">提交</s-button>
<s-button size="default">提交</s-button>
<s-button size="large">提交</s-button>
```

设置类型：通过设置type="default" | "round" | "text" 改变按钮类型为普通按钮、圆角按钮、文字按钮

<div class="line">
    <s-button size="default" type="default">提交</s-button>
    <s-button size="default" type="round">提交</s-button>
    <s-button size="default" type="text">提交</s-button>
</div>


```html
<s-button size="default" type="default"/>
<s-button size="default" type="round"/>
<s-button size="default" type="text"/>
```

## 设置主题色

可以通过theme="main" | "success" | "info" | "warning" | "error"设置不同的主题颜色，默认是main主题

<div class="line">
    <s-button size="default">提交</s-button>
    <s-button size="default" theme="success">提交</s-button>
    <s-button size="default" theme="info">提交</s-button>
    <s-button size="default" theme="warning">提交</s-button>
    <s-button size="default" theme="error">提交</s-button>
</div>


```html
<s-button size="default">提交</s-button>
<s-button size="default" theme="success">提交</s-button>
<s-button size="default" theme="info">提交</s-button>
<s-button size="default" theme="warning">提交</s-button>
<s-button size="default" theme="error">提交</s-button>
```

## 禁用

设置:disabled="true"，可以实现禁用样式

<div class="line">
    <s-button size="default" type="default" :disabled="true">提交</s-button>
</div>



```html
<s-button size="default" type="default" :disabled="true"/> 
```


## 设置图标

给button设置v-slot:icon的插槽可以插入一个图标。`s-icon`组件的用法详情请见图标

<div>
    <s-button size="default" type="default">
      <template v-slot:icon>
        <s-icon name="gear-fill" color="white" size="16px" />
      </template>
      button
    </s-button>
</div>


```html
<s-button size="default" type="default">
  <template v-slot:icon>
    <s-icon name="gear-fill" color="white" size="16px" />
  </template>
  button
</s-button>
```


## Button 属性

| 属性       | 说明                                       | 类型    | 可选值                          | 默认值  |
| ---------- | ------------------------------------------ | ------- | ------------------------------- | ------- |
| type       | 按钮类型，分为默认按钮、圆角按钮、文字按钮 | string  | default/round/text              | default |
| theme      | 按钮颜色主题                               | string  | main/success/info/warning/error | main    |
| size       | 按钮尺寸                                   | string  | default/small/large             | default |
| disabled   | 是否为禁用状态                             | boolean | -                               | false   |
| nativeType | 原生 type 属性                             | string  | button / submit / reset         | button  |

## Button 插槽

| 插槽名     | 说明               |
| ---------- | ------------------ |
| -或default | 自定义默认按钮文本 |
| icon       | 自定义图标         |


## Button 事件

| 事件名 | 说明             | 参数             |
| :----- | :--------------- | :--------------- |
| click  | 点击按钮触发事件 | event:MouseEvent |

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    