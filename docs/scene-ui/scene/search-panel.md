---
title: SearchPanel 搜索面板
---

# SearchPanel 搜索面板

它的参数如下

* onSearch: 搜索按钮按下时触发的回调，
* searchSubmitTitle: 搜索按钮上的文字，
* searchPlaceholder：搜索框的placeholder

```ts
interface SearchPanelPropsType {
    onSearch: ( key: string ) => any;
    searchSubmitTitle ?: string;
    searchPlaceholder ?: string;
};
```



例子：

<div class="line">
    <s-search-panel :onSearch="searchSomething"
    searchSubmitTitle="search!"
    searchPlaceholder="your key"/>
</div>



```vue
<script setup lang='ts'>
const searchSomething = ( key:string ) => window.alert( 'in Search' + ' key: ' + key );

</script>
<template>
    <div>
        <s-search-panel :onSearch="searchSomething"
        searchSubmitTitle="search!"
        searchPlaceholder="your key"/>
    </div>

</template>
```

## SearchPanel属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| onSearch  | 搜索时触发的回调 | ( key: string ) => any | -  | - |
| searchSubmitTitle  | 搜索按钮上的文字 | string | - | '搜索' |
| searchPlaceholder | 搜索框内的placeholer | string | - |  'your key'  |

<script lang="ts" setup>
import {ref} from 'vue'    
const searchSomething = ( key:string ) => window.alert( 'in Search' + ' key: ' + key );
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  