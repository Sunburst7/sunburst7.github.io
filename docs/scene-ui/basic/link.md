---
title: Link 链接
---

# 链接 Link

## 基础用法

基础的文字链接用法。

<div>
    <s-link :href="baidu" >default</s-link>
    <s-link :href="baidu" type="primary">primary</s-link>
    <s-link :href="baidu" type="success">success</s-link>
    <s-link :href="baidu" type="warning">warning</s-link>
    <s-link :href="baidu" type="danger">danger</s-link>
    <s-link :href="baidu" type="info">info</s-link>
</div>

```html
<div>
    <s-link :href="baidu" >default</s-link>
    <s-link :href="baidu" type="primary">primary</s-link>
    <s-link :href="baidu" type="success">success</s-link>
    <s-link :href="baidu" type="warning">warning</s-link>
    <s-link :href="baidu" type="danger">danger</s-link>
    <s-link :href="baidu" type="info">info</s-link>
</div>
```

## 禁用状态

文字链接不可用状态。设置:disabled="true"即可

<div>
	<s-link :href="baidu" :disabled="disabled">default</s-link>
    <s-link :href="baidu" type="primary" :disabled="disabled">primary</s-link>
    <s-link :href="baidu" type="success" :disabled="disabled">success</s-link>
    <s-link :href="baidu" type="warning" :disabled="disabled">warning</s-link>
    <s-link :href="baidu" type="danger" :disabled="disabled">danger</s-link>
    <s-link :href="baidu" type="info" :disabled="disabled">info</s-link>
</div>

```html
<div>
    <s-link :href="baidu" :disabled="disabled">default</s-link>
    <s-link :href="baidu" type="primary" :disabled="disabled">primary</s-link>
    <s-link :href="baidu" type="success" :disabled="disabled">success</s-link>
    <s-link :href="baidu" type="warning" :disabled="disabled">warning</s-link>
    <s-link :href="baidu" type="danger" :disabled="disabled">danger</s-link>
    <s-link :href="baidu" type="info" :disabled="disabled">info</s-link>
</div>
<script lang="ts" setup>
import {ref} from 'vue'
 
const disabled = ref(true)
</script>
```

## 下划线设置

文字链接下划线。设置:underline="true"

<div>
	<s-link :href="baidu" :underline="disabled">default</s-link>
    <s-link :href="baidu" type="primary" :underline="disabled">primary</s-link>
    <s-link :href="baidu" type="success" :underline="disabled">success</s-link>
    <s-link :href="baidu" type="warning" :underline="disabled">warning</s-link>
    <s-link :href="baidu" type="danger" :underline="disabled">danger</s-link>
    <s-link :href="baidu" type="info" :underline="disabled">info</s-link>
</div>

```html
<div>
	<s-link :href="baidu" :underline="disabled">default</s-link>
    <s-link :href="baidu" type="primary" :underline="disabled">primary</s-link>
    <s-link :href="baidu" type="success" :underline="disabled">success</s-link>
    <s-link :href="baidu" type="warning" :underline="disabled">warning</s-link>
    <s-link :href="baidu" type="danger" :underline="disabled">danger</s-link>
    <s-link :href="baidu" type="info" :underline="disabled">info</s-link>
</div>

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
```

## 图标

通过设置图标插槽可以添加图标

<div>
    <s-link :href="baidu">
      <template v-slot:icon>
        <img src="/link.svg">
      </template>
      default
    </s-link>
</div>

```html
<div>
    <s-link :href="baidu">
      <template v-slot:icon>
        <img src="/link.svg">
      </template>
      default
    </s-link>
</div>
```

## 属性

| 属性      | 说明           | 类型    | 可选值                                      | 默认值  |
| --------- | -------------- | ------- | ------------------------------------------- | ------- |
| type      | 类型           | string  | primary / success / warning / danger / info | default |
| underline | 是否下划线     | boolean | —                                           | true    |
| disabled  | 是否禁用状态   | boolean | —                                           | false   |
| href      | 原生 href 属性 | string  | —                                           | -       |

## 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |



<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
<style scope>
.scene-link{
   margin:0 5px;
}
</style>



