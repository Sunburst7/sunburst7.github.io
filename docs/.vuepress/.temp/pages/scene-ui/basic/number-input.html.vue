<template><h1 id="number-input-数字输入框" tabindex="-1"><a class="header-anchor" href="#number-input-数字输入框" aria-hidden="true">#</a> Number-Input 数字输入框</h1>
<p>只允许设置标准的数字值，可自定义范围，步长</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>要使用它，只需要在 <code>&lt;s-number-input&gt;</code> 元素中使用 <code>v-model</code> 绑定变量即可</p>
<p>其他控制数字输入的属性有：</p>
<ul>
<li><strong>step</strong>：控制每次按钮调整的步长，默认为1</li>
<li><strong>max</strong>：控制数字输入的最大值，默认无穷</li>
<li><strong>min</strong>：控制数字输入的最小值，默认负无穷</li>
</ul>
<p>下面是一个从-10到10的数字选择器，步长为1：</p>
<div class="line">
    <s-number-input name='num' v-model="num1" :max="10" :min="-10" :step="1"/>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-number-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>num<span class="token punctuation">'</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num1<span class="token punctuation">"</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-10<span class="token punctuation">"</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h2>
<p>设置:disabled=&quot;true&quot;即可实现禁用状态</p>
<div class="line">
    <s-number-input name='num' v-model="num2" :max="10" :min="-10" :step="1" :disabled="true"/>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-number-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>num<span class="token punctuation">'</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num2<span class="token punctuation">"</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-10<span class="token punctuation">"</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="number-input-属性" tabindex="-1"><a class="header-anchor" href="#number-input-属性" aria-hidden="true">#</a> Number-Input 属性</h2>
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
<td>name</td>
<td>input原生name属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>input原生label属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>modelValue/v-model</td>
<td>数字输入框双向绑定值</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>step</td>
<td>步长</td>
<td>number</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td>-</td>
<td>Infinity</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td>-</td>
<td>-Infinity</td>
</tr>
<tr>
<td>disabled</td>
<td>是否为禁用状态</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>string</td>
<td>default/small/large</td>
<td>default</td>
</tr>
</tbody>
</table>
<h2 id="number-input-事件" tabindex="-1"><a class="header-anchor" href="#number-input-事件" aria-hidden="true">#</a> Number-Input 事件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">change</td>
<td style="text-align:left">绑定值被改变时触发</td>
<td style="text-align:left">(currentValue: number | NaN, oldValue: number | NaN)</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">在组件 Input 失去焦点时触发</td>
<td style="text-align:left">(event: Event)</td>
</tr>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">在组件 Input 获得焦点时触发</td>
<td style="text-align:left">(event: Event)</td>
</tr>
</tbody>
</table>
<h2 id="number-input-方法" tabindex="-1"><a class="header-anchor" href="#number-input-方法" aria-hidden="true">#</a> Number-Input 方法</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">使 input 组件获得焦点</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">使 input 组件失去焦点</td>
<td style="text-align:left">—</td>
</tr>
</tbody>
</table>
</template>

<script setup>
import {ref} from 'vue'
const num1 = ref(0)
const num2 = ref(0)
</script>

<style scope>
.line{
    display: flex;
    justify-content: center;
    align-items: flex-end
}
</style>
