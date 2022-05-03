# Scene-UI组件库

scene-ui组件库是山东大学软件学院的学生计划维护的一个开源组件库。计划实现一个开箱即用的组件库以及一个基于该组件库的低代码开发平台。同时实现3个示例网站。

* 主要技术栈：Vue3+TypeScript

* 特点：开箱即用、场景组件、低代码开发平台

## quick start

首先你需要安装最新版的**Scene-UI**：

```npm
npm i scene-ui --save		//生产环境
npm i scene-ui --save-dev	//开发环境
```

接着你需要在main.ts或其他地方导入我们的全局CSS样式：

```typescript
import 'scene-ui/style'
```

之后按需导入你需要的组件即可：

```vue
<script setup lang="ts">
import { SButton } from 'scene-ui'
</script>
<template>
	<s-button>test</s-button>
</template>    
```

## update version

推荐从node_mudules中删除scene-ui依赖包，再重新使用npm下载



