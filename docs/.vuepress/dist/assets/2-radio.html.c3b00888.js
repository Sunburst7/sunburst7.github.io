import{_ as n,b as s}from"./app.3c631e33.js";const a={},p=s(`<p>\u7EC4\u4EF6\u7F16\u5199\u521D\u671F\uFF0C\u5BF9\u4E8E\u5355\u9009\u6846\u7684\u7F8E\u5316\u6682\u65F6\u4E0D\u6D89\u53CA</p><p>\u5355\u9009\u6309\u94AE\u5141\u8BB8\u4F60\u9009\u62E9\u5355\u4E00\u7684\u503C\u6765\u63D0\u4EA4\u8868\u5355\u3002\u7F16\u5199\u5355\u9009\u6846\u65F6\u8981\u8003\u8651\u7684\u56E0\u7D20\u6709\uFF1A</p><ul><li>\u5355\u9009\u6846\u7684\u8868\u5355\u63A7\u4EF6\u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F\u57FA\u7840\u7684name\u3001value\u3001label\u5C5E\u6027</li><li>\u5355\u9009\u6846\u7684\u5C3A\u5BF8</li><li>\u5355\u9009\u6846\u662F\u5426\u88AB\u7981\u7528</li><li>\u5355\u9009\u6846\u7684\u5927\u5C0F</li></ul><p>\u540C\u65F6\u4FDD\u7559\u4E86\u5355\u9009\u6846\u7684modelValue\u6539\u53D8\u65F6\u7684change\u4E8B\u4EF6\uFF0C\u53C2\u6570\u662F\u5F53\u524DmodelValue\u3002radio.ts\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> componentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../utils/constant&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>isString <span class="token punctuation">,</span>isNumber<span class="token punctuation">,</span> isBoolean<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../utils/typeAssert&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> radioProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    modelValue<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u5355\u9009\u6846\u7ED1\u5B9A\u7684\u503C</span>
        type<span class="token operator">:</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">,</span>Boolean<span class="token punctuation">]</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u968F\u8868\u5355\u4E00\u8D77\u63D0\u4EA4\u7684\u539F\u751F\u7684name\u5C5E\u6027</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u5355\u9009\u6846\u7684\u6587\u672C</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        required<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u662F\u5426\u7981\u7528\u5355\u9009\u6846</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    border<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u662F\u5426\u663E\u793A\u8FB9\u6846</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//Radio \u7684\u5C3A\u5BF8</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> componentSize<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> radioEmits <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// onchange\u51FD\u6570\u7684\u9A8C\u8BC1\u51FD\u6570</span>
    <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isBoolean</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u56E0\u4E3A\u65E0\u6CD5\u76F4\u63A5\u4FEE\u6539input\u5143\u7D20\u7684\u6837\u5F0F\uFF0C\u4E5F\u5C31\u662F\u90A3\u4E2A\u9009\u62E9\u6309\u94AE\u7684\u6837\u5F0F\uFF0C\u56E0\u6B64\u5728\u5916\u5C42\u5957\u4E86\u4E2Adiv\u7528\u4E8E\u8C03\u6574\u5927\u5C0F\u3001\u8FB9\u6846\u7B49\u7B49\u3002\u6574\u4E2A\u5355\u9009\u6846\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-radio-default<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
            \`scene-radio-\${size}\`,
            \`scene-radio-border-\${border}\`
    ]<span class="token punctuation">&quot;</span></span> 
  <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
            {{label}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>radioProps<span class="token punctuation">,</span> radioEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./radio&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;scene-radio&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span>radioProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span>radioEmits<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u7EC4\u4EF6\u539F\u751F\u7684change\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      handleChange
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.scene-radio-default</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-small</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-large</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 55px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-default:checked</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-default:disabled</span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #b4b4b4<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #b4b4b4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-border-true</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> black 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div>`,7);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
