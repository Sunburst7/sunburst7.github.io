<template><h1 id="chat-聊天框" tabindex="-1"><a class="header-anchor" href="#chat-聊天框" aria-hidden="true">#</a> Chat 聊天框</h1>
<p>它的参数如下</p>
<ul>
<li>chatID: 此聊天组件绑定的ID，</li>
<li>send: 发送时调用的函数，</li>
<li>recieve：指定chat组件该如何接收消息的函数</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ChatProps</span> <span class="token punctuation">{</span>
    chatID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token function-variable function">send</span> <span class="token operator">:</span> <span class="token punctuation">(</span> p<span class="token operator">:</span><span class="token punctuation">{</span> chatID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">></span>
    receive <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> p<span class="token operator">:</span> <span class="token punctuation">{</span> chatID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> ChatMessage<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>例子：</p>
<div class="line">
    <s-chat 
    :chatID="fakeChatID"
    :send="fakeChatSend"
    :receive="fakeChatRecv">
    </s-chat>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> <span class="token function-variable function">fakeChatSend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">r</span> <span class="token operator">=></span> <span class="token function">r</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fakeChatRecv</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">r</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> count<span class="token operator">++</span> <span class="token operator">>=</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">r</span><span class="token punctuation">(</span>  <span class="token punctuation">[</span> 
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"dog"</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"eff"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"doufu"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"gougou"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span> <span class="token punctuation">)</span> 
    <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fakeChatID <span class="token operator">=</span> <span class="token string">"245"</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>exhibition<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-chat</span> 
        <span class="token attr-name">:chatID</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fakeChatID<span class="token punctuation">"</span></span>
        <span class="token attr-name">:send</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fakeChatSend<span class="token punctuation">"</span></span>
        <span class="token attr-name">:receive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fakeChatRecv<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-chat</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="chat属性" tabindex="-1"><a class="header-anchor" href="#chat属性" aria-hidden="true">#</a> Chat属性</h2>
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
<td>chatID</td>
<td>聊天框绑定的ID</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>send</td>
<td>搜索按钮上的文字</td>
<td>( p:{ chatID: string, message: string } ) =&gt; Promise&lt; { done: boolean } &gt;</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>recieve</td>
<td>搜索框内的placeholer</td>
<td>( p: { chatID: string } ) =&gt; Promise&lt; ChatMessage[] &gt;</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'    
    const fakeChatSend = () => new Promise( r => r( { done: true } ) );
    let count = 0;
    const fakeChatRecv = () => new Promise( r => {
    if( count++ >= 2 ) {
        return;
    }
    r(  [ 
        { content: "dog" } ,
        { content: "eff" },
        { content: "doufu" },
        { content: "gougou" }
    ] ) 
    } );
    const fakeChatID = "245";
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>  