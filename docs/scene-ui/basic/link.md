---
title: Link 链接
---

# Link 链接

进行跳转的文字超链接

## 基础用法

基础的文字链接用法。有五种主题可以选择

<div>
    <s-link :href="baidu" theme="main">main</s-link>
    <s-link :href="baidu" theme="success">success</s-link>
    <s-link :href="baidu" theme="warning">warning</s-link>
    <s-link :href="baidu" theme="error">error</s-link>
    <s-link :href="baidu" theme="info">info</s-link>
</div>




```vue
<div>
    <s-link :href="baidu" theme="main">main</s-link>
    <s-link :href="baidu" theme="success">success</s-link>
    <s-link :href="baidu" theme="warning">warning</s-link>
    <s-link :href="baidu" theme="error">error</s-link>
    <s-link :href="baidu" theme="info">info</s-link>
</div>
<script lang="ts" setup>
import {ref} from 'vue'
    
const baidu = ref('www.baidu.com')
</script>
```

## 禁用状态

文字链接不可用状态。设置:disabled="true"即可

<div>
    <s-link :href="baidu" theme="main" :disabled="disabled">main</s-link>
    <s-link :href="baidu" theme="success" :disabled="disabled">success</s-link>
    <s-link :href="baidu" theme="warning" :disabled="disabled">warning</s-link>
    <s-link :href="baidu" theme="error" :disabled="disabled">error</s-link>
    <s-link :href="baidu" theme="info" :disabled="disabled">info</s-link>
</div>




```html
<div>
    <s-link :href="baidu" theme="main" :disabled="disabled">main</s-link>
    <s-link :href="baidu" theme="success" :disabled="disabled">success</s-link>
    <s-link :href="baidu" theme="warning" :disabled="disabled">warning</s-link>
    <s-link :href="baidu" theme="error" :disabled="disabled">danger</s-link>
    <s-link :href="baidu" theme="info" :disabled="disabled">info</s-link>
</div>
<script lang="ts" setup>
import {ref} from 'vue'
const baidu = ref('www.baidu.com')
const disabled = ref(true)
</script>
```

## 下划线设置

文字链接下划线。设置:underline="true"

<div>
    <s-link :href="baidu" theme="main" :underline="underline">main</s-link>
    <s-link :href="baidu" theme="success" :underline="underline">success</s-link>
    <s-link :href="baidu" theme="warning" :underline="underline">warning</s-link>
    <s-link :href="baidu" theme="error" :underline="underline">error</s-link>
    <s-link :href="baidu" theme="info" :underline="underline">info</s-link>
</div>




```html
<div>
    <s-link :href="baidu" theme="main" :underline="underline">main</s-link>
    <s-link :href="baidu" theme="success" :underline="underline">success</s-link>
    <s-link :href="baidu" theme="warning" :underline="underline">warning</s-link>
    <s-link :href="baidu" theme="error" :underline="underline">error</s-link>
    <s-link :href="baidu" theme="info" :underline="underline">info</s-link>
</div>

<script lang="ts" setup>
import {ref} from 'vue'
const underline = ref(true)
const baidu = ref('www.baidu.com')
</script>
```

## 图标

通过设置图标插槽可以添加图标

<div>
    <s-link :href="baidu">
      <template #icon>
        <s-icon name="link" :size="16" color="#7200ca" />
      </template>
      default
    </s-link>
</div>




```html
<div>
    <s-link :href="baidu">
      <template v-slot:icon>
         <s-icon name="link" :size="16" color="#7200ca" />
      </template>
      default
    </s-link>
</div>
```

## 属性

| 属性      | 说明           | 类型    | 可选值                                  | 默认值 |
| --------- | -------------- | ------- | --------------------------------------- | ------ |
| type      | 类型           | string  | main / success / warning / error / info | main   |
| underline | 是否下划线     | boolean | —                                       | true   |
| disabled  | 是否禁用状态   | boolean | —                                       | false  |
| href      | 原生 href 属性 | string  | —                                       | -      |

## 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |



<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
const underline = ref(true)
const baidu = ref('www.baidu.com')
</script>
<style scope>
.scene-link{
   margin:0 5px;
}
</style>


