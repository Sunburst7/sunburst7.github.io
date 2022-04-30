---
title: 3.数字输入框组件
---

数字输入框组件的特点是：

1. 用户只能输入数字，输入其他类型的值会被转化为一个数字。
2. 数字输入框左右侧有两个按钮可以调节数字，可以设置调节的步长
3. 数字输入框有最大值与最小值限制，超过这个值的数字不允许被输入

因此根据这些特点，该组件需要有的属性与事件有：

```typescript
export const numberInputProps = {
    step: {
        type: Number,
        default: 1,
    },
    max: {
        type: Number,
        default: Infinity,
    },
    min: {
        type: Number,
        default: -Infinity,
    },
    modelValue: {
        type: Number,
        default: 0
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: 'default',
        validator(value: string) {
            return componentSizes.includes(value)
        }
    },
    name: String,
    label: String,
}

export const numberInputEmits = {
    change: (cur: number,prev: number,) => isNumber(prev) && isNumber(cur),
    blur: (e: FocusEvent) => e instanceof FocusEvent,
    focus: (e: FocusEvent) => e instanceof FocusEvent,
    input: (val: number) => isNumber(val),
    'update:modelValue': (val: number | undefined) =>
      isNumber(val) || val === undefined,
}
```

`numberInputEmits`是该组件的事件的验证函数，只有函数返回true，外层绑定的回调函数才会触发。组件的最外层用一个div包裹，内部左右两侧各一个按钮，中间是一个输入框：

```html
<template>
<!-- div 没有禁用属性 -->
    <div
      class='scene-number-input-default'
      :class='[
        `scene-number-input-${size}`
      ]'
    >
        <button :disabled="disabled" class="scene-number-input-button" @click="decrease">-</button>
        <input 
            type='text'
            ref="input"
            :name='name'
            :value='modelValue'
            :label='label'
            :disabled="disabled"
            class="scene-number-input-input"
            @blur="handleBlur"
            @focus="handleFocus"
            @input="handleInput"
            @change="handleInputChange"
        />
        <button :disabled="disabled" class="scene-number-input-button" @click="increase">+</button>
    </div>
</template>
```

接下来重点分析JS部分：

input变量定义了`<input>`组件的模板引用，handleFocus/handleBlur定义了当输入框获得/失去焦点时，触发外层组件绑定的@focus/@blur事件的回调函数，参数是event。focus与blur用于用在外层调用使得输入框获得/失去焦点。

```js
  setup(props,{emit,attrs,slots,expose}){
    const input = ref<HTMLInputElement>()

    // 触发外层绑定Focus事件
    const handleFocus = (event: MouseEvent) => {
        emit('focus', event)
    }
    // 触发外层绑定Blur事件
    const handleBlur = (event: MouseEvent) => {
        emit('blur', event)
    }

    // 暴漏外部的方法
    const focus = () => {
      input.value?.focus?.()
    }

    const blur = () => {
      input.value?.blur?.()
    }
    
    return{
        input,
        handleFocus,
        handleBlur,
        focus,
        blur,
    }
  }
```

定义一个响应性对象，保存当前输入框值与用户输入值：

```typescript
// 保存改变时的新值与旧值，旧值只有在用户输入时才保存
    const data = reactive<{
        currentValue: number,
        userInput: number | null
    }>({
        currentValue: props.modelValue,
        userInput: null,
    })
```

当用户输入时，触发input的@input="handleInput"，保存用户输入值到userInput中，如果用户输入的不是数字，则自动转为0：

```typescript
// 输入事件，用于保存用户输入的值
    const handleInput = (event: InputEvent) => {
        if(event.data){
            let inputVal = parseInt(event.data) // 尝试将输入的值转为Number
            data.userInput  = isNaN(inputVal)? 0 : inputVal
        }
        else{
            data.userInput = 0                  // 用户输入的值为空，自动设为默认值0
        }
        // 同时也会触发handleInputChange函数
    }
```

同时由于v-model改变也会触发@change事件的回调函数handleInputChange：

```typescript
// 用户手动输入时，触发外层绑定的Change事件
    const handleInputChange = (event: Event) => {
        const newVal = data.userInput
        // 虽然newValue不可能为null，但是newValue的类型是number | null，要加上相应的控制
        if ((isNumber(newVal) && !Number.isNaN(newVal)) && newVal !== null) {
            setCurrentValue(newVal)
        }
        data.userInput = null
    }
```

重点分析`setCurrentValue`方法，该方法用于改变v-model双向绑定的值以及data.currentValue：

```typescript
const instance = getCurrentInstance(); //访问内部组件实例   

//改变当前绑定的值的方法,newVal为新的值，在点击-或+按钮时 以及用户手动输入时触发
const setCurrentValue = (newVal: number) => {
    const oldVal = props.modelValue
    if (newVal !== undefined && newVal >= props.max) newVal = props.max //不超过最大值
    if (newVal !== undefined && newVal <= props.min) newVal = props.min //不超过最小值
    if (oldVal === newVal){
     //连续两次出错应该如何重新渲染页面？ 外层v-model绑定的值没有修改 没法触发渲染
        instance?.proxy?.$forceUpdate();    // 强制强制重新渲染
        return 
    }
    if (!isNumber(newVal)) {
        newVal = 0                     // 输入的不是数字，改为默认值
    }
    data.userInput = null
    emit('update:modelValue', newVal)   // 更改外层的v-model绑定的值，modelValue是readonly常量，修改其值需要触发update
    emit('change', newVal, oldVal)      // 触发change事件，传入新值与旧值
    data.currentValue = newVal          // 更新data.currentvalue
}
```

::: tip
在 3.x 中，自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

因此修改v-model绑定值时要触发update:modelValue事件
:::


button的click事件只要调用我们setCurrentValue方法即可：

```typescript
// 数字按步长减小
const decrease = ()=>{
    // console.log('decrease');
    setCurrentValue(props.modelValue - props.step)
}
// 数字按步长增加
const increase = ()=>{
    // console.log('increase');
    setCurrentValue(props.modelValue + props.step)
}
```

编写组件遇到的错误：

* Vue3 setup语法中，使用模板引用时，需要将引用的JS变量return，才可以生效，否则无法引用到对应的DOM元素

    ```js
    setup(props,{emit,attrs,slots,expose}){
        const input = ref<HTMLInputElement>()
        
        return{
            input,
        }
    }
    ```

* div元素是没有disabled属性的，因此实现禁用效果的话要从内部的button与input入手

