---
title: CheckboxButton 选择按钮
---

# CheckboxButton 选择按钮

它的参数如下

* checked: 初始值 是否选中，
* theme: checkbox的主题色，
* disabled：是否禁用，
* unsure：是否处于<不确定>状态，
* modelValue：v-model绑定的值 Boolean，
* size：组件的大小，
* label：组件的标签
* leftBorderRound: 是否左侧显示为圆角
* rightBorderRound: 是否右侧显示为圆角
```ts
export const checkboxButtonProps = {
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
    },
    leftBorderRound: {
        type: Boolean,
        default: false,
        required: false
    },

    rightBorderRound: {
        type: Boolean,
        default: false,
        required: false
    }

};
```



例子：

<div>
    <div class="line">
        <s-checkbox-button v-model="select">默认</s-checkbox-button>
        <s-checkbox-button theme="warning" leftBorderRound>左圆</s-checkbox-button>
        <s-checkbox-button theme="success">变色</s-checkbox-button>
        <s-checkbox-button theme="main" disabled>Disabled</s-checkbox-button>
    </div>
    <div class="line">
        <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
        <s-checkbox-button theme="info">你好世界</s-checkbox-button>
        <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
    </div>
</div>



```vue
<script setup lang='ts'>
    const select = ref( false );

</script>
<template>
    <div>
        <div>
            <s-checkbox-button v-model="select">默认</s-checkbox-button>
            <s-checkbox-button theme="warning" leftBorderRound>左圆</s-checkbox-button>
            <s-checkbox-button theme="success">变色</s-checkbox-button>
            <s-checkbox-button theme="main" disabled>Disabled</s-checkbox-button>
        </div>
        <div>
            <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
            <s-checkbox-button theme="info">你好世界</s-checkbox-button>
            <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
        </div>
    </div>
</template>
```

## CheckboxButton属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| checked  | box的初始值 | boolean | false                                                | true/false      |
| theme  | box的主题颜色                         | StandardColor |"main"        | "main","info","success","warning","error"     |
| disabled | 是否禁用 | boolean        | false | true/false      |
| unsure | 是否处于不确定状态                      | boolean     | false | true/false      |
| modelValue(对应v-model)| box绑定的值 | boolean | false | true/false |
| size | box的大小   |    StandardSize      | "default" | "large" ,"default", "small" |
| label | box的标签说明   |    string      | 任何一段描述性的string | "" |
| leftBorderRound | 左边框是否圆角风格 | boolean     | false | true/false      |
| rightBorderRound | 右边框是否圆角风格 | boolean     | false | true/false      |

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