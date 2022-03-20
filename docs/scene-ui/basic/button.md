---
title: Button 按钮
---

# 按钮 Button

常用的操作按钮。

## 基础用法

1. 设置大小：通过设置size="default" | "small" | "large" 改变按钮的大小

    <div class="line">
        <s-button size="small"/> <s-button size="default"/> <s-button size="large"/>
    </div>

    ```html
    <s-button size="small"/>
    <s-button size="default"/>
    <s-button size="large"/>
    ```

2. 设置类型：通过设置type="default" | "round" | "text" 改变按钮类型为普通按钮、圆角按钮、文字按钮

    <div class="line">
        <s-button size="default" type="default"/> <s-button size="default" type="round"/> <s-button size="default" type="text"/>
    </div>
    
    ```html
    <s-button size="default" type="default"/>
    <s-button size="default" type="round"/>
    <s-button size="default" type="text"/>
    ```

## 禁用

设置:disabled="true"，可以实现禁用样式

<div class="line">
    <s-button size="default" type="default" :disabled="true"/> 
</div>

```html
<s-button size="default" type="default" :disabled="true"/> 
```


## 设置图标

给button设置v-slot:icon的插槽可以插入一个图标。

<div>
    <s-button>
        <template v-slot:icon>
            <img src="/setting.svg">
        </template>
        图标按钮
    </s-button>
</div>



```html
<div>
    <s-button>
        <template v-slot:icon>
            <img src="/setting.svg">
        </template>
        图标
    </s-button>
</div>
```




## Button 属性

| 属性       | 说明                                       | 类型    | 可选值                  | 默认值  |
| ---------- | ------------------------------------------ | ------- | ----------------------- | ------- |
| size       | 按钮尺寸                                   | string  | default/small/large     | default |
| type       | 按钮类型，分为默认按钮、圆角按钮、文字按钮 | string  | default/round/text      | default |
| disabled   | 是否为禁用状态                             | boolean | -                       | false   |
| nativeType | 原生 type 属性                             | string  | button / submit / reset | button  |

## Button 插槽

| 插槽名     | 说明               |
| ---------- | ------------------ |
| -或default | 自定义默认按钮文本 |
| icon       | 自定义图标         |


## Button 事件

| 事件名 | 说明             | 参数             |
| :----- | :--------------- | :--------------- |
| click  | 点击按钮触发事件 | event:MouseEvent |


<style scope>
.line{
    display: flex;
    justify-content: space-between;
    align-items: flex-end
}
</style>