<template><p>单选按钮允许你选择单一的值来提交表单。编写单选框时要考虑的因素有：</p>
<ul>
<li>单选框的表单控件属性，也就是基础的name、value、label属性</li>
<li>单选框的尺寸</li>
<li>单选框是否被禁用</li>
<li>单选框的大小</li>
</ul>
<p>同时保留了单选框的modelValue改变时的change事件，参数是当前modelValue。radio.ts的代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentConstants <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../core/constants'</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token punctuation">{</span>isString <span class="token punctuation">,</span>isNumber<span class="token punctuation">,</span> isBoolean<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../core/lib/type-assert"</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> radioProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    modelValue<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//单选框绑定的值</span>
        type<span class="token operator">:</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">,</span>Boolean<span class="token punctuation">]</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//随表单一起提交的原生的name属性</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//单选框的文本</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        required<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//是否禁用单选框</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//Radio 的尺寸</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> ComponentConstants<span class="token punctuation">.</span>StandardSizeArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> radioEmits <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// onchange函数的验证函数</span>
    <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isBoolean</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">'update:modelValue'</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isBoolean</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>因为无法直接修改input元素的样式，也就是那个选择按钮的样式，因此准备自己实现一个选择的样式，以size=&quot;default&quot;为例，使用<code>opacity</code>隐藏原生radio，再利用绝对布局将其移动到自己画的圆圈的位置。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* size=default */</span>
<span class="token selector">.scene-radio-default input[type="radio"]</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-heighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>利用:before伪元素构造一个圆圈：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.scene-radio-default label:before</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -9px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Radio选中时的特殊样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 选中时圆圈样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:checked + label:before</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px #f4f4f4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 获取焦点时圆圈样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:focus + label:before</span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 选中时文本样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:checked + label</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>完整代码：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-radio<span class="token punctuation">"</span></span> 
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
      `scene-radio-${size}`,
    ]<span class="token punctuation">"</span></span> 
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label === modelValue<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>
      {{label}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>radioProps<span class="token punctuation">,</span> radioEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./radio'</span>
<span class="token keyword">import</span> <span class="token string">'../../styles/global.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'scene-radio'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span>radioProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span>radioEmits<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 组件原生的change事件回调函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span><span class="token string">'undefined'</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>label <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span>props<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      handleChange<span class="token punctuation">,</span>
      handleClick
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.scene-radio</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* size=default */</span>
<span class="token selector">.scene-radio-default input[type="radio"]</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-heighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-default label:before</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -9px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-default label</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* size=small */</span>
<span class="token selector">.scene-radio-small input[type="radio"]</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -7px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-heighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-small label:before</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-small label</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size-small<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* size=large */</span>
<span class="token selector">.scene-radio-large input[type="radio"]</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-heighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-large label:before</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -9px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 250ms ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-radio-large label</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size-large<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 选中时圆圈样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:checked + label:before</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px #f4f4f4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 获取焦点时圆圈样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:focus + label:before</span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 选中时文本样式 */</span>
<span class="token selector">.scene-radio input[type="radio"]:checked + label</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-radio input[type="radio"]:disabled + label:before</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px #f4f4f4<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-disabled<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-radio-border-true</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br></div></div></template>
