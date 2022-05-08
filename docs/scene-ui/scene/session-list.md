---
title: SessionList 会话表
---

# SessionList 会话表

它的参数如下

* metas: sessionlist的元信息,列表所要展示内容的描述，
* onTouch: 点击某个子元素时触发的回调

```ts
interface SessionListPropsType {
    metas: { id: string, title: string, avatar ?: string | null | undefined }[];
    onTouch ?: ( id: string ) => any;
};
```



例子：

<div class="line">
    <s-session-list
    :metas="fakeSessionList"
    :onTouch="fakeOnTouchSession">
    </s-session-list>
</div>



```vue
<script setup lang='ts'>
    const fakeSessionList = [
        { title: "北镇府", id: "0" },
        { title: "新安府", id: "1" },
        { title: "安庆府", id: "2" }
    ];
    const fakeOnTouchSession = ( id: string ) => {
        window.alert( id );
        console.log( id );
    };

</script>
<template>
    <div>
        <s-session-list
        :metas="fakeSessionList"
        :onTouch="fakeOnTouchSession">
        </s-session-list>
    </div>

</template>
```

## SessionList属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| metas  | session列表的元信息 | Array<{ id: string, title: string, avatar ?: string | null | undefined} > | -  | - |
| onTouch  | 点击某个子元素时触发的回调 | ( id: string ) => any | - | -|

<script lang="ts" setup>
import {ref} from 'vue'    
    const fakeSessionList = [
        { title: "北镇府", id: "0" },
        { title: "新安府", id: "1" },
        { title: "安庆府", id: "2" }
    ];
    const fakeOnTouchSession = ( id: string ) => {
        window.alert( id );
        console.log( id );
    };
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  