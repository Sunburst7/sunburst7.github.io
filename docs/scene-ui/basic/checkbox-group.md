---
title: CheckboxGroup 组件
---

# CheckboxGroup组件

### 通过内嵌checkbox或checkboxButton来使用

它的参数如下:
* modelValue( v-model绑定的值 ): array: 当前被选中的标签
可用事件:
@change: 选中值发生改变时触发
```ts
export const checkBoxGroupProps = {
    modelValue: {
        type: Array,
        default: false,
        required: false,
        validator(value:Array<any>){
            for( let ele of value ) {
                if( !isString( ele ) ) {
                    return false;
                }
            }
            return true;
        }
    }

};

export const checkBoxGroupEmits = {
    change: (value:Array<any>) => {
        for( let ele of value ) {
            if( !isString( ele ) ) {
                return false;
            }
        }
        return true;
    }
};
```


例子：

```vue
<script setup lang='ts'>
    const checkLabels = ref( [
    "两广",
    "汉中",
    "大同"
    ] );
    watch( checkLabels, () => {
        console.log( checkLabels.value );
    });

</script>
<template>
    <div class="line">
        <s-checkbox-group v-model="checkLabels">
            <template #default>
                <s-checkbox-button label="两广"></s-checkbox-button>
                <s-checkbox-button label="大同"></s-checkbox-button>
                <s-checkbox-button label="武汉"></s-checkbox-button>
                <div>
                1111
                </div>
            </template>        
        </s-checkbox-group>
        <s-checkbox-group v-model="checkLabels">
            <template #default>
                <s-checkbox label="两广"></s-checkbox>
                <s-checkbox label="大同"></s-checkbox>
                <s-checkbox label="武汉"></s-checkbox>
            </template>  
        </s-checkbox-group>
    </div>
</template>
```

## CheckboxGroup属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| modelValue(对应v-model)| 所有被选中的标签代表的数组 | Array | [] | 一个包含被选中标签的string数组 |


<script lang="ts" setup>
import {ref,watch} from 'vue'    
    const checkLabels = ref( [
        "两广",
        "汉中",
        "大同"
    ] );
    watch( checkLabels, () => {
        console.log( checkLabels.value );
    });
</script>
<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>  