<template><h1 id="searchpanel-搜索面板" tabindex="-1"><a class="header-anchor" href="#searchpanel-搜索面板" aria-hidden="true">#</a> SearchPanel 搜索面板</h1>
<p>它的参数如下</p>
<ul>
<li>onSearch: 搜索按钮按下时触发的回调，</li>
<li>searchSubmitTitle: 搜索按钮上的文字，</li>
<li>searchPlaceholder：搜索框的placeholder</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchPanelPropsType</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onSearch</span><span class="token operator">:</span> <span class="token punctuation">(</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    searchSubmitTitle <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    searchPlaceholder <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>例子：</p>
<div class="line">
    <s-search-panel :onSearch="searchSomething"
    searchSubmitTitle="search!"
    searchPlaceholder="your key"/>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">searchSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span>string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">'in Search'</span> <span class="token operator">+</span> <span class="token string">' key: '</span> <span class="token operator">+</span> key <span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-search-panel</span> <span class="token attr-name">:onSearch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchSomething<span class="token punctuation">"</span></span>
        <span class="token attr-name">searchSubmitTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search!<span class="token punctuation">"</span></span>
        <span class="token attr-name">searchPlaceholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your key<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="searchpanel属性" tabindex="-1"><a class="header-anchor" href="#searchpanel属性" aria-hidden="true">#</a> SearchPanel属性</h2>
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
<td>onSearch</td>
<td>搜索时触发的回调</td>
<td>( key: string ) =&gt; any</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>searchSubmitTitle</td>
<td>搜索按钮上的文字</td>
<td>string</td>
<td>-</td>
<td>'搜索'</td>
</tr>
<tr>
<td>searchPlaceholder</td>
<td>搜索框内的placeholer</td>
<td>string</td>
<td>-</td>
<td>'your key'</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'    
const searchSomething = ( key:string ) => window.alert( 'in Search' + ' key: ' + key );
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  