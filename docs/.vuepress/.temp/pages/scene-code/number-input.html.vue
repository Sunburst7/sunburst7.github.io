<template><p>数字输入框组件的特点是：</p>
<ol>
<li>用户只能输入数字，输入其他类型的值会被转化为一个数字。</li>
<li>数字输入框左右侧有两个按钮可以调节数字，可以设置调节的步长</li>
<li>数字输入框有最大值与最小值限制，超过这个值的数字不允许被输入</li>
</ol>
<p>因此根据这些特点，该组件需要有的属性与事件有：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> numberInputProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    step<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    min<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    modelValue<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> componentSizes<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> String<span class="token punctuation">,</span>
    label<span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> numberInputEmits <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token punctuation">(</span>cur<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>prev<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">isNumber</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">blur</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> FocusEvent<span class="token punctuation">)</span> <span class="token operator">=></span> e <span class="token keyword">instanceof</span> <span class="token class-name">FocusEvent</span><span class="token punctuation">,</span>
    <span class="token function-variable function">focus</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> FocusEvent<span class="token punctuation">)</span> <span class="token operator">=></span> e <span class="token keyword">instanceof</span> <span class="token class-name">FocusEvent</span><span class="token punctuation">,</span>
    <span class="token function-variable function">input</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">'update:modelValue'</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><code>numberInputEmits</code>是该组件的事件的验证函数，只有函数返回true，外层绑定的回调函数才会触发。组件的最外层用一个div包裹，内部左右两侧各一个按钮，中间是一个输入框，输入框使用的scene-ui的input组件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- div 没有禁用属性 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>scene-number-input-default<span class="token punctuation">'</span></span><span class="token punctuation">></span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> 
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text<span class="token punctuation">'</span></span>
            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>name<span class="token punctuation">'</span></span>
            <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>modelValue<span class="token punctuation">'</span></span>
            <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span>
            <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
            <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
            <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
            <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-number-input-input<span class="token punctuation">"</span></span>
            <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleBlur<span class="token punctuation">"</span></span>
            <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleFocus<span class="token punctuation">"</span></span>
            <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleInput<span class="token punctuation">"</span></span>
            <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleInputChange<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prefix</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-number-input-button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrease<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>➖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#suffix</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-number-input-button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increase<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>➕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>接下来重点分析JS部分：</p>
<p>input变量定义了<code>&lt;input&gt;</code>组件的模板引用，handleFocus/handleBlur定义了当输入框获得/失去焦点时，触发外层组件绑定的@focus/@blur事件的回调函数，参数是event。focus与blur用于用在外层调用使得输入框获得/失去焦点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 触发外层绑定Focus事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 触发外层绑定Blur事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'blur'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 暴漏外部的方法</span>
    <span class="token keyword">const</span> <span class="token function-variable function">focus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      input<span class="token punctuation">.</span>value<span class="token operator">?.</span>focus<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">blur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      input<span class="token punctuation">.</span>value<span class="token operator">?.</span>blur<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        input<span class="token punctuation">,</span>
        handleFocus<span class="token punctuation">,</span>
        handleBlur<span class="token punctuation">,</span>
        focus<span class="token punctuation">,</span>
        blur<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>分析<code>setCurrentValue</code>方法，该方法用于改变v-model双向绑定的值：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//访问内部组件实例   </span>

<span class="token comment">//改变当前绑定的值的方法,newVal为新的值，在点击-或+按钮时 以及用户手动输入时触发</span>
<span class="token comment">//连续两次出错我应该如何重新渲染页面？ 外层v-model绑定的值没有修改 没法触发渲染</span>
<span class="token keyword">const</span> <span class="token function-variable function">setCurrentValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newVal<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log('set',newVal);</span>
        <span class="token keyword">let</span> oldVal <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">>=</span> props<span class="token punctuation">.</span>max<span class="token punctuation">)</span> newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>max <span class="token comment">//不超过最大值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">&lt;=</span> props<span class="token punctuation">.</span>min<span class="token punctuation">)</span> newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>min <span class="token comment">//不超过最小值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance<span class="token operator">?.</span>proxy<span class="token operator">?.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 强制重新渲染</span>
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNumber</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newVal <span class="token operator">=</span> <span class="token number">0</span>                                                      <span class="token comment">// 输入的不是数字，改为默认值</span>
        <span class="token punctuation">}</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>   <span class="token comment">// 更改外层的v-model绑定的值，modelValue是readonly常量，修改其值需要触发update</span>
        input<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>newVal<span class="token punctuation">)</span><span class="token comment">// 调用input组件的updateValue方法改变input组件内置input绑定的值</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>      <span class="token comment">// 触发change事件，传入新值与旧值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在 3.x 中，自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageTitle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 是以下的简写: --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span>
  <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageTitle<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageTitle = $event<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>因此修改v-model绑定值时要触发update:modelValue事件</p>
</div>
<p>button的click事件只要调用我们setCurrentValue方法即可：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 数字按步长减小</span>
<span class="token keyword">const</span> <span class="token function-variable function">decrease</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// console.log('decrease');</span>
    <span class="token function">setCurrentValue</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">-</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 数字按步长增加</span>
<span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// console.log('increase');</span>
    <span class="token function">setCurrentValue</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">+</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>编写组件遇到的错误：</p>
<ul>
<li>
<p>Vue3 setup语法中，使用模板引用时，需要将引用的JS变量return，才可以生效，否则无法引用到对应的DOM元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        input<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>div元素是没有disabled属性的，因此实现禁用效果的话要从内部的button与input入手</p>
</li>
</ul>
</template>
