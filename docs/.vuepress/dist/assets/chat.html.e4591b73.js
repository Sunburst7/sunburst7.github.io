import{f as c,r as u,o as l,c as r,a as i,d as k,F as d,b as s}from"./app.6c710a2b.js";const b=s(`<h1 id="chat-\u804A\u5929\u6846" tabindex="-1"><a class="header-anchor" href="#chat-\u804A\u5929\u6846" aria-hidden="true">#</a> Chat \u804A\u5929\u6846</h1><p>\u5B83\u7684\u53C2\u6570\u5982\u4E0B</p><ul><li>chatID: \u6B64\u804A\u5929\u7EC4\u4EF6\u7ED1\u5B9A\u7684ID\uFF0C</li><li>send: \u53D1\u9001\u65F6\u8C03\u7528\u7684\u51FD\u6570\uFF0C</li><li>recieve\uFF1A\u6307\u5B9Achat\u7EC4\u4EF6\u8BE5\u5982\u4F55\u63A5\u6536\u6D88\u606F\u7684\u51FD\u6570</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ChatProps</span> <span class="token punctuation">{</span>
    chatID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token function-variable function">send</span> <span class="token operator">:</span> <span class="token punctuation">(</span> p<span class="token operator">:</span><span class="token punctuation">{</span> chatID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">&gt;</span>
    receive <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> p<span class="token operator">:</span> <span class="token punctuation">{</span> chatID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> ChatMessage<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F8B\u5B50\uFF1A</p>`,5),g={class:"line"},m=s(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> <span class="token function-variable function">fakeChatSend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">r</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fakeChatRecv</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> count<span class="token operator">++</span> <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">r</span><span class="token punctuation">(</span>  <span class="token punctuation">[</span> 
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;dog&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;eff&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;doufu&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;gougou&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span> <span class="token punctuation">)</span> 
    <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fakeChatID <span class="token operator">=</span> <span class="token string">&quot;245&quot;</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exhibition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-chat</span> 
        <span class="token attr-name">:chatID</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeChatID<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:send</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeChatSend<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:receive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeChatRecv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-chat</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="chat\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#chat\u5C5E\u6027" aria-hidden="true">#</a> Chat\u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chatID</td><td>\u804A\u5929\u6846\u7ED1\u5B9A\u7684ID</td><td>string</td><td>-</td><td>-</td></tr><tr><td>send</td><td>\u641C\u7D22\u6309\u94AE\u4E0A\u7684\u6587\u5B57</td><td>( p:{ chatID: string, message: string } ) =&gt; Promise&lt; { done: boolean } &gt;</td><td>-</td><td>-</td></tr><tr><td>recieve</td><td>\u641C\u7D22\u6846\u5185\u7684placeholer</td><td>( p: { chatID: string } ) =&gt; Promise&lt; ChatMessage[] &gt;</td><td>-</td><td>-</td></tr></tbody></table>`,3),C=c({setup(h){const a=()=>new Promise(n=>n({done:!0}));let t=0;const p=()=>new Promise(n=>{t++>=2||n([{content:"dog"},{content:"eff"},{content:"doufu"},{content:"gougou"}])}),e="245";return(n,v)=>{const o=u("s-chat");return l(),r(d,null,[b,i("div",g,[k(o,{chatID:e,send:a,receive:p})]),m],64)}}});export{C as default};
