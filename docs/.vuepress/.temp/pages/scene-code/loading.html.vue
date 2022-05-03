<template><p>loading组件的实现形式与之前的组件都有所不同，loading组件采用的是函数调用的方式触发，而且其内部编写的方式也与一般组件不同，不是以模板的方式构造组件而是通过<a href="https://staging-cn.vuejs.org/guide/extras/render-function.html" target="_blank" rel="noopener noreferrer">渲染函数<ExternalLinkIcon/></a>的方式。挂载的实现主要依靠vue的<code>createApp()</code>API。</p>
<p>预定义的类型：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>App<span class="token punctuation">,</span> VNode<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token doc-comment comment">/**
 * loading 组件的props类型
 */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">loadingProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    target<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement <span class="token comment">//  Loading需要覆盖的 DOM 节点.可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入document.querySelector以获取到对应DOM节点</span>
    fullScreen<span class="token operator">:</span> <span class="token builtin">boolean</span>     <span class="token comment">// 是否占据整个屏幕</span>
    text<span class="token operator">:</span> <span class="token builtin">string</span>            <span class="token comment">// loading组件的文本提示</span>
    onClose<span class="token operator">:</span> <span class="token builtin">Function</span>       <span class="token comment">// loading组件关闭的回调函数</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * loading组件的内置data类型
 */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">loadingData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    target<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement 
    fullScreen<span class="token operator">:</span> <span class="token builtin">boolean</span> 
    text<span class="token operator">:</span> <span class="token builtin">string</span>            
    onClose<span class="token operator">:</span> <span class="token builtin">Function</span>       
    loadingVM<span class="token operator">:</span> App<span class="token operator">&lt;</span>Element<span class="token operator">></span>
    loadingMountElement<span class="token operator">:</span> HTMLElement
    visible<span class="token operator">:</span> <span class="token builtin">boolean</span>            <span class="token comment">// loading组件的可见性</span>
    originalPosition<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>   <span class="token comment">// target原始的css position值</span>
    originalOverflow<span class="token operator">:</span> <span class="token builtin">string</span>    <span class="token comment">// target原始的css overflow值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>因为loading组件会挂载到不同的地方，因此如果允许同时有多个loading组件渲染会引起界面混乱，采用设计模式中的单例模式限制loading组件的数量，这是通过SceneLoading全局变量暴漏的唯一方法<code>service</code>实现的：使用loading组件必须会导入核心的ts文件，在该文件中创建一个全局对象，当调用<code>SceneLoading.service(options: loadingProps)</code>时会判断改全局对象是否为null，只有是null时会创建新的loading实例，否则会返回已有的loading实例：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 单例模式</span>
<span class="token keyword">let</span> loadingInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 创建一个loading服务
 * <span class="token keyword">@param</span> <span class="token parameter">options</span> loading的Props
 * <span class="token keyword">@returns</span> 返回一个loading组件实例
 */</span>
<span class="token keyword">function</span> <span class="token function">service</span><span class="token punctuation">(</span>options<span class="token operator">:</span> loadingProps <span class="token operator">=</span> defaultLoadingProps<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 单例模式</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>loadingInstance <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        loadingInstance <span class="token operator">=</span> <span class="token function">createLoadingComponent</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> loadingInstance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>每个loading实例有两个函数方法：</p>
<ul>
<li><code>open()</code>：表示开启loading动画</li>
<li><code>close()</code>：表示关闭loading动画</li>
</ul>
<p>下面介绍<code>createLoadingComponent(options: loadingProps )</code>方法，这个函数创建一个拥有完整生命周期的对象：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 创建一个loading组件实例
 * <span class="token keyword">@param</span> <span class="token parameter">options</span> loading的Props
 * <span class="token keyword">@returns</span> 返回一个有完整生命周期的loading组件实例
 */</span>
<span class="token keyword">function</span> <span class="token function">createLoadingComponent</span><span class="token punctuation">(</span>options<span class="token operator">:</span> loadingProps <span class="token operator">=</span> defaultLoadingProps<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        open<span class="token punctuation">,</span>
        close<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>该方法首先声明了一个内部的变量集data。因为实现一个完整的生命周期需要将createApp()函数返回的vue应用实例保存，loadingVM表示的正是这个：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>loadingData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>options<span class="token punctuation">,</span>
        loadingVM<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>            <span class="token comment">// loading 组件的vm实例</span>
        loadingMountElement<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>  <span class="token comment">// loading 组件vm实例挂载的div，是target的child</span>
        visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>             <span class="token comment">// loading 组件的可见性</span>
        originalPosition<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>       <span class="token comment">// target原始的css position值</span>
        originalOverflow<span class="token operator">:</span> <span class="token string">''</span>        <span class="token comment">// target原始的css overflow值</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>init()</code>函数表示loading组件的初始化的过程，包括创建vue应用实例，初始化loading样式，挂载vue实例到target上等操作。</p>
<p>因为整个组件是一个绝对布局，需要将target所值的DOM元素设置为组件的相对元素(position:relative)，需要保存target原始的css position值，同时还需要关闭滚轮事件与滚动条，需要保存target原始的css overflow值。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>在实现全屏效果的时候需要使用绝对布局，需要获知此时整个页面滚动到了那里来设置top与left属性，document.body.scrollTop与document.documentElement.scrollTop都可以获取窗口的位置，但同时只会有一个值生效。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 防止创建多个loading组件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>loadingVM <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            data<span class="token punctuation">.</span>loadingVM <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>sceneLoadingComponent<span class="token punctuation">)</span>
            <span class="token comment">// 包裹loading组件vm实例的DOM节点</span>
            data<span class="token punctuation">.</span>loadingMountElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置loading最外层div的样式</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">"absolute"</span><span class="token punctuation">;</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">'0px'</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token string">'0px'</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token string">'0'</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100%'</span>
            data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">'100%'</span>
            <span class="token comment">// 挂载实例到最外层div上</span>
            data<span class="token punctuation">.</span>loadingVM<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">)</span>

            
            <span class="token comment">// 添加最外层div到target上</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> data<span class="token punctuation">.</span>target <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> parent <span class="token operator">=</span> data<span class="token punctuation">.</span>target <span class="token keyword">as</span> VNode
                <span class="token comment">// 关闭滚轮的默认行为——页面锁定</span>
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"wheel"</span><span class="token punctuation">,</span> preventDefaultFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span>passive<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 保存target的position值与overflow值</span>
                data<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position
                data<span class="token punctuation">.</span>originalOverflow <span class="token operator">=</span> parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow

                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'relative'</span>   <span class="token comment">// 设置为absolute布局的子元素的相对元素</span>
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">'hidden'</span>
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> parent<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
                <span class="token comment">// 关闭滚轮的默认行为——页面锁定</span>
                parent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"wheel"</span><span class="token punctuation">,</span> preventDefaultFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span>passive<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// console.log(parent,document.body, data.fullScreen, parent === document.body);</span>
                <span class="token comment">// 如果是全屏loading</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token operator">===</span> parent <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>fullScreen<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    
                    <span class="token comment">// 保存target的position值与overflow值</span>
                    data<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position
                    data<span class="token punctuation">.</span>originalOverflow <span class="token operator">=</span> parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow
                    <span class="token comment">// 设置body的样式</span>
                    <span class="token comment">// document.body.scrollTop与document.documentElement.scrollTop同时只会有一个值生效。</span>
                    <span class="token keyword">let</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
                    <span class="token keyword">let</span> scrollLeft <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft
                    <span class="token keyword">let</span> bodyStyle<span class="token operator">:</span>CSSStyleDeclaration <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
                    data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scrollTop <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>bodyStyle<span class="token punctuation">.</span>marginTop<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>
                    data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scrollLeft <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>bodyStyle<span class="token punctuation">.</span>marginLeft<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>
                    data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100vw'</span>
                    data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">'100vh'</span>
                <span class="token punctuation">}</span>
                parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">'hidden'</span>
                parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'relative'</span>      <span class="token comment">// 设置为absolute布局的子元素的相对元素</span>
                parent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>这里<code>createApp(rootComponent: Component)</code>传入的组件<code>sceneLoadingComponent</code>为loading组件的本体，使用渲染函数构造：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> sceneLoadingComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'scene-loading'</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> spinnerText <span class="token operator">=</span> data<span class="token punctuation">.</span>text<span class="token operator">?</span> <span class="token function">h</span><span class="token punctuation">(</span>
                <span class="token string">'p'</span><span class="token punctuation">,</span> 
                <span class="token punctuation">{</span> 
                    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'scene-loading-text'</span><span class="token punctuation">,</span>
                    style<span class="token operator">:</span><span class="token punctuation">{</span>
                        cursor<span class="token operator">:</span> <span class="token string">'pointer'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> 
                <span class="token punctuation">[</span>data<span class="token punctuation">.</span>text<span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">undefined</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>
                    Transition<span class="token punctuation">,</span> <span class="token comment">// 使用渲染函数渲染&lt;Transition>时，不能用string而是需要导入内置的Transition</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">'scene-loading'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">[</span> <span class="token comment">// 在render函数中使用默认指令 withDirectives</span>
                        <span class="token function">withDirectives</span><span class="token punctuation">(</span>
                            <span class="token function">h</span><span class="token punctuation">(</span>
                                <span class="token string">'div'</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'scene-loading-mask'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                    style<span class="token operator">:</span> <span class="token punctuation">{</span> 
                                        background<span class="token operator">:</span> <span class="token string">'rgba(255, 255, 255, .9)'</span><span class="token punctuation">,</span>
                                        width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
                                        height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
                                        display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
                                        flexDirection<span class="token operator">:</span> <span class="token string">'column'</span><span class="token punctuation">,</span>
                                        justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                                        alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                                        zIndex<span class="token operator">:</span> <span class="token string">'10000'</span><span class="token punctuation">,</span>
                                        color<span class="token operator">:</span> <span class="token string">'#9000ff'</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">[</span>spinner<span class="token punctuation">,</span>spinnerText<span class="token punctuation">]</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">[</span><span class="token punctuation">[</span>vShow<span class="token punctuation">,</span> data<span class="token punctuation">.</span>visible<span class="token punctuation">]</span><span class="token punctuation">]</span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p><code>destroy()</code>函数用于卸载vue应用实例，同时销毁创建的HTML元素，恢复target的属性，同时设置loadingInstance = null，清空单例：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// loading组件的销毁</span>
<span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 防止创建多个loading组件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>loadingVM <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// vue app销毁</span>
            data<span class="token punctuation">.</span>loadingVM<span class="token punctuation">.</span><span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// div从target上移除</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> data<span class="token punctuation">.</span>target <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> parent <span class="token operator">=</span> data<span class="token punctuation">.</span>target <span class="token keyword">as</span> VNode
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"wheel"</span><span class="token punctuation">,</span> preventDefaultFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 恢复target的position与overflow值</span>
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> data<span class="token punctuation">.</span>originalPosition
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> data<span class="token punctuation">.</span>originalOverflow
                parent<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">)</span> <span class="token comment">// 从target上移除loading组件的div</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> parent<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
                parent<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"wheel"</span><span class="token punctuation">,</span> preventDefaultFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 恢复target的position与overflow值</span>
                parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> data<span class="token punctuation">.</span>originalPosition
                parent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> data<span class="token punctuation">.</span>originalOverflow
                parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>loadingMountElement<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 从target上移除loading组件的div</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 销毁data上的loadingVM与loadingMountElement</span>
            data<span class="token punctuation">.</span>loadingVM <span class="token operator">=</span> <span class="token keyword">null</span>
            data<span class="token punctuation">.</span>loadingMountElement <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 销毁单例loading组件实例</span>
        loadingInstance <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>对外暴漏的open与close方法主要表示的就是这两个过程：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 打开loading组件</span>
<span class="token keyword">function</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    data<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭loading组件</span>
<span class="token keyword">function</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    data<span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 触发props的onclose事件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
