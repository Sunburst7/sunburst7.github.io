---
title: Textarea 文本域

---

# Textarea 文本域

用于输入多行较长的文本。

最简单的使用只需要绑定v-model与设置name即可，可以设置整个文本域的长宽与字数限制。

<div class="line">
	<s-textarea v-model="str" name="info" :width="300" :height="300" :maxLength="30"/>
</div>



```vue
<s-textarea v-model="str" name="info" :width="200" :height="200" :maxLength="2"/>
<script lang="ts" setup>
import {ref} from 'vue'
const str = ref('')
</script>
```

## Textarea 属性

| 属性               | 说明                                     | 类型           | 可选值 | 默认值 |
| ------------------ | ---------------------------------------- | -------------- | ------ | ------ |
| modelValue/v-model | 文本域绑定的值（必要）                   | string\|number | -      | -      |
| name               | 跟随表单一起提交的原生的name属性         | string         | -      | -      |
| placeholder        | 文本域的输入提示                         | string         | -      | input  |
| width              | 文本域输入区域的宽度，不是整个组件的宽度 | number         | -      | 200    |
| height             | 文本域输入区域的宽度，不是整个组件的高度 | number         | -      | 200    |
| maxLength          | 文本域输入文字的最大长度                 | number         | -      | -      |


## Textarea 事件

| 事件名 | 说明                 | 参数                         |
| :----- | :------------------- | :--------------------------- |
| change | 文本域切换选项时触发 | newVal:string，oldVal:string |
| blur   | 文本域失去焦点时触发 | e: FocusEvent                |
| focus  | 文本域获得焦点时触发 | e: FocusEvent                |
| input  | 文本域输入时触发     | val: string                  |

<script lang="ts" setup>
import {ref} from 'vue'
const str = ref('')
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    