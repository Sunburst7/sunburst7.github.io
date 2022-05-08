---
title: PaymentInput 支付输入框
---

# PaymentInput 支付输入框

它的参数如下

* theme: 主题色，
* disabled：是否禁用，
* modelValue：v-model绑定的值 string，
* numberOnly：是否只允许输入数字，
* onFill: 密码框填满的时候触发的回调
```ts
export interface PaymentInputProps {
    theme ?: ComponentConstants.StandardColor;
    disabled ?: boolean;
    modelValue ?: string;
    numberOnly ?: boolean;
    // 密码框填满时触发的回调
    onFill ?: ( pwd: string ) => any;
};
```

例子：

<div>
    <s-payment-input v-model="pwd"/>
</div>



```vue
<script setup lang='ts'>
    const pwd = ref( '' );

</script>
<template>
    <div>
        <s-payment-input v-model="pwd"/>
    </div>
</template>
```

## payment-input属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| theme  | paymentInput主题颜色                         | StandardColor |"main"        | "main","info","success","warning","error"     |
| disabled | 是否禁用 | boolean        | false | true/false      |
| modelValue(对应v-model)| paymentInput绑定的值 | string | 一个字符串 | "" |
| numberOnly | 输入框是否只能填入数字 | boolean     | false | true/false      |
| onFill | 输入框填满的时候的回调 | ( pwd: string ) => any     | - | - |

<script lang="ts" setup>
import {ref} from 'vue'    
    const pwd = ref( '' );
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  