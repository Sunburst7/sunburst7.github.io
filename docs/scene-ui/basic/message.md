---
title: Message 消息
---

# Message 消息

它的参数如下

* type: 样式类型: "info" | "success" | "error" | "warning"
* duration: 持续时长 ms
* text: 消息框的文字
* showCloseButton: 是否显示关闭按钮

```ts
export interface MessageInvokeParams {
    type ?: SceneMessageStyleType;
    duration ?: number;
    text ?: string;
    showCloseButton ?: boolean;
};
```

例子：

<div class="line">
    <s-button @click="onMessage('info')">
        跳出信息
    </s-button>
    <s-button @click="onMessage('success')">
        跳出成功信息
    </s-button>
    <s-button @click="onMessage('warning')">
        跳出警示信息
    </s-button>
    <s-button @click="onMessage('error')">
        跳出错误信息
    </s-button>
</div>



```vue
<script setup lang='ts'>
    import { SceneMessage, SButton } from 'scene-ui';
    const onMessage = (type: string) => {
        SceneMessage({type: type as SceneMessageStyleType, text: "成功", showCloseButton: true, "duration": 5000 });
    }

</script>
<template>
    <div>
        <s-button @click="onMessage('info')">
            跳出信息
        </s-button>
        <s-button @click="onMessage('success')">
            跳出成功信息
        </s-button>
        <s-button @click="onMessage('warning')">
            跳出警示信息
        </s-button>
        <s-button @click="onMessage('error')">
            跳出错误信息
        </s-button>
    </div>
</template>
```

## Message Option可用参数

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| type  | message弹出消息的类型 | string | "info" | "info" | "success" | "error" | "warning" |
| duration  |  显示的持续时长  | number |   3000   | 任何一个合适的出现时长(ms) |
| text | 消息框的提示文字 | string  | "Tip" | 你需要显示的提示消息 |
| showCloseButton | 是否显示关闭按钮 | boolean | false | true/false   |

<script lang="ts" setup>
import {ref} from 'vue'    
import message, { SceneMessageStyleType } from '../../../../components/message';    
const onMessage = (type: string) => {
    message({type: type as SceneMessageStyleType, text: "成功", showCloseButton: true, "duration": 5000 });
};
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>  