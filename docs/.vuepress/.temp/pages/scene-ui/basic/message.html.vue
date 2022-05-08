<template><h1 id="message-消息" tabindex="-1"><a class="header-anchor" href="#message-消息" aria-hidden="true">#</a> Message 消息</h1>
<p>它的参数如下</p>
<ul>
<li>type: 样式类型: &quot;info&quot; | &quot;success&quot; | &quot;error&quot; | &quot;warning&quot;</li>
<li>duration: 持续时长 ms</li>
<li>text: 消息框的文字</li>
<li>showCloseButton: 是否显示关闭按钮</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MessageInvokeParams</span> <span class="token punctuation">{</span>
    type <span class="token operator">?</span><span class="token operator">:</span> SceneMessageStyleType<span class="token punctuation">;</span>
    duration <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    text <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    showCloseButton <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例子：</p>
<div class="line">
    <s-button @click="onMessage('info')">
        跳出信息
    </s-button>
    <s-button @click="onMessage('success')">
        跳出成功信息
    </s-button>
    <s-button @click="onMessage('warning')">
        跳出警示信息
    </s-button>
    <s-button @click="onMessage('error')">
        跳出错误信息
    </s-button>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> SceneMessage<span class="token punctuation">,</span> SButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">SceneMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> type <span class="token keyword">as</span> SceneMessageStyleType<span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"成功"</span><span class="token punctuation">,</span> <span class="token literal-property property">showCloseButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">"duration"</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMessage(<span class="token punctuation">'</span>info<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            跳出信息
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMessage(<span class="token punctuation">'</span>success<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            跳出成功信息
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMessage(<span class="token punctuation">'</span>warning<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            跳出警示信息
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMessage(<span class="token punctuation">'</span>error<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            跳出错误信息
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="message-option可用参数" tabindex="-1"><a class="header-anchor" href="#message-option可用参数" aria-hidden="true">#</a> Message Option可用参数</h2>
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
<td>type</td>
<td>message弹出消息的类型</td>
<td>string</td>
<td>&quot;info&quot;</td>
<td>&quot;info&quot;</td>
</tr>
<tr>
<td>duration</td>
<td>显示的持续时长</td>
<td>number</td>
<td>3000</td>
<td>任何一个合适的出现时长(ms)</td>
</tr>
<tr>
<td>text</td>
<td>消息框的提示文字</td>
<td>string</td>
<td>&quot;Tip&quot;</td>
<td>你需要显示的提示消息</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'    
import message, { SceneMessageStyleType } from '../../../../components/message';    
const onMessage = (type: string) => {
    message({type: type as SceneMessageStyleType, text: "成功", showCloseButton: true, "duration": 5000 });
};
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>  