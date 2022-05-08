---
title: Checkbox 选择器
---

# Checkbox 选择器

它的参数如下

* checked: 初始值 是否选中，
* theme: checkbox的主题色，
* disabled：是否禁用，
* unsure：是否处于<不确定>状态，
* modelValue：v-model绑定的值 Boolean，
* size：组件的大小，
* label：组件的标签

```ts
export const checkboxProps = {
    checked: {
        type: Boolean,
        default: false,
        required: false
    },
    theme: {
        type: String,
        default: DefaultColor,
        required: false,
        validator(value:ComponentConstants.StandardColor){
            return ComponentConstants.StandardColorArr.includes(value)
        },
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    },

    // 是否处于"不确定状态"    
    unsure: {
        type: Boolean,
        default: false,
        required: false
    },
    modelValue: {
        type: Boolean,
        default: false,
        required: false
    },
    size: {
        type: String,
        default: DefaultSize,
        required: false,
        validator(value:ComponentConstants.StandardSize){
            return ComponentConstants.StandardSizeArr.includes(value)
        }
    },
    label: {
        type: String,
        default: "",
        required: false
    }
};
```



例子：

<div class="line">
    <s-checkbox v-model="select" label="是否堂食" size="large"></s-checkbox>
    <s-checkbox v-model="select" theme="success"  label="是否堂食"></s-checkbox>
    <s-checkbox v-model="select" unsure theme="warning"  label="待确认" size="small"></s-checkbox>
    <s-checkbox disabled label="Disabled"></s-checkbox>
</div>



```vue
<script setup lang='ts'>
    const select = ref( false );

</script>
<template>
    <div>
        <s-checkbox v-model="select" label="是否堂食" size="large"></s-checkbox>
        <s-checkbox v-model="select" theme="success"  label="是否堂食"></s-checkbox>
        <s-checkbox v-model="select" unsure theme="warning"  label="待确认" size="small"></s-checkbox>
        <s-checkbox disabled label="Disabled"></s-checkbox>
  </div>
</template>
```

## Checkbox属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| checked  | box的初始值 | boolean | false                                                | true/false      |
| theme  | box的主题颜色                         | StandardColor |"main"        | "main","info","success","warning","error"     |
| disabled | 是否禁用 | boolean        | false | true/false      |
| unsure | 是否处于不确定状态                      | boolean     | false | true/false      |
| modelValue(对应v-model)| box绑定的值 | boolean | false | true/false |
| size | box的大小   |    StandardSize      | "default" | "large" ,"default", "small" |
| label | box的标签说明   |    string      | 任何一段描述性的string | "" |

<script lang="ts" setup>
import {ref} from 'vue'    
const select = ref( false );
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>  