import{_ as n,b as s}from"./app.98d6146e.js";const a={},p=s(`<p>Card\u7684html\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.header || header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card-head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ header }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card-body<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bodyStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u7528\u6237\u6CA1\u6709\u63D0\u4F9Bheader\u6216header\u63D2\u69FD\u5219\u4E0D\u4F1A\u6E32\u67D3\u7B2C\u4E8C\u884C\u7684div\u3002</p><p>\u5BF9\u4E8E\u5361\u7247\u7684\u9634\u5F71\u7684\u63A7\u5236\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\uFF0C\u8BFB\u53D6props.shadow\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u60C5\u51B5\u6539\u53D8card\u6A21\u677F\u7684style\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> card<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> el<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5BF9\u4E0D\u540C\u7684\u5361\u7247\u51FA\u73B0\u65F6\u673A\u8BBE\u7F6E\u4E0D\u540C\u7684\u9634\u5F71\u6548\u679C</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>shadowTime <span class="token operator">===</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">)</span>
        card<span class="token punctuation">.</span>style<span class="token punctuation">.</span>boxShadow <span class="token operator">=</span> <span class="token string">&quot;0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)&quot;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>shadowTime <span class="token operator">===</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u65E7\u7684 class</span>
        <span class="token class-name"><span class="token keyword">let</span></span> oldClassName <span class="token operator">=</span> card<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span>
        card<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span>oldClassName<span class="token operator">+</span><span class="token string">&#39; scene-card-hover&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u8BBE\u7F6E\u8FC7\u5EA6\u6548\u679C</span>
        card<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&quot;box-shadow 0.5s&quot;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5B8C\u6574\u4EE3\u7801\u2014\u2014card.vue\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.header || header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card-head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ header }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-card-body<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bodyStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>cardProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./card&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;../../styles/global.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;scene-card&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span>cardProps<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5361\u7247\u9634\u5F71\u51FA\u73B0\u7684\u65F6\u673A</span>
    <span class="token keyword">const</span> shadowTime <span class="token operator">=</span> props<span class="token punctuation">.</span>shadow<span class="token punctuation">;</span>
    <span class="token comment">// \u5361\u7247\u5143\u7D20</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token literal-property property">card</span><span class="token operator">:</span> HTMLElement <span class="token operator">=</span> el<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5BF9\u4E0D\u540C\u7684\u5361\u7247\u51FA\u73B0\u65F6\u673A\u8BBE\u7F6E\u4E0D\u540C\u7684\u9634\u5F71\u6548\u679C</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>shadowTime <span class="token operator">===</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">)</span>
        card<span class="token punctuation">.</span>style<span class="token punctuation">.</span>boxShadow <span class="token operator">=</span> <span class="token string">&quot;0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)&quot;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>shadowTime <span class="token operator">===</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u65E7\u7684 class</span>
        <span class="token keyword">let</span> oldClassName <span class="token operator">=</span> card<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span>
        card<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span>oldClassName<span class="token operator">+</span><span class="token string">&#39; scene-card-hover&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u8BBE\u7F6E\u8FC7\u5EA6\u6548\u679C</span>
        card<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&quot;box-shadow 0.5s&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      el
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.scene-card</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-size<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-light-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/** \u8BBE\u7F6E\u5BBD\u9AD8\u4E3A\u52A0\u4E0Aborder\u4E0Epadding\u7684\u5BBD\u9AD8 */</span>

  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-card-hover:hover</span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-box-shadow<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-card-head</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-inner-size<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-light-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/** \u4E0D\u5360\u636E\u5269\u4F59\u7A7A\u95F4 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-card-body</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/** \u5360\u636E\u6240\u6709\u7684\u5269\u4F59\u7A7A\u95F4 */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><p>\u5B8C\u6574\u4EE3\u7801\u2014\u2014card.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> cardProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    header<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shadow<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// \u663E\u793A\u9634\u5F71\u7684\u65F6\u673A</span>
        type<span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hover&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    bodyStyle<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u5361\u7247\u7684 body \u7684\u6837\u5F0F object \u2014 { padding: &#39;20px&#39; }</span>
        type<span class="token operator">:</span>Object
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,9);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
