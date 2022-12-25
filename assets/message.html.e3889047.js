import{f as c,r,o as i,c as k,a as d,b as t,w as p,F as b,e as l,m as g,d as e}from"./app.36fc1fbc.js";const F=l(`<h1 id="message-\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#message-\u6D88\u606F" aria-hidden="true">#</a> Message \u6D88\u606F</h1><p>\u5B83\u7684\u53C2\u6570\u5982\u4E0B</p><ul><li>type: \u6837\u5F0F\u7C7B\u578B: &quot;info&quot; | &quot;success&quot; | &quot;error&quot; | &quot;warning&quot;</li><li>duration: \u6301\u7EED\u65F6\u957F ms</li><li>text: \u6D88\u606F\u6846\u7684\u6587\u5B57</li><li>showCloseButton: \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MessageInvokeParams</span> <span class="token punctuation">{</span>
    type <span class="token operator">?</span><span class="token operator">:</span> SceneMessageStyleType<span class="token punctuation">;</span>
    duration <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    text <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    showCloseButton <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F8B\u5B50\uFF1A</p>`,5),m={class:"line"},E=e(" \u8DF3\u51FA\u4FE1\u606F "),h=e(" \u8DF3\u51FA\u6210\u529F\u4FE1\u606F "),y=e(" \u8DF3\u51FA\u8B66\u793A\u4FE1\u606F "),q=e(" \u8DF3\u51FA\u9519\u8BEF\u4FE1\u606F "),v=l(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> SceneMessage<span class="token punctuation">,</span> SButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;scene-ui&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">SceneMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> type <span class="token keyword">as</span> SceneMessageStyleType<span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u6210\u529F&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">showCloseButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMessage(<span class="token punctuation">&#39;</span>info<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u8DF3\u51FA\u4FE1\u606F
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMessage(<span class="token punctuation">&#39;</span>success<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u8DF3\u51FA\u6210\u529F\u4FE1\u606F
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMessage(<span class="token punctuation">&#39;</span>warning<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u8DF3\u51FA\u8B66\u793A\u4FE1\u606F
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMessage(<span class="token punctuation">&#39;</span>error<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u8DF3\u51FA\u9519\u8BEF\u4FE1\u606F
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="message-option\u53EF\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#message-option\u53EF\u7528\u53C2\u6570" aria-hidden="true">#</a> Message Option\u53EF\u7528\u53C2\u6570</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>message\u5F39\u51FA\u6D88\u606F\u7684\u7C7B\u578B</td><td>string</td><td>&quot;info&quot;</td><td>&quot;info&quot;</td></tr><tr><td>duration</td><td>\u663E\u793A\u7684\u6301\u7EED\u65F6\u957F</td><td>number</td><td>3000</td><td>\u4EFB\u4F55\u4E00\u4E2A\u5408\u9002\u7684\u51FA\u73B0\u65F6\u957F(ms)</td></tr><tr><td>text</td><td>\u6D88\u606F\u6846\u7684\u63D0\u793A\u6587\u5B57</td><td>string</td><td>&quot;Tip&quot;</td><td>\u4F60\u9700\u8981\u663E\u793A\u7684\u63D0\u793A\u6D88\u606F</td></tr><tr><td>showCloseButton</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>false</td><td>true/false</td></tr></tbody></table>`,3),f=c({setup(B){const s=o=>{g({type:o,text:"\u6210\u529F",showCloseButton:!0,duration:5e3})};return(o,n)=>{const a=r("s-button");return i(),k(b,null,[F,d("div",m,[t(a,{onClick:n[0]||(n[0]=u=>s("info"))},{default:p(()=>[E]),_:1}),t(a,{onClick:n[1]||(n[1]=u=>s("success"))},{default:p(()=>[h]),_:1}),t(a,{onClick:n[2]||(n[2]=u=>s("warning"))},{default:p(()=>[y]),_:1}),t(a,{onClick:n[3]||(n[3]=u=>s("error"))},{default:p(()=>[q]),_:1})]),v],64)}}});export{f as default};