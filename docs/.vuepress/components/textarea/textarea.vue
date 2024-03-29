<template>
    <div class="scene-textarea">
        <textarea
            ref="textarea" 
            :name="name"
            v-model="inputValue"
            spellcheck="false"
            :placeholder="placeholder"
            :maxlength="maxLength"
            @input="updateValue"
            @focus="handleFocus"
            @blur="handleBlur"
        ></textarea>
        <span v-if="isFocus" class="scene-textarea-length">
            {{inputValue.length}}/{{maxLength===undefined?'':maxLength}}
        </span>
    </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, ref, toRefs, onMounted} from 'vue'
import {textareaProps, textareaEmits} from './textarea'

export default defineComponent({
  name:'scene-textarea',
  props: textareaProps,
  emits: textareaEmits,
  setup(props,{emit,attrs,slots,expose}){
    const textarea = ref<HTMLTextAreaElement>()

    const data = reactive({
        inputValue: ref<string>(''),
        isFocus: false,
    })

    /**
     * 更新props.modelValue
     */
    function updateValue(event:InputEvent, newVal?: string){
        let oldVal = props.modelValue!
        let target: string;
        if(newVal === undefined){// 用户直接输入
            target = (event.target as HTMLInputElement).value;
            emit('input',target)
        }else{
            // 系统更改
            target = newVal
        }
        // 修改props的modelValue
        emit("update:modelValue",target); 
        // 修改展示的modelValue
        data.inputValue = target
        emit('change',target,oldVal)
        
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
      textarea.value?.focus?.()
    }
    const blur = () => {
      textarea.value?.blur?.()
    }
    
    onMounted(()=>{
        // 设置输入框的宽度与高度
        textarea.value!.style.width = props.width+'px'
        textarea.value!.style.height = props.height+'px'
    })
    return{
        ...toRefs(data),
        textarea,
        updateValue,
        handleFocus,
        handleBlur,
        focus,
        blur,
    }
  }
})
</script>
<style scoped>
.scene-textarea{
    display: inline-flex;
    position: relative;
    flex-direction: row;
    border: var(--scene-border-size) solid var(--scene-border-color-light);
    border-radius: var(--scene-border-radius);

    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
    color: var(--scene-font-color-dark)
}
.scene-textarea:hover{
    border: var(--scene-border-size) solid var(--scene-border-color-dark);
}
/* 文本域主体的子元素有获取焦点时 */
.scene-textarea:focus-within{
    border: var(--scene-border-size) solid var(--scene-theme-color-main);
}
.scene-textarea textarea{
    border: none;
    /*去除点击出现轮廓颜色*/
    outline: none;    
    /*如果有需要，去掉右下角的可拉伸变大小的图标和功能*/
    resize: none;
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
/* 对 input中的placeholder的样式 */
.scene-textarea textarea::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-textarea textarea::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-textarea textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);
}
.scene-textarea textarea::-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--scene-color-Extra-dark-gray);
    font-size: var(--scene-font-size);
    font-family: var(--scene-font-family);
    letter-spacing: var(--scene-letter-spacing);;
}
.scene-textarea-length{
    position: absolute;
    right:0;
    bottom: 0;
}
</style>