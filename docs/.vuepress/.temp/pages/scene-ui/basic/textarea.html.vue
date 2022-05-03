<template><h1 id="textarea-文本域" tabindex="-1"><a class="header-anchor" href="#textarea-文本域" aria-hidden="true">#</a> Textarea 文本域</h1>
<p>用于输入多行较长的文本。</p>
<p>最简单的使用只需要绑定v-model与设置name即可，可以设置整个文本域的长宽与字数限制。</p>
<div class="line">
	<s-textarea v-model="str" name="info" :width="300" :height="300" :maxLength="30"/>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">:maxLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="textarea-属性" tabindex="-1"><a class="header-anchor" href="#textarea-属性" aria-hidden="true">#</a> Textarea 属性</h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>modelValue/v-model</td>
<td>文本域绑定的值（必要）</td>
<td>string|number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>跟随表单一起提交的原生的name属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>文本域的输入提示</td>
<td>string</td>
<td>-</td>
<td>input</td>
</tr>
<tr>
<td>width</td>
<td>文本域输入区域的宽度，不是整个组件的宽度</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>height</td>
<td>文本域输入区域的宽度，不是整个组件的高度</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>maxLength</td>
<td>文本域输入文字的最大长度</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="textarea-事件" tabindex="-1"><a class="header-anchor" href="#textarea-事件" aria-hidden="true">#</a> Textarea 事件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">change</td>
<td style="text-align:left">文本域切换选项时触发</td>
<td style="text-align:left">newVal:string，oldVal:string</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">文本域失去焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">文本域获得焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">input</td>
<td style="text-align:left">文本域输入时触发</td>
<td style="text-align:left">val: string</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const str = ref('')
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    