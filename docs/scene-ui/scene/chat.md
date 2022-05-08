---
title: Chat 聊天框
---

# Chat 聊天框

它的参数如下

* chatID: 此聊天组件绑定的ID，
* send: 发送时调用的函数，
* recieve：指定chat组件该如何接收消息的函数

```ts
export interface ChatProps {
    chatID: string,
    send : ( p:{ chatID: string, message: string } ) => Promise< { done: boolean } >
    receive ?: ( p: { chatID: string } ) => Promise< ChatMessage[] >
};
```



例子：

<div class="line">
    <s-chat 
    :chatID="fakeChatID"
    :send="fakeChatSend"
    :receive="fakeChatRecv">
    </s-chat>
</div>



```vue
<script setup lang='ts'>
    const fakeChatSend = () => new Promise( r => r( { done: true } ) );
    let count = 0;
    const fakeChatRecv = () => new Promise( r => {
    if( count++ >= 2 ) {
        return;
    }
    r(  [ 
        { content: "dog" } ,
        { content: "eff" },
        { content: "doufu" },
        { content: "gougou" }
    ] ) 
    } );
    const fakeChatID = "245";

</script>
<template>
    <div class="exhibition">
        <s-chat 
        :chatID="fakeChatID"
        :send="fakeChatSend"
        :receive="fakeChatRecv">
        </s-chat>
    </div>

</template>
```

## Chat属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| chatID  | 聊天框绑定的ID | string | -  | - |
| send | 搜索按钮上的文字 | ( p:{ chatID: string, message: string } ) => Promise< { done: boolean } > | - | - |
| recieve | 搜索框内的placeholer | ( p: { chatID: string } ) => Promise< ChatMessage[] > | - | - |

<script lang="ts" setup>
import {ref} from 'vue'    
    const fakeChatSend = () => new Promise( r => r( { done: true } ) );
    let count = 0;
    const fakeChatRecv = () => new Promise( r => {
    if( count++ >= 2 ) {
        return;
    }
    r(  [ 
        { content: "dog" } ,
        { content: "eff" },
        { content: "doufu" },
        { content: "gougou" }
    ] ) 
    } );
    const fakeChatID = "245";
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  