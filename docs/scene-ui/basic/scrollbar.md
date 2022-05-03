---
title: Scrollbar 滚动条
---

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

<div class="line">
    <s-scrollbar :width="200" :height="200">
        <div class="scrollbar-line">
            <div v-for="i in 30" :key="i" class="scrollbar-demo-item">
                {{i}}
            </div>
        </div>
    </s-scrollbar>
</div>





```vue
<s-scrollbar :width="200" :height="200">
    <div class="scrollbar-line">
        <div v-for="num in 30" class="scrollbar-demo-item">
                {{num}}
        </div>
    </div>
</s-scrollbar>
<style scope>  
.scrollbar-line{
    display: flex;
    width:300px;
    height:300px;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.scrollbar-demo-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}    
</style>  
```
## Scrollbar 属性

| 属性        | 说明                  | 类型    | 可选值                          | 默认值 |
| ----------- | --------------------- | ------- | ------------------------------- | ------ |
| width       | 可视区域的宽度(必须)  | number  | -                               | -      |
| height      | 可视区域的高度(必须)  | number  | -                               | -      |
| thumbSize   | 滚动条厚度            | number  | -                               | 6      |
| theme       | 滚动条颜色            | string  | main/success/info/warning/error | main   |
| alwaysNeedY | Y轴滚动条是否一直显示 | boolean | -                               | false  |
| alwaysNeedX | X轴滚动条是否一直显示 | boolean | -                               | false  |

## Scrollbar 插槽

| 插槽名    | 说明                                   |
| --------- | -------------------------------------- |
| -/default | 需要添加滚动条的内容，一般比可视区域大 |

## Scrollbar 方法

| 方法名 | 说明                                                         | 参数                                   |
| ------ | ------------------------------------------------------------ | -------------------------------------- |
| moveTo | 控制滚动包裹的元素自动移动 distance px的距离，实现滚动条的移动 | distance: number,direction: 'Y' \| 'X' |

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin:10px;
}    
.scrollbar-line{
    display: flex;
    width:300px;
    height:300px;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.scrollbar-demo-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}    
</style>    