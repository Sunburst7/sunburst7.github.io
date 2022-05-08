import{_ as n,b as s}from"./app.6c710a2b.js";const a={},p=s(`<p>\u6587\u672C\u57DF\u7684\u6838\u5FC3\u4E0E\u8F93\u5165\u6846\u6CA1\u6709\u592A\u5927\u533A\u522B\uFF0C\u6838\u5FC3\u7684\u4FEE\u6539props.modelValue\u5728input\u4E2D\u5DF2\u7ECF\u8BE6\u7EC6\u7684\u8BF4\u660E\u8FC7\uFF0C\u672C\u6587\u57DF\u7684\u7ED3\u6784\u4E5F\u76F8\u5BF9\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u6CE8\u610F\u4E24\u70B9\uFF1A</p><ul><li><p>\u4FEE\u6539\u5176\u5BBD\u9AD8\u7684\u4F4D\u7F6E\u662F\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\uFF08onMount\uFF09</p></li><li><p>\u539F\u751F\u7684\u6587\u672C\u57DF\u53F3\u4E0B\u89D2\u6709\u4FEE\u6539\u5927\u5C0F\u7684\u6309\u94AE\uFF0C\u53EF\u7528css\u53BB\u9664\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.scene-textarea textarea</span><span class="token punctuation">{</span>  
    <span class="token comment">/*\u5982\u679C\u6709\u9700\u8981\uFF0C\u53BB\u6389\u53F3\u4E0B\u89D2\u7684\u53EF\u62C9\u4F38\u53D8\u5927\u5C0F\u7684\u56FE\u6807\u548C\u529F\u80FD*/</span>
    <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-textarea<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span>
            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">spellcheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maxLength<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateValue<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFocus<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleBlur<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isFocus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene-textarea-length<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{inputValue.length}}/{{maxLength===undefined?&#39;&#39;:maxLength}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>textareaProps<span class="token punctuation">,</span> textareaEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./textarea&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;scene-textarea&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> textareaProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> textareaEmits<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> textarea <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLTextAreaElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> ref<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isFocus</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * \u66F4\u65B0props.modelValue
     */</span>
    <span class="token keyword">function</span> <span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span>InputEvent<span class="token punctuation">,</span> newVal<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> oldVal <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue<span class="token operator">!</span>
        <span class="token keyword">let</span> <span class="token literal-property property">target</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// \u7528\u6237\u76F4\u63A5\u8F93\u5165</span>
            target <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>target<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// \u7CFB\u7EDF\u66F4\u6539</span>
            target <span class="token operator">=</span> newVal
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4FEE\u6539props\u7684modelValue</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token comment">// \u4FEE\u6539\u5C55\u793A\u7684modelValue</span>
        data<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> target
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>target<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span>
        
    <span class="token punctuation">}</span>
    <span class="token comment">// \u89E6\u53D1\u5916\u5C42\u7ED1\u5B9AFocus\u4E8B\u4EF6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span>isFocus <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u89E6\u53D1\u5916\u5C42\u7ED1\u5B9ABlur\u4E8B\u4EF6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span>isFocus <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u66B4\u6F0F\u7ED9\u5916\u90E8\u7684\u65B9\u6CD5</span>
    <span class="token keyword">const</span> <span class="token function-variable function">focus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      textarea<span class="token punctuation">.</span>value<span class="token operator">?.</span>focus<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">blur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      textarea<span class="token punctuation">.</span>value<span class="token operator">?.</span>blur<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u5BBD\u5EA6\u4E0E\u9AD8\u5EA6</span>
        textarea<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> props<span class="token punctuation">.</span>width<span class="token operator">+</span><span class="token string">&#39;px&#39;</span>
        textarea<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> props<span class="token punctuation">.</span>height<span class="token operator">+</span><span class="token string">&#39;px&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
        textarea<span class="token punctuation">,</span>
        updateValue<span class="token punctuation">,</span>
        handleFocus<span class="token punctuation">,</span>
        handleBlur<span class="token punctuation">,</span>
        focus<span class="token punctuation">,</span>
        blur<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.scene-textarea</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-size<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-radius<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-color-dark<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea:hover</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-size<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-color-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6587\u672C\u57DF\u4E3B\u4F53\u7684\u5B50\u5143\u7D20\u6709\u83B7\u53D6\u7126\u70B9\u65F6 */</span>
<span class="token selector">.scene-textarea:focus-within</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-size<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea textarea</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token comment">/*\u53BB\u9664\u70B9\u51FB\u51FA\u73B0\u8F6E\u5ED3\u989C\u8272*/</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>    
    <span class="token comment">/*\u5982\u679C\u6709\u9700\u8981\uFF0C\u53BB\u6389\u53F3\u4E0B\u89D2\u7684\u53EF\u62C9\u4F38\u53D8\u5927\u5C0F\u7684\u56FE\u6807\u548C\u529F\u80FD*/</span>
    <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-Extra-dark-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5BF9 input\u4E2D\u7684placeholder\u7684\u6837\u5F0F */</span>
<span class="token selector">.scene-textarea textarea::-webkit-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* WebKit, Blink, Edge */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-Extra-dark-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea textarea::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Mozilla Firefox 4 to 18 */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-Extra-dark-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea textarea::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Mozilla Firefox 19+ */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-Extra-dark-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea textarea::-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Internet Explorer 10-11 */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-Extra-dark-gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-textarea-length</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div>`,4);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
