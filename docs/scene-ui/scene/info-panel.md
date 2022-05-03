---
title: Info-Panel 信息板

---

# Info-Panel 信息板

用于展示信息，传入一个对象，将对象的键值优雅的展示在卡片上，注意type属性用于设置图标，名称参考[Bootstrap Icons ](https://icons.getbootstrap.com/)

title表示作为title的属性名，例如：

```js
{
	name:'bob',
	age:14
}
title:name//表示bob作为标题
```

整个信息板采用的是自适应大小，也就是说不用关心每行的长宽，组件会自适应调整达到最佳效果，而只需要关心整体的长宽。

下面是两个例子，分别是不使用插槽与使用插槽：

<div class="line">
    <s-info-panel 
      :width="300"
      :height="300"
      type="person" 
      title="name" 
      :info="person"
    />
    <s-info-panel 
      :width="300"
      :height="300"
      theme="success"
      type="github" 
      title="name" 
      :info="githubObj"
    >
      <template #default>
          <s-icon name="star" color="#ffab00" size="24px" />
        </template>
    </s-info-panel>
</div>



```vue
<s-info-panel 
      :width="300"
      :height="300"
      type="person" 
      title="name" 
      :info="person"
/>
<s-info-panel 
      :width="300"
      :height="300"
      theme="success"
      type="github" 
      title="name" 
      :info="githubObj"
>
  <template #default>
       <s-icon name="star" color="#ffab00" size="24px" />
   </template>
</s-info-panel>

<script lang="ts" setup>
import {ref} from 'vue'
const person = {
    name:'Bob',
    age:'22',
    email:'123456@163.com',
    school:'SDU'
} 
const githubObj = {
  name:"scene-ui",
  synopsis:'a scene-drived ui lib for a more quickly frontend!!!!!!!!!',
  stars:'100',
  forks:'100',
  languageList:['java','vue','ts']
}
</script>
```

## Info-Panel 属性

| 属性   | 说明                                       | 类型           | 可选值                               | 默认值           |
| ------ | ------------------------------------------ | -------------- | ------------------------------------ | ---------------- |
| width  | 信息板宽度                                 | string\|number | -                                    | -                |
| height | 信息板高度                                 | string\|number | -                                    | -                |
| theme  | 信息板颜色主体                             | string         | main/success/info/warning/error      | main             |
| type   | 信息板展示信息类型，主要区别在于左上角图标 | string         | bootstrap-icon图标名称，如（person） | info-square-fill |
| title  | 信息板标题的属性名                         | string         | info.keys()                          | -                |
| info   | 信息板传入的对象                           | object         | -                                    | -                |

## Info-Panel 插槽

| 插槽名    | 说明             |
| --------- | ---------------- |
| -/default | 信息板右上角区域 |

<script lang="ts" setup>
import {ref} from 'vue'
const person = {
    name:'Bob',
    age:'22',
    email:'123456@163.com',
    school:'SDU'
} 
const githubObj = {
  name:"scene-ui",
  synopsis:'a scene-drived ui lib for a more quickly frontend!!!!!!!!!',
  stars:'100',
  forks:'100',
  languageList:['java','vue','ts']
}
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    