---
title: Input 输入框

---

# Input 输入框

输入单行文本

## 基础用法

最简单的配置是给组件绑定上modelValue与name即可。Input输入框有两种模式：普通文本与密码，密码不可见，通过type设置，默认为text。placeholder是原生属性。

其他一些配置项：

* width：设置输入框的宽度
* readonly：设置是否只读
* clearable：设置输入框是否开启一键清空（type=text的情况下可用）
* center：设置文字是否居中

<div class="line">
    <s-input v-model="str1"
        name="input"
        placeholder="input something"
        type="text"
    	:width="300"
        :readonly="false"
        :clearable="true"
    />
</div>




```vue
<s-input v-model="str1"
        name="input"
        placeholder="input something"
        type="text"
    	:width="300"
        :readonly="false"
        :clearable="true"
        :center="true"
/>
<script lang="ts" setup>
import {ref} from 'vue'
const str1 = ref('')
</script>
```

##  密码框

设置type="password"时input为密码框。

<div class="line">
    <s-input v-model="str2"
        name="input"
        placeholder="password?"
        type="password"
    	:width="300"
        :readonly="false"
        :clearable="true"
        :center="true"
    />
</div>



```vue
<s-input v-model="str2"
    name="input"
    placeholder="password?"
    type="password"
  	:width="300"
    :readonly="false"
    :clearable="true"
    :center="true"
/>
<script lang="ts" setup>
import {ref} from 'vue'
const str2 = ref('')
</script>
```

## 禁用

与原生disabled类似，设置:disabled="true"可实现禁用效果

<div class="line">
    <s-input v-model="str3"
        name="input"
        type="text"
    	:width="300"
        :disabled="true"
    />
</div>



```vue
<s-input v-model="str3"
    name="input"
    type="text"
  	:width="300"
    :disabled="true"
/>
<script lang="ts" setup>
import {ref} from 'vue'
const str3 = ref('')
</script>
```

## 前后缀

可以通过具名插槽的方式设置输入框的前后缀，可以放一些图标或者文字提示之类，**注意插入内容的高度不宜超过22px**。

<div class="line">
    <s-input v-model="str4"
        name="input"
        type="text"
    	:width="300"
        placeholder="search"
    >
      <template #prefix>
        <s-icon name="search" color="#aa00ff" size="16px" />
      </template>
      <template #suffix>
        <s-button size="small">go</s-button>
      </template>
    </s-input>
</div>



```vue
<s-input v-model="str4"
    name="input"
    type="text"
  	:width="300"
    placeholder="search"
>
  <template #prefix>
        <s-icon name="search" color="#aa00ff" size="16px" />
  </template>
  <template #suffix>
        <s-button size="small">go</s-button>
  </template>
</s-input>
<script lang="ts" setup>
import {ref} from 'vue'
const str4 = ref('')
</script>
```

## 验证函数

向`validate`传入一个函数表示验证，函数需要满足一定格式：

* 函数形参是一个string或number代表每次输入的值
* 函数返回值必须是一个长度为2的数组，第一个值表示输入是否成功，第二个值表示提示。

<div class="line">
    <s-input v-model="str5"
        name="input"
        placeholder="input something"
        type="text"
    	:width="300"
        :validate="inputValidator"
    />
</div>



```vue
<s-input v-model="str5"
    name="input"
    placeholder="input something"
    type="text"
    :width="300"
    :validate="inputValidator"
/>
<script lang="ts" setup>
import {ref} from 'vue'
const str5 = ref('')
const inputValidator = (value: string | number)=>{
  if(value.toString().length > 10)
    return [false, 'out of length']
  else
    return [true, 'success!']
}
</script>
```

## Input 属性

| 属性               | 说明                                            | 类型           | 可选值        | 默认值    |
| ------------------ | ----------------------------------------------- | -------------- | ------------- | --------- |
| modelValue/v-model | 输入框绑定的值（必要）                          | string\|number | -             | -         |
| name               | 跟随表单一起提交的原生的name属性                | string         | -             | -         |
| type               | 输入框的类型                                    | string         | text/password | text      |
| placeholder        | 输入框的输入提示                                | string         | -             | input     |
| width              | 输入区域的宽度，不是整个组件的宽度              | number         | -             | 200       |
| disabled           | 输入框是否禁用                                  | boolean        | -             | false     |
| readonly           | 输入框是否只读                                  | boolean        | -             | false     |
| clearable          | 输入框是否开启一键清空（type=text的情况下可用） | boolean        | -             | true      |
| center             | input文本是否居中                               | boolean        | -             | false     |
| validate           | 输入框的值的验证函数，返回值有格式要求          | function       | -             | undefined |

## Input 插槽

| 插槽名 | 说明                                    |
| ------ | --------------------------------------- |
| prefix | 输入框的前端内容，大小不宜超过22px*22px |
| suffix | 输入框的后端内容，大小不宜超过22px*22px |


## Input 事件

| 事件名 | 说明                 | 参数                                         |
| :----- | :------------------- | :------------------------------------------- |
| change | 输入框切换选项时触发 | newVal:string\|number，oldVal:string\|number |
| blur   | 输入框失去焦点时触发 | e: FocusEvent                                |
| focus  | 输入框获得焦点时触发 | e: FocusEvent                                |
| input  | 输入框输入时触发     | val: string\|number                          |

<script lang="ts" setup>
import {ref} from 'vue'
const str1 = ref('')
const str2 = ref('')
const str3 = ref('')
const str4 = ref('')
const str5 = ref('')
const inputValidator = (value: string | number)=>{
  if(value.toString().length > 10)
    return [false, 'out of length']
  else
    return [true, 'success!']
}
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    