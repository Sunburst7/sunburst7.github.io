---
title: Datetime 日期时间选择器
---

# Datetime 日期时间选择器

用于输入日期时间，绑定的变量是JS的Date类型的变量。可以选择年月日与时分秒。

使用时，使用v-model指令绑定一个Date对象在日期选择器上，表示默认时间即可：

<div class="line">
    <s-datetime v-model="date" name="time" placeholder="input time"></s-datetime>
</div>



```vue
<s-datetime v-model="date" name="time" placeholder="input time"></s-datetime>
<script lang="ts" setup>
import {ref} from 'vue'
const date = ref(new Date());
</script>
```

## Datetime 属性

| 属性               | 说明                              | 类型    | 可选值 | 默认值 |
| ------------------ | --------------------------------- | ------- | ------ | ------ |
| modelValue/v-model | Datetimes输入框绑定的值（必须的） | JS Date | -      | -      |
| name               | 随表单一起提交的原生的name属性    | string  | -      | -      |
| placeholder        | 输入框没有值的显示内容            | string  | -      | -      |


## Datetime 事件

| 事件名 | 说明                 | 参数                     |
| :----- | :------------------- | :----------------------- |
| change | 选择器切换选项时触发 | newVal:Date，oldVal:Date |
| blur   | 选择器失去焦点时触发 | e: FocusEvent            |
| focus  | 选择器获得焦点时触发 | e: FocusEvent            |

<script lang="ts" setup>
import {ref} from 'vue'
const date = ref(new Date());
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    