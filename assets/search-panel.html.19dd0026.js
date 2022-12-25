import{f as e,r as p,o as u,c,a as o,d as l,F as r,b as n}from"./app.6c710a2b.js";const i=n(`<h1 id="searchpanel-\u641C\u7D22\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#searchpanel-\u641C\u7D22\u9762\u677F" aria-hidden="true">#</a> SearchPanel \u641C\u7D22\u9762\u677F</h1><p>\u5B83\u7684\u53C2\u6570\u5982\u4E0B</p><ul><li>onSearch: \u641C\u7D22\u6309\u94AE\u6309\u4E0B\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\uFF0C</li><li>searchSubmitTitle: \u641C\u7D22\u6309\u94AE\u4E0A\u7684\u6587\u5B57\uFF0C</li><li>searchPlaceholder\uFF1A\u641C\u7D22\u6846\u7684placeholder</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchPanelPropsType</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onSearch</span><span class="token operator">:</span> <span class="token punctuation">(</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    searchSubmitTitle <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    searchPlaceholder <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F8B\u5B50\uFF1A</p>`,5),k={class:"line"},d=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">searchSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span>string</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">&#39;in Search&#39;</span> <span class="token operator">+</span> <span class="token string">&#39; key: &#39;</span> <span class="token operator">+</span> key <span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-search-panel</span> <span class="token attr-name">:onSearch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchSomething<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">searchSubmitTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search!<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">searchPlaceholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>your key<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="searchpanel\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#searchpanel\u5C5E\u6027" aria-hidden="true">#</a> SearchPanel\u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>onSearch</td><td>\u641C\u7D22\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>( key: string ) =&gt; any</td><td>-</td><td>-</td></tr><tr><td>searchSubmitTitle</td><td>\u641C\u7D22\u6309\u94AE\u4E0A\u7684\u6587\u5B57</td><td>string</td><td>-</td><td>&#39;\u641C\u7D22&#39;</td></tr><tr><td>searchPlaceholder</td><td>\u641C\u7D22\u6846\u5185\u7684placeholer</td><td>string</td><td>-</td><td>&#39;your key&#39;</td></tr></tbody></table>`,3),m=e({setup(h){const s=a=>window.alert("in Search key: "+a);return(a,b)=>{const t=p("s-search-panel");return u(),c(r,null,[i,o("div",k,[l(t,{onSearch:s,searchSubmitTitle:"search!",searchPlaceholder:"your key"})]),d],64)}}});export{m as default};