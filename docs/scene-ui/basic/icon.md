---
title: Icon 图标
---

# Icon 图标

基于BootStrap-icon图标库的图表组件，使用时只需要设置：

* name：代表图标名称，
* color：代表颜色，
* size：代表图标大小（默认宽=高）

图标名称可查看[Bootstrap 图标库](https://icons.bootcss.com/)。

例子：

<div>
    <s-icon class="item" name="github" color="black" :size="24" />
    <s-icon class="item" name="steam" color="#409EFF" :size="24" />
    <s-icon class="item" name="alarm" color="#67C23A" :size="32" />
</div>



```vue
<s-icon name="github" color="black" :size="24" />
<s-icon name="steam" color="#409EFF" :size="24" />
<s-icon name="alarm" color="#67C23A" :size="32" />
```

## Icon属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| name  | 图标名，从bootstrap-icon官网查询 | string         | -                                                | -      |
| size  | 图标大小                         | string\|number | 字符串必须含有css的长度单位(px,rem...)           | -      |
| color | 图标颜色                         | string         | css颜色命名要求(#开头的六位16进制数或颜色字符串) | -      |

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
<style scope>
.item{
    margin-right:10px;
}
</style>    