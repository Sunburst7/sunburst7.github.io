---
title: Select 选择器
---

# Select 选择器

用于在一些选项中选择一个或多个。

* 当单选时，需要绑定一个响应性变量表示结果
* 当多选时，多选框绑定的值是以逗号分隔的字符串

## 普通单选

设置v-model，name，options即可。

注意：options需要传入一个响应性的数组。

<div class="line">
    <s-select 
          v-model="str1" 
          name="str" 
          :options="options" 
          >
    </s-select>
</div>



```vue
<s-select 
      v-model="str1" 
      name="str" 
      :options="options" 
      >
</s-select>
<script lang="ts" setup>
import {ref} from 'vue'
const options = ref(['option1','option2','option3','option4','option5','option6'])  
const str1 = ref('')
</script>
```

## 禁用选项

给disabledOptions传入一个与options等长的boolean数组，false表示对应索引的项不禁用，true表示禁用。

<div class="line">
    <s-select 
          v-model="str2" 
          name="str" 
          :options="options" 
          :disabledOptions="[false,true,false,false,false,false]">
    </s-select>
</div>



```vue
<s-select 
      v-model="str2" 
      name="str" 
      :options="options" 
      :disabledOptions="[false,true,false,false,false,false]">
</s-select>
<script lang="ts" setup>
import {ref} from 'vue'
const options = ref(['option1','option2','option3','option4','option5','option6'])  
const str2 = ref('')
</script>
```

## 多选

当需要多选功能时，注意multiple表示是否开启多选功能，multiple-limit表示多选的数量限制。

默认多选选项为气泡展示，显示最后一个选择的选项，当前选择选项数与最多选择的选项数。

<div class="line">
    <s-select 
          v-model="str3" 
          :multiple="true" 
          :multiple-limit="3" 
          name="str" 
          :options="options" 
          :disabledOptions="[false,true,false,false,false,false]">
    </s-select>
</div>



```vue
 <s-select 
      v-model="str3" 
      :multiple="true" 
      :multiple-limit="3" 
      name="str" 
      options="options" 
      :disabledOptions="[false,true,false,false,false,false]">
<script lang="ts" setup>
import {ref} from 'vue'
const options = ref(['option1','option2','option3','option4','option5','option6'])  
const str3 = ref('')
</script> 
```

## Select 属性

| 属性            | 说明                                               | 类型             | 可选值 | 默认值 |
| --------------- | -------------------------------------------------- | ---------------- | ------ | ------ |
| modelValue      | 选择器绑定的值                                     | string           | -      | -      |
| name            | 跟随表单一起提交的原生的name属性                   | string           | -      | -      |
| options         | 选择器的选项                                       | array            | -      | -      |
| disabledOptions | 选项们是否被禁用                                   | `Array<boolean>` | -      | -      |
| disabled        | 选择器是否被禁用                                   | Boolean          | -      | false  |
| placeholder     | 选择器的输入提示                                   | string           | -      | string |
| multiple        | 是否多选                                           | boolean          | -      | false  |
| multipleLimit   | 多选的最大选择数                                   | number           | -      | 1      |
| collapseTags    | 多选时是否将选中值按文字的形式展示（默认气泡展示） | boolean          | -      | false  |


## Select 事件

| 事件名 | 说明                 | 参数          |
| :----- | :------------------- | :------------ |
| change | 选择器切换选项时触发 | val:string    |
| blur   | 选择器失去焦点时触发 | e: FocusEvent |
| focus  | 选择器获得焦点时触发 | e: FocusEvent |

<script lang="ts" setup>
import {ref} from 'vue'
const options = ref(['option1','option2','option3','option4','option5','option6'])  
const str1 = ref('')
const str2 = ref('')
const str3 = ref('')
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>    