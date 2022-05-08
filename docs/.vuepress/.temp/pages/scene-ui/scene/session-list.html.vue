<template><h1 id="sessionlist-会话表" tabindex="-1"><a class="header-anchor" href="#sessionlist-会话表" aria-hidden="true">#</a> SessionList 会话表</h1>
<p>它的参数如下</p>
<ul>
<li>metas: sessionlist的元信息,列表所要展示内容的描述，</li>
<li>onTouch: 点击某个子元素时触发的回调</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SessionListPropsType</span> <span class="token punctuation">{</span>
    metas<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> avatar <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    onTouch <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例子：</p>
<div class="line">
    <s-session-list
    :metas="fakeSessionList"
    :onTouch="fakeOnTouchSession">
    </s-session-list>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> fakeSessionList <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"北镇府"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"0"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"新安府"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"安庆府"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fakeOnTouchSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-session-list</span>
        <span class="token attr-name">:metas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fakeSessionList<span class="token punctuation">"</span></span>
        <span class="token attr-name">:onTouch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fakeOnTouchSession<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-session-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="sessionlist属性" tabindex="-1"><a class="header-anchor" href="#sessionlist属性" aria-hidden="true">#</a> SessionList属性</h2>
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
<td>metas</td>
<td>session列表的元信息</td>
<td>Array&lt;{ id: string, title: string, avatar ?: string</td>
<td>null</td>
<td>undefined} &gt;</td>
</tr>
<tr>
<td>onTouch</td>
<td>点击某个子元素时触发的回调</td>
<td>( id: string ) =&gt; any</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'    
    const fakeSessionList = [
        { title: "北镇府", id: "0" },
        { title: "新安府", id: "1" },
        { title: "安庆府", id: "2" }
    ];
    const fakeOnTouchSession = ( id: string ) => {
        window.alert( id );
        console.log( id );
    };
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  