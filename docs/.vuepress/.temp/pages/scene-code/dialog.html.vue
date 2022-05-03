<template><h1 id="对话框" tabindex="-1"><a class="header-anchor" href="#对话框" aria-hidden="true">#</a> 对话框</h1>
<p>对话框的实现主要依靠vue3的两个高级内置组件：</p>
<ul>
<li>
<p><code>&lt;Teleport&gt;</code>：使我们可以将一个组件的一部分模板“传送”到该组件的 DOM 层次结构之外的 DOM 节点中。为 <code>&lt;Teleport&gt;</code> 指定的目标 <code>to</code> 期望接收一个 CSS 选择器字符串或者一个真实的 DOM 节点。</p>
<p>实现对话框，可以利用该组件去<strong>传送</strong>对话框的模板片段<strong>到 <code>body</code></strong> 标签下。</p>
</li>
<li>
<p><code>&lt;Transition&gt;</code> 会在一个元素或组件进入和离开 DOM 时应用动画。利用该内置组件，可以设置对话框进入离开的过度动画。</p>
</li>
</ul>
<p>详情：<a href="https://staging-cn.vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noopener noreferrer">Transition·过渡 | Vue.js (vuejs.org)<ExternalLinkIcon/></a>，<a href="https://staging-cn.vuejs.org/guide/built-ins/teleport.html" target="_blank" rel="noopener noreferrer">Teleport·传送门 | Vue.js (vuejs.org)<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>编写代码时注意：不能在onMount里进行DOM操作，因为dialog组件挂载完成时有一部分的v-if=false，此时是没有渲染的，无法进行模板引用。因此我们需要使用watch函数监听带有v-if的那一块模板，当模板存在时再进行DOM操作。</p>
</div>
<p><strong>如何实现控制遮罩层的显现？</strong></p>
<p>在watch函数中监听 container模板的变化，当模板存在时，如果props.modal=false，设置遮罩层的div背景为透明。</p>
<p><strong>如何实现滚动锁定?</strong></p>
<p>在watch函数中监听 container模板的变化，当模板存在时，给window(浏览器)添加一个禁止函数，禁止<code>wheel</code>事件触发，当关闭时使用removeEventListener删除这个监听器。</p>
<p>源码：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog<span class="token punctuation">"</span></span>
      <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onBeforeEnter<span class="token punctuation">"</span></span>
      <span class="token attr-name">@after-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onAfterEnter<span class="token punctuation">"</span></span>
      <span class="token attr-name">@before-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onBeforeLeave<span class="token punctuation">"</span></span>
      <span class="token attr-name">@after-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onAfterLeave<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 对话框的遮罩层 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mask<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-mask<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> 
        <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeDialog(closeOnClickModal)<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 对话框的头部 --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$slots.title || title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-default-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#aa00ff<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x-circle-fill<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeDialog(true)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-icon</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 对话框的主体 --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>a short message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 对话框的尾部  --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene-dialog-default-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeDialog(true)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>dialogProps<span class="token punctuation">,</span> dialogEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./dialog'</span>
<span class="token keyword">import</span> sButton <span class="token keyword">from</span> <span class="token string">'../button/button.vue'</span>
<span class="token keyword">import</span> sIcon <span class="token keyword">from</span> <span class="token string">'../icon/icon.vue'</span>
<span class="token keyword">import</span> <span class="token string">'../../styles/global.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'scene-dialog'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span>dialogProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span>dialogEmits<span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>sButton<span class="token punctuation">,</span>sIcon<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span><span class="token punctuation">{</span>emit<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> mask <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 阻止默认事件进行的函数
     */</span>
    <span class="token keyword">function</span> <span class="token function">preventDefaultFunc</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> Event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">let</span> evt <span class="token operator">=</span> e<span class="token punctuation">;</span>
      evt<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  关闭对话框，isTrigger控制该函数是否触发
     */</span>
    <span class="token keyword">function</span> <span class="token function">closeDialog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">isTrigger</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>isTrigger<span class="token punctuation">)</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * dialog的hook函数
     */</span>
    <span class="token keyword">function</span> <span class="token function">onBeforeEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// 在元素被插入到 DOM 之前被调用</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span><span class="token string">'open'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">onAfterEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 当过度完成时调用</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'opened'</span><span class="token punctuation">,</span><span class="token string">'opened'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">onBeforeLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 在leave之前调用</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span><span class="token string">'close'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">onAfterLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 在离开过渡完成、且元素已从 DOM 中移除时调用</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'closed'</span><span class="token punctuation">,</span><span class="token string">'closed'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 监听 container模板的变化，当模板存在时，修改其宽度</span>
    <span class="token comment">// 为什么不在onMount里进行DOM操作？ dialog在组件挂载完成时v-if=false，此时是没有渲染的，无法进行模板引用</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>mask<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newMask<span class="token punctuation">,</span>oldMask</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>newMask<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// 打开对话框</span>
        mask<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">'rgba(0, 0, 0, 0.5)'</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置宽度</span>
        container<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>minWidth <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'px'</span>
        <span class="token comment">// 设置滚动锁定</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>lockScroll<span class="token punctuation">)</span>
          window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"wheel"</span><span class="token punctuation">,</span> preventDefaultFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">passive</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>modal<span class="token punctuation">)</span><span class="token punctuation">{</span>
          mask<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">'transparent'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">// 关闭对话框</span>
        <span class="token comment">// 解除滚动锁定 </span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>lockScroll<span class="token punctuation">)</span>
          window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'wheel'</span><span class="token punctuation">,</span>preventDefaultFunc<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span><span class="token punctuation">{</span>
      mask<span class="token punctuation">,</span>
      container<span class="token punctuation">,</span>
      closeDialog<span class="token punctuation">,</span>
      onBeforeEnter<span class="token punctuation">,</span>
      onBeforeLeave<span class="token punctuation">,</span>
      onAfterEnter<span class="token punctuation">,</span>
      onAfterLeave
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.scene-dialog-mask</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-advanced<span class="token punctuation">)</span>+1<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-mask<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-dialog-container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-index-superlative<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-color-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-border-radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-box-shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-title</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 20px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-footer</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-default-title</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-default-title h3</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-font-family<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-letter-spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--scene-theme-color-main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.scene-dialog-default-footer</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
 * The following styles are auto-applied to elements with
 * transition="scene-dialog" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the scene-dialog transition by editing
 * these styles.
 */</span>
<span class="token selector">.scene-dialog-enter-from,
.scene-dialog-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scene-dialog-enter-from .scene-dialog-container,
.scene-dialog-leave-to .scene-dialog-container</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br></div></div></template>
