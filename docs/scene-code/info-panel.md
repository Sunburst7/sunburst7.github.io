---
title: info-panel
---

信息板的实现比较简单，其中有三个要点：

* 使用v-for="(value,key,index) in info" 遍历对象展示信息，标题的属性不需要再展示在主体内容上，因此使用v-if对key进行判断
* 当属性是数组直接输出内容不好看，可以进行一个变换：`Array.isArray(value)?value.join(' '):value`
* 自适应的效果实现主要依靠flex布局中的flex-grow:1，使得每行平分剩余空间

源代码：

```vue
<template>
    <s-card :bodyStyle="{
        boxSizing: 'border-box',
        width: typeof width === 'number'?width+'px':width,
        height: typeof height === 'number'?height+'px':height,
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }">
        <div class="scene-infoPanel-header">
            <div class="scene-infoPenal-header-left">
                <s-icon class="scene-infoPanel-icon" 
                    size="24px" :name="type"
                    :color="themeColor"
                ></s-icon>
                <div class="scene-infoPanel-title" :style="{color:themeColor}">{{info.hasOwnProperty(title)?info[title]:'Title'}}</div>
            </div>
            <slot></slot>
        </div>
        <template v-for="(value,key,index) in info" :key="index">
            <div class="scene-infoPanel-info" v-if="key!==title">
                <div class="scene-infoPanel-subtitle">
                    {{key}}
                </div>
                <div class="scene-infoPanel-subinfo">
                    {{Array.isArray(value)?value.join(' '):value}}
                </div>
            </div>
        </template>
        
    </s-card>
</template>

<script lang='ts'>
import {defineComponent,computed} from 'vue'
import {infoPanelProps} from './info-panel'
import { ComponentConstants } from '../../../core/constants'; 
import sCard from '../../card/card.vue'
import sIcon from '../../icon/icon.vue'
 
export default defineComponent({
  name:'scene-info-panel',
  props:infoPanelProps,
  components:{sCard,sIcon},
  setup(props,{emit,attrs,slots,expose}){
      let themeColor = computed(()=>{
          return ComponentConstants.ThemeColorMap.get(props.theme+'-dark')
      })

    return{
        themeColor
    }
  }
})
</script>
<style scoped>
/* 信息面板头部 */
.scene-infoPanel-header{
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 3px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.scene-infoPenal-header-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
/* 信息面板图标 */
.scene-infoPanel-icon{
    margin-right: 10px;
}
/* 信息面板标题 */
.scene-infoPanel-title{
    font-family: var(--scene-font-family);
    font-size: var(--scene-font-size-large);
    letter-spacing: var(--scene-letter-large-spacing);
}
/* 信息面板 主要信息 */
.scene-infoPanel-info{
    width: 100%;
    flex-grow: 1; /** 高度上平分剩余空间 */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.scene-infoPanel-subtitle{
    width: 25%;
    display: flex;
    justify-content: flex-start;
    word-break: break-all; /** 对字体强制换行 */
    color: var(--scene-font-color-dark)
}
.scene-infoPanel-subinfo{
    width: 75%;
    display: flex;
    justify-content: flex-start;
    color: var(--scene-color-Extra-dark-gray)
}
</style>
```

