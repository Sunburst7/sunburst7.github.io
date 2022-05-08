<template><h1 id="paymentinput-支付输入框" tabindex="-1"><a class="header-anchor" href="#paymentinput-支付输入框" aria-hidden="true">#</a> PaymentInput 支付输入框</h1>
<p>它的参数如下</p>
<ul>
<li>theme: 主题色，</li>
<li>disabled：是否禁用，</li>
<li>modelValue：v-model绑定的值 string，</li>
<li>numberOnly：是否只允许输入数字，</li>
<li>onFill: 密码框填满的时候触发的回调</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentInputProps</span> <span class="token punctuation">{</span>
    theme <span class="token operator">?</span><span class="token operator">:</span> ComponentConstants<span class="token punctuation">.</span>StandardColor<span class="token punctuation">;</span>
    disabled <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    modelValue <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    numberOnly <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">// 密码框填满时触发的回调</span>
    onFill <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> pwd<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>例子：</p>
<div>
    <s-payment-input v-model="pwd"/>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> pwd <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span> <span class="token string">''</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-payment-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pwd<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="payment-input属性" tabindex="-1"><a class="header-anchor" href="#payment-input属性" aria-hidden="true">#</a> payment-input属性</h2>
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
<td>theme</td>
<td>paymentInput主题颜色</td>
<td>StandardColor</td>
<td>&quot;main&quot;</td>
<td>&quot;main&quot;,&quot;info&quot;,&quot;success&quot;,&quot;warning&quot;,&quot;error&quot;</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>modelValue(对应v-model)</td>
<td>paymentInput绑定的值</td>
<td>string</td>
<td>一个字符串</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>numberOnly</td>
<td>输入框是否只能填入数字</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>onFill</td>
<td>输入框填满的时候的回调</td>
<td>( pwd: string ) =&gt; any</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'    
    const pwd = ref( '' );
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  