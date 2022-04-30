<template><p>为了组件库的整体性，考虑编写一个通用的icon组件用于方便的引入图标，同时引入一个开源的图标库作为组件库的图标来源。</p>
<p>开源图标库的选择方面我选择的是bootstrap-icon，主要在后期打包时在public文件夹下的图标无法打包，想要在组件库中引入必须将每个svg图标编写为vue组件，再导入。这样的作法对于庞大的svg图标库显然非常麻烦。</p>
<p>bootstrap-icon有个非常方便的特性——它可以通过字体的形式导入，只需要提供class名，这样就可以解决通用icon组件的问题而不需要为了每个图标编写一个组件。</p>
<p><img src="@source/scene-code/icon/bootstrap.png" alt=""></p>
<p>我们只需要下载bootstrap-icon的字体图标文件，导入到组件中即可：</p>
<p><img src="@source/scene-code/icon/image-20220428141809688.png" alt="image-20220428141809688"></p>
<h2 id="主要代码" tabindex="-1"><a class="header-anchor" href="#主要代码" aria-hidden="true">#</a> 主要代码</h2>
<p>icon.vue：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[`bi-${name}`]<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$attrs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- &lt;slot>&lt;/slot> --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span>computed<span class="token punctuation">,</span> CSSProperties<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> iconProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./icon'</span>
<span class="token keyword">import</span> <span class="token string">'./bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'scene-icon'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> iconProps<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>ctx</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 图标的样式</span>
    <span class="token keyword">const</span> style <span class="token operator">=</span> computed<span class="token operator">&lt;</span>CSSProperties<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>size <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>color<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token keyword">typeof</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">'number'</span><span class="token operator">?</span>props<span class="token punctuation">.</span>size<span class="token operator">+</span><span class="token string">'px'</span><span class="token operator">:</span>props<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> props<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      style
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>icon.ts：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> iconProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> value <span class="token operator">></span> <span class="token number">0</span>
            <span class="token keyword">else</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
