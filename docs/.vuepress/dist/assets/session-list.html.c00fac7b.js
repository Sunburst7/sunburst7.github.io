import{f as e,r as o,o as u,c as l,a as c,b as i,F as r,e as n}from"./app.36fc1fbc.js";const k=n(`<h1 id="sessionlist-\u4F1A\u8BDD\u8868" tabindex="-1"><a class="header-anchor" href="#sessionlist-\u4F1A\u8BDD\u8868" aria-hidden="true">#</a> SessionList \u4F1A\u8BDD\u8868</h1><p>\u5B83\u7684\u53C2\u6570\u5982\u4E0B</p><ul><li>metas: sessionlist\u7684\u5143\u4FE1\u606F,\u5217\u8868\u6240\u8981\u5C55\u793A\u5185\u5BB9\u7684\u63CF\u8FF0\uFF0C</li><li>onTouch: \u70B9\u51FB\u67D0\u4E2A\u5B50\u5143\u7D20\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SessionListPropsType</span> <span class="token punctuation">{</span>
    metas<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> avatar <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    onTouch <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F8B\u5B50\uFF1A</p>`,5),d={class:"line"},b=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> fakeSessionList <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u9547\u5E9C&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u5B89\u5E9C&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5B89\u5E86\u5E9C&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fakeOnTouchSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> string</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-session-list</span>
        <span class="token attr-name">:metas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeSessionList<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:onTouch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeOnTouchSession<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-session-list</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="sessionlist\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#sessionlist\u5C5E\u6027" aria-hidden="true">#</a> SessionList\u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>metas</td><td>session\u5217\u8868\u7684\u5143\u4FE1\u606F</td><td>Array&lt;{ id: string, title: string, avatar ?: string</td><td>null</td><td>undefined} &gt;</td></tr><tr><td>onTouch</td><td>\u70B9\u51FB\u67D0\u4E2A\u5B50\u5143\u7D20\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>( id: string ) =&gt; any</td><td>-</td><td>-</td></tr></tbody></table>`,3),y=e({setup(g){const a=[{title:"\u5317\u9547\u5E9C",id:"0"},{title:"\u65B0\u5B89\u5E9C",id:"1"},{title:"\u5B89\u5E86\u5E9C",id:"2"}],t=s=>{window.alert(s),console.log(s)};return(s,m)=>{const p=o("s-session-list");return u(),l(r,null,[k,c("div",d,[i(p,{metas:a,onTouch:t})]),b],64)}}});export{y as default};
