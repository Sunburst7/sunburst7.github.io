---
title: Dialog 对话框
---

# Dialog 对话框

一个具有遮罩效果的弹出界面。

## 基本使用

使用时在HTML界面任意位置创建`<s-dialog>`，给它的v-model绑定一个相应性boolean变量，使用一个组件控制true/false即可实现打开关闭。

对于对话框的头部，可以使用默认的模板填上title即可，或者插入name="title"的插槽自定义头部。

* `modal`控制是否需要灰色背景遮罩
* `lockScroll`控制当Dialog出现时是否需要滚锁定
* `closeOnClickModal`控制当Dialog出现时，是否可以点击阴影关闭Dialog

```
<s-button @click="showDialog1 = true">Show Modal</s-button>
<s-dialog v-model="showDialog1" 
      title="Tip" 
      :modal="true" 
      :lockScroll="true"
      :closeOnClickModal="true"
>
	click ok to comfirm.
</s-dialog>
<script lang="ts" setup>
import {ref} from 'vue'
const showDialog1 = ref(false)
</script>
```

<div class="line">
    <s-button @click="showDialog1 = true">开启对话框</s-button>
    <s-dialog v-model="showDialog1" 
      title="Tip" 
      :modal="true" 
      :lockScroll="true"
    >
    </s-dialog>
</div>



## 插入自定义内容

对话框不只可以插入文字，还可以插入一些组件：

```vue
<s-button @click="showDialog2 = true">Show Modal</s-button>
<s-dialog v-model="showDialog2" 
      title="title" 
      :modal="true" 
      :lockScroll="true"
      :closeOnClickModal="true"
    >
      <s-card id="card2" style="width:400px" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
        <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button type="text">
              Operation
            </s-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </s-card>
    </s-dialog>
</div>
<script lang="ts" setup>
import {ref} from 'vue'
const showDialog2 = ref(false)
</script>
```

例子：

<div class="line">
    <s-button @click="showDialog2 = true">开启对话框</s-button>
<s-dialog v-model="showDialog2" 
      title="title" 
      :modal="true" 
      :lockScroll="true"
      :closeOnClickModal="true"
    >
      <s-card style="width:400px" id="card2" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
        <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button type="text">
              Operation
            </s-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </s-card>
    </s-dialog>
</div>



## Dialog 属性

| 属性               | 说明                                                         | 类型    | 可选值 | 默认值 |
| ------------------ | ------------------------------------------------------------ | ------- | ------ | ------ |
| modelValue/v-model | 是否显示 Dialog                                              | boolean | -      | true   |
| title              | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入 | string  | -      |        |
| width              | 对话框的container的最小宽度                                  | number  | -      | 400    |
| modal              | 是否需要遮罩层                                               | boolean | -      | true   |
| lockScroll         | 是否在 Dialog 出现时将 body 滚动锁定                         | boolean | -      | false  |
| closeOnClickModal  | 是否可以通过点击 modal 关闭 Dialog                           | boolean | -      | true   |

## Dialog 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 对话框的主体部分 |
| title   | 对话框的标题     |


## Dialog 事件

| 事件名 | 说明                                        | 参数 |
| :----- | :------------------------------------------ | :--- |
| open   | 在对话框被插入到DOM之前被调用               | -    |
| opened | 当过渡动画完成时被调用                      | -    |
| close  | 在对话框准备离开之前被调用                  | -    |
| closed | 在离开过渡完成、且元素已从 DOM 中移除时调用 | -    |

<script lang="ts" setup>
import {ref} from 'vue'
const showDialog1 = ref(false)
const showDialog2 = ref(false)
const showDialog3 = ref(false)
const showDialog4 = ref(false)
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    