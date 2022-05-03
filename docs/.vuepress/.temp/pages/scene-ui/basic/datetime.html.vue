<template><h1 id="datetime-日期时间选择器" tabindex="-1"><a class="header-anchor" href="#datetime-日期时间选择器" aria-hidden="true">#</a> Datetime 日期时间选择器</h1>
<p>用于输入日期时间，绑定的变量是JS的Date类型的变量。可以选择年月日与时分秒。</p>
<p>使用时，使用v-model指令绑定一个Date对象在日期选择器上，表示默认时间即可：</p>
<div class="line">
    <s-datetime v-model="date" name="time" placeholder="input time"></s-datetime>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-datetime</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-datetime</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="datetime-属性" tabindex="-1"><a class="header-anchor" href="#datetime-属性" aria-hidden="true">#</a> Datetime 属性</h2>
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
<td>Datetimes输入框绑定的值（必须的）</td>
<td>JS Date</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>随表单一起提交的原生的name属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框没有值的显示内容</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="datetime-事件" tabindex="-1"><a class="header-anchor" href="#datetime-事件" aria-hidden="true">#</a> Datetime 事件</h2>
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
<td style="text-align:left">选择器切换选项时触发</td>
<td style="text-align:left">newVal:Date，oldVal:Date</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">选择器失去焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">选择器获得焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const date = ref(new Date());
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    