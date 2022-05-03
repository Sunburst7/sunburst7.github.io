---
title: Card 卡片
---

# Card 卡片

是一个特殊容器，将信息聚合在卡片容器中展示，同时有一个边框的阴影效果。其主要prop为：

* header：默认模板的头部信息
* shadow：卡片阴影的出现时机
* bodyStyle：卡片主要内部的样式

值得注意的是，卡片组件的大小是自适应的，但也可以通过直接CSS设置宽高控制。插入自定义头部与主题的信息都依赖于插槽，详情见下方的Card插槽。

当没有提供header或header插槽时，卡片将没有头部栏只有body主体。

## 头部信息

<div class="line">
    <s-card header="Title" shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
        <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
	<s-card shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
		<template #header>
			<div class="card-header">
				<span>Card Name</span>
				<s-button type="text">Operation</s-button>
			</div>
   		</template>
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
</div>



```vue
<s-card header="Title" shadow="always" 
        :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
       <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
</s-card>
<s-card shadow="always" 
        :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
		<template #header>
			<div class="card-header">
				<span>Card Name</span>
				<s-button type="text">Operation</s-button>
			</div>
   		</template>
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
</s-card>

<style>
.square{
  width: 350px;
  height: 250px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```

## 阴影时机

<div class="line">
    <s-card shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
        <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
	<s-card shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
    	<s-card shadow="never" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
</div>



```vue
<s-card header="Title" shadow="always" 
        :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
       <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
</s-card>
<s-card shadow="always" 
        :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
		<template #header>
			<div class="card-header">
				<span>Card Name</span>
				<s-button type="text">Operation</s-button>
			</div>
   		</template>
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
</s-card>

<style>
.square{
  width: 350px;
  height: 250px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```

## Card 属性

| 属性      | 说明             | 类型   | 可选值            | 默认值 |
| --------- | ---------------- | ------ | ----------------- | ------ |
| header    | 默认模板的标题行 | string | -                 | -      |
| shadow    | 显示阴影的时机   | string | always/hover/body | always |
| bodyStyle | 卡片的body的样式 | object | -                 | -      |

##   Card 插槽


| 插槽名     | 说明               |
| ---------- | ------------------ |
| -或default | 卡片的body主题内容 |
| header     | 卡片的头部信息     |

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>
<style scope>
.line{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.square{
  width: 350px;
  height: 250px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
  flex-grow: 1;
}    
</style>    