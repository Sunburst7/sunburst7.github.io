---
title: Radio 单选框
---

# Radio 单选框

单选框用于在一组备选项中进行单选，单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择器而不是单选框。

## 基础用法

一个单选按钮组由**具有相同 `name`属性的单选按钮**组成。 一旦单选按钮组被建立，选择那按钮组的任何单选按钮将会自动取消同组当前选择的任何按钮。

要使用 Radio 组件，只需要设置v-model绑定一个与`label`同类型的变量， 选中意味着v-model绑定的变量会被修改为`label`的值， `label`可以是`String`、`Number` 或 `Boolean`。

size用于调整radio的大小

<div class="line">
    <s-radio v-model="size" name="size" label="small"  size="small"/>
    <s-radio v-model="size" name="size" label="default"  size="default"/>
    <s-radio v-model="size" name="size" label="large"  size="large"/>
</div>


```html
<s-radio v-model="size" name="size" label="small"  size="small"/>
<s-radio v-model="size" name="size" label="default"  size="default"/>
<s-radio v-model="size" name="size" label="large"  size="large"/>

<script lang="ts" setup>
import {ref} from 'vue'
const size = ref('')
</script>
```

## 禁用状态

设置disabled="true"实现禁用。

<div class="line">
    <s-radio v-model="size1" name="size" label="small" :disabled="true"/>
    <s-radio v-model="size1" name="size" label="default" :disabled="true"/>
    <s-radio v-model="size1" name="size" label="large" :disabled="true"/>
</div>


```html
<s-radio v-model="size1" name="size" label="small" :disabled="true"/>
<s-radio v-model="size1" name="size" label="default" :disabled="true"/>
<s-radio v-model="size1" name="size" label="large" :disabled="true"/>
<script lang="ts" setup>
import {ref} from 'vue'
const size1 = ref('')
</script>
```

## Radio 属性

| 属性               | 说明                                            | 类型                  | 可选值              | 默认值  |
| ------------------ | ----------------------------------------------- | --------------------- | ------------------- | ------- |
| modelValue/v-model | 单选框绑定的值                                  | string/number/boolean | -                   | -       |
| name               | 随表单一起提交的原生的name属性                  | string                | -                   | -       |
| label              | 既是单选框的文本，又是单选选中后modelValue 的值 | string                | -                   | -       |
| disabled           | 是否为禁用状态                                  | boolean               | -                   | false   |
| size               | 单选框尺寸                                      | string                | default/small/large | default |

## Radio 事件

| 事件名 | 说明                   | 参数               |
| :----- | :--------------------- | :----------------- |
| change | 绑定值变化时触发的事件 | 绑定的modelValue值 |

<script lang="ts" setup>
import {ref} from 'vue'
const size = ref('')
const size1 = ref('')
</script>
<style scope>
.line{
    display: flex;
    justify-content: center;
    align-items: flex-end
}
</style>
