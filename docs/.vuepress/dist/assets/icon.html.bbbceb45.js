import{_ as n,b as s}from"./app.98d6146e.js";var a="/assets/bootstrap.597e931e.png",p="/assets/image-20220428141809688.781b2550.png";const t={},e=s('<p>\u4E3A\u4E86\u7EC4\u4EF6\u5E93\u7684\u6574\u4F53\u6027\uFF0C\u8003\u8651\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684icon\u7EC4\u4EF6\u7528\u4E8E\u65B9\u4FBF\u7684\u5F15\u5165\u56FE\u6807\uFF0C\u540C\u65F6\u5F15\u5165\u4E00\u4E2A\u5F00\u6E90\u7684\u56FE\u6807\u5E93\u4F5C\u4E3A\u7EC4\u4EF6\u5E93\u7684\u56FE\u6807\u6765\u6E90\u3002</p><p>\u5F00\u6E90\u56FE\u6807\u5E93\u7684\u9009\u62E9\u65B9\u9762\u6211\u9009\u62E9\u7684\u662Fbootstrap-icon\uFF0C\u4E3B\u8981\u5728\u540E\u671F\u6253\u5305\u65F6\u5728public\u6587\u4EF6\u5939\u4E0B\u7684\u56FE\u6807\u65E0\u6CD5\u6253\u5305\uFF0C\u60F3\u8981\u5728\u7EC4\u4EF6\u5E93\u4E2D\u5F15\u5165\u5FC5\u987B\u5C06\u6BCF\u4E2Asvg\u56FE\u6807\u7F16\u5199\u4E3Avue\u7EC4\u4EF6\uFF0C\u518D\u5BFC\u5165\u3002\u8FD9\u6837\u7684\u4F5C\u6CD5\u5BF9\u4E8E\u5E9E\u5927\u7684svg\u56FE\u6807\u5E93\u663E\u7136\u975E\u5E38\u9EBB\u70E6\u3002</p><p>bootstrap-icon\u6709\u4E2A\u975E\u5E38\u65B9\u4FBF\u7684\u7279\u6027\u2014\u2014\u5B83\u53EF\u4EE5\u901A\u8FC7\u5B57\u4F53\u7684\u5F62\u5F0F\u5BFC\u5165\uFF0C\u53EA\u9700\u8981\u63D0\u4F9Bclass\u540D\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u89E3\u51B3\u901A\u7528icon\u7EC4\u4EF6\u7684\u95EE\u9898\u800C\u4E0D\u9700\u8981\u4E3A\u4E86\u6BCF\u4E2A\u56FE\u6807\u7F16\u5199\u4E00\u4E2A\u7EC4\u4EF6\u3002</p><p><img src="'+a+'" alt=""></p><p>\u6211\u4EEC\u53EA\u9700\u8981\u4E0B\u8F7Dbootstrap-icon\u7684\u5B57\u4F53\u56FE\u6807\u6587\u4EF6\uFF0C\u5BFC\u5165\u5230\u7EC4\u4EF6\u4E2D\u5373\u53EF\uFF1A</p><p><img src="'+p+`" alt="image-20220428141809688"></p><h2 id="\u4E3B\u8981\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u4EE3\u7801" aria-hidden="true">#</a> \u4E3B\u8981\u4EE3\u7801</h2><p>icon.vue\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\`bi-\${name}\`]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;slot&gt;&lt;/slot&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span>computed<span class="token punctuation">,</span> CSSProperties<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> iconProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./icon&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./bootstrap-icons.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;scene-icon&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> iconProps<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>ctx</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u56FE\u6807\u7684\u6837\u5F0F</span>
    <span class="token keyword">const</span> style <span class="token operator">=</span> computed<span class="token operator">&lt;</span>CSSProperties<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>size <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>color<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token keyword">typeof</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token operator">?</span>props<span class="token punctuation">.</span>size<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token operator">:</span>props<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> props<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      style
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>icon.ts\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> iconProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">0</span>
            <span class="token keyword">else</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,11);function o(c,l){return e}var u=n(t,[["render",o]]);export{u as default};
