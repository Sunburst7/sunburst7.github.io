---
title: input

---

输入框的整体结构并不复杂，主要分为左中右三部分，左右各一个插槽，用于用户自定义内容，中间由一个原生输入框和一个按钮组组成，还有一个提示文本域属于绝对布局：

```vue
<template>
    <div :disabled="disabled">
        <!-- 前面的插槽 最大图标大小 22 -->
        <div v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </div>
        <div>
            <input/>
            <div v-if="(clearable && type==='text') || type==='password'">
                <div class="scene-input-main-plugin-clear" v-if="clearable && type==='text'">
                  <s-icon v-if="inputValue!==''" name="x-circle" color="#2c3e50" :size="12" @click="updateValue(null,'')" />  
                </div>
                <div v-if="type==='password'">
                  <s-icon name="eye" color="#2c3e50" :size="12" v-if="isFocus && isEncrypt"/>  
                  <s-icon name="eye-slash" color="#2c3e50" :size="12" v-if="isFocus && !isEncrypt"/> 
                </div>
            </div>
        </div>
        <div v-if="$slots.suffix">
            <slot name="suffix"></slot>
        </div>
        <div  v-if="validate !== undefined">
            {{warningInfo}}
        </div>
    </div>
</template>
```

对于按钮组的div被渲染的条件是：

* clearable=true且类型是普通文本
* 类型是密码

两个不同的条件渲染两个不同的图标

**输入框的技术要点在于用户通过v-model绑定一个响应性的变量在输入框，正常思路是我们将用户传入的响应性变量再绑定到原生input上，但这样有一个问题就是：当进行输入时会修改props.modelValue，而这个属性是只读的，需要通过`emit`触发`update:modelValue`，因此会错误。**

我的思路是在组件内部再声明一个相应性的变量（后成inputValue）绑定在原生输入框上，当输入时触发原生输入框的input事件，触发函数`updateValue()·`同步props.modelValue与inputValue。

对于不同类型的输入框（普通文本与密码）只需要修改原生输入框的type属性即可，值得注意的是：可以通过CSS属性修改原生密码框的眼睛图标：

```css
/* 去除password默认眼睛 */
input::-ms-clear{display:none;}
input::-ms-reveal{display:none;}
```

而对于验证函数的实现很简单：将输入的值作为参数传入验证函数中获取是否通过与提示文本分别渲染即可。

对于`updateValue(event:InputEvent,newVal?: string|number)`函数分为两种模式：

* 用户直接输入——newVal===undefined
* 手动调用该函数修改——newVal!==undefined

因此当使用该组件的复杂用法时可以尝试使用该函数。

完整代码如下：

```vue
<template>
    <div ref="el" class="scene-input" :disabled="disabled">
        <!-- 前面的图标插槽 最大图标大小 22*22 -->
        <div v-if="$slots.prefix" class="scene-input-slot">
            <slot name="prefix"></slot>
        </div>
        <div class="scene-input-main">
            <input
                ref="input" 
                :name="name"
                :type="inputType"
                v-model="inputValue"
                spellcheck="false"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :style="{'text-align':center===true?'center':'initial'}"
                @input="updateValue"
                @focus="handleFocus"
                @blur="handleBlur"/>
            <div class="scene-input-main-plugin" v-if="(clearable && type==='text') || type==='password'">
                <div class="scene-input-main-plugin-clear" v-if="clearable && type==='text'">
                  <s-icon v-if="inputValue!==''" name="x-circle" color="#2c3e50" :size="12" @click="updateValue(null,'')" />  
                </div>
                <div class="scene-input-main-plugin-eye"  v-if="type==='password'">
                  <s-icon name="eye" color="#2c3e50" :size="12" v-if="isFocus && isEncrypt" @mousedown="showPassword($event,true)"/>  
                  <s-icon name="eye-slash" color="#2c3e50" :size="12" v-if="isFocus && !isEncrypt" @mousedown="showPassword($event,false)"/> 
                </div>
            </div>
        </div>
        <div v-if="$slots.suffix" class="scene-input-slot">
            <slot name="suffix"></slot>
        </div>
        <div ref="tip" v-if="validate !== undefined" class="scene-input-tip">
            {{warningInfo}}
        </div>
    </div>
</template>

<script lang='ts'>
import {computed, toRefs, defineComponent,onMounted,reactive,ref, onUpdated} from 'vue'
import {inputProps, inputEmits} from './input'
import sIcon from '../icon/icon.vue'
import '../../styles/global.css'

export default defineComponent({
  name:'scene-input',
  props: inputProps,
  emits: inputEmits,
  components: {sIcon},
  setup(props,{emit,attrs,slots,expose}){
    // 模板引用
    const input = ref<HTMLInputElement>()
    const tip = ref<HTMLElement>()

    // 组件的内置数据
    const data = reactive({
        // 为什么要设置inputValue，否则当用户输入时会直接修改v-model绑定的modelValue，props is readonly
        inputValue : ref<string | number>(props.modelValue!),// 展示不加密的内置input的v-model值
        isEncrypt: true,// 控制展示加密还是不加密
        // 内置input的类型
        inputType: computed(()=>{
            if(props.type === 'password' && data.isEncrypt === true)
                return 'password'
            else
                return 'text'
        }),
        isFocus: false,
        isWarning: false,
        warningInfo: ''
    })
    
    /**
     * 更新props.modelValue与内置input的值
     */
    function updateValue(event:InputEvent, newVal?: string | number){
        let oldVal = props.modelValue!
        let target;
        if(newVal === undefined){// 用户直接输入
            target = (event.target as HTMLInputElement).value;
            emit('input',target)
        }else{
            // 系统更改
            target = newVal
        }
        // 如果用户输入了validate验证函数
        if(props.validate !== undefined){
            let res = props.validate(target)
            data.warningInfo = res[1]
            // 验证成功
            if(res[0]){
                data.isWarning = false
                // 修改props的modelValue
                emit("update:modelValue",target); 
                // 修改展示的modelValue
                data.inputValue = target
                emit('change',target,oldVal)
            }else{
                data.isWarning = true
                data.inputValue = oldVal
            }
                
        }else{
            // 修改props的modelValue
            emit("update:modelValue",target); 
            // 修改展示的modelValue
            data.inputValue = target
            emit('change',target,oldVal)
        }
    }

    /**
     * 显示密码
     */
    function showPassword(e:Event,show: boolean){
        if(show)// 显示未加密password
            data.isEncrypt = false
        else
            data.isEncrypt = true
        e.preventDefault()
    }

    // 触发外层绑定Focus事件
    const handleFocus = (event: MouseEvent) => {
        data.isFocus = true
        emit('focus', event)
    }
    // 触发外层绑定Blur事件
    const handleBlur = (event: MouseEvent) => {
        data.isFocus = false
        emit('blur', event)
    }
    // 暴漏给外部的方法
    const focus = () => {
      input.value?.focus?.()
    }
    const blur = () => {
      input.value?.blur?.()
    }

    onMounted(()=>{
        // 设置输入框的宽度
        input.value!.style.width = props.width+'px'
    })

    onUpdated(()=>{
        let tipDiv = tip.value
        // 提示信息存在
        if(tipDiv !== undefined){
            tipDiv.style.right = '-'+tipDiv.scrollWidth+'px'
            if(data.isWarning)
                tipDiv.style.color = '#d50000'
            else
                tipDiv.style.color = '#00c853'
        }
            
    })

    return {
        ...toRefs(data),
        input,
        tip,
        updateValue,
        showPassword,
        handleFocus,
        handleBlur,
        focus,
        blur,
    }
  }
})
</script>
<style scoped>
.scene-input{
    display: inline-flex;
    position: relative;
    flex-direction: row;
    border: var(--scene-border-size) solid var(--scene-border-color-light);
    border-radius: var(--scene-border-radius);
}
/* disabled 样式 */
.scene-input[disabled = 'true']{
    background: var(--scene-color-disabled);
    cursor: not-allowed;
}
.scene-input-main input:disabled{
    background: var(--scene-color-disabled);
    cursor: not-allowed;
}

.scene-input:hover{
    border: var(--scene-border-size) solid var(--scene-border-color-dark);
}
/* 选择器主体的子元素有获取焦点时 */
.scene-input:focus-within{
    border: var(--scene-border-size) solid var(--scene-theme-color-main);
}
.scene-input-slot{
    height: 22px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.scene-input-main{
    height: 30px;
    /* width: 230px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.scene-input-main input{
    outline: none;
    border: none;
    height: 26px;
    width: 200px;
    padding: 2px 5px;

    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
    color: var(--scene-font-color-dark)
}
/* 去除password默认眼睛 */
input::-ms-clear{display:none;}
input::-ms-reveal{display:none;}
/* 对 input中的placeholder的样式 */
.scene-input-main input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-input-main input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-input-main input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-input-main input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);;
}
/* input的按钮区域 */
.scene-input-main-plugin{
    padding: 9px 4px;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 删除按钮 */
.scene-input-main-plugin-clear{
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 密码框的可视按钮 */
.scene-input-main-plugin-eye{
    display: flex;
    justify-content: center;
    align-items: center;
}
/* input的验证提示框 */
.scene-input-tip{
    position: absolute;
    top: 0;
    height: 20px;
    padding: 5px;

    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
</style>
```






​    