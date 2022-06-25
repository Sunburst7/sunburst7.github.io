<template><h2 id="_1-jsx简介" tabindex="-1"><a class="header-anchor" href="#_1-jsx简介" aria-hidden="true">#</a> 1 JSX简介</h2>
<p>JSX（JavaScript XML） 是一个 JavaScript 的语法扩展，它具有 JavaScript 的全部功能。它看起来像是一种模板语言，实际上 JSX 并不是模板语言，而是对 JavaScript 语言的扩展。<strong>JSX 基于 JavaScript 语言，所以它具备 JS 的全部能力（JS 能做的 JSX 都可以做，比如表达式计算），但又新增了某些能力（JS 不能做的 JSX 也可以做，比如自定义组件）。</strong></p>
<h2 id="_2-jsx本质" tabindex="-1"><a class="header-anchor" href="#_2-jsx本质" aria-hidden="true">#</a> 2 JSX本质</h2>
<p>在React官网中有这样的解释：</p>
<p>**实际上，JSX 仅仅只是 <code>React.createElement(component, props, ...children)</code> 函数的语法糖。**如下 JSX 代码：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyButton</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">shadowSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  Click Me
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyButton</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>会编译为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  MyButton<span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token literal-property property">shadowSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'Click Me'</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>而返回的Element是React元素，是构成 React 应用的最小砖块。以<code>&lt;div&gt;Hello&lt;/div&gt;</code>为例：</p>
<p><img src="@source/note/react/jsx/image-20220527135959645.png" alt="image-20220527135959645"></p>
<p>先忽略掉一些<code>ref/key</code>之类的属性，这个时候来看我们发现它其实就是一个<code>js</code>对象，记录了<code>type</code>表示元素类型。<code>props</code>表示元素的接受的<code>prop</code>,注意这里会将<code>jsx</code>内部标签内容插入到<code>props</code>的<code>children</code>属性中。</p>
<blockquote>
<p>需要注意的是这里的<code>children</code>属性，如果内部标签元素存在多个子元素时候。<code>children</code>会是一个数组。因为这里仅仅只有文本节点，所以只有一个<code>Hello</code>。</p>
</blockquote>
<h2 id="_3-jsx语法" tabindex="-1"><a class="header-anchor" href="#_3-jsx语法" aria-hidden="true">#</a> 3 JSX语法</h2>
<p>jsx中<code>()</code>可以用来换行，即括号内的内容是可以在新的一行书写。</p>
<p>jsx语句中有三个核心的概念：标签名、props、子元素。对JSX语法的介绍也主要分为这三部分进行：</p>
<h3 id="_3-1-标签名" tabindex="-1"><a class="header-anchor" href="#_3-1-标签名" aria-hidden="true">#</a> 3.1 标签名</h3>
<p>标签名指的是<code>&lt;div&gt;</code>中的div，在jsx中指定了 React 元素的类型：</p>
<ul>
<li>
<p>大写字母开头的 JSX 标签意味着它们是 React 组件。这些标签会被编译为对命名变量的直接引用</p>
</li>
<li>
<p>小写字母表示HTML的原始标签</p>
</li>
<li>
<p>如果你确实需要一个以小写字母开头的组件，则在 JSX 中使用它之前，必须将它赋值给一个大写字母开头的变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// Hello变量</span>
<span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello <span class="token punctuation">{</span>props<span class="token punctuation">.</span>toWhat<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 正确！React 知道 &lt;Hello /> 是一个组件，因为它是大写字母开头的：  </span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Hello toWhat<span class="token operator">=</span><span class="token string">"World"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>你不能将表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PhotoStory<span class="token punctuation">,</span> VideoStory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./stories'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">photo</span><span class="token operator">:</span> PhotoStory<span class="token punctuation">,</span>
  <span class="token literal-property property">video</span><span class="token operator">:</span> VideoStory
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Story</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 正确！JSX 类型可以是大写字母开头的变量。  </span>
    <span class="token keyword">const</span> SpecificStory <span class="token operator">=</span> components<span class="token punctuation">[</span>props<span class="token punctuation">.</span>storyType<span class="token punctuation">]</span><span class="token punctuation">;</span>  
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>SpecificStory story<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>story<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>由于这些标签会被编译为对命名变量的直接引用，当你使用 JSX <code>&lt;Foo /&gt;</code> 表达式时，<code>Foo</code> 必须包含在作用域内。同时由于 JSX 会编译为 <code>React.createElement</code> 调用形式，所以 <code>React</code> 库也必须包含在 JSX 代码作用域内。</p>
</div>
<p>在 JSX 中，你也可以使用点语法来引用一个 React 组件。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果 <code>MyComponents.DatePicker</code> 是一个组件，你可以在 JSX 中直接使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MyComponents <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">DatePicker</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">DatePicker</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Imagine a <span class="token punctuation">{</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span> datepicker here<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">BlueDatePicker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyComponents<span class="token punctuation">.</span>DatePicker color<span class="token operator">=</span><span class="token string">"blue"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-2-props" tabindex="-1"><a class="header-anchor" href="#_3-2-props" aria-hidden="true">#</a> 3.2 props</h3>
<p>JSX中指定props的方式主要有以下几种：</p>
<ol>
<li>
<p><strong>字符串字面量</strong>：你可以将字符串字面量赋值给 prop，它的值是未转义的。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token attr-name">message</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">'&lt;3'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p><strong>JavaScript 表达式</strong>：你可以把包裹在 <code>{}</code> 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素。例如，如下的 JSX：</p>
<p><code>if</code> 语句以及 <code>for</code> 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">NumberDescriber</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> description<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  description <span class="token operator">=</span> <span class="token operator">&lt;</span>strong<span class="token operator">></span>even<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>    
  description <span class="token operator">=</span> <span class="token operator">&lt;</span>i<span class="token operator">></span>odd<span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>number<span class="token punctuation">}</span> is an <span class="token punctuation">{</span>description<span class="token punctuation">}</span> number<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 <code>camelCase</code>（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。</p>
<p>例如，JSX 里的 <code>class</code> 变成了 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className" target="_blank" rel="noopener noreferrer"><code>className</code><ExternalLinkIcon/></a>，而 <code>tabindex</code> 则变为 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex" target="_blank" rel="noopener noreferrer"><code>tabIndex</code><ExternalLinkIcon/></a>。</p>
</div>
</li>
<li>
<p><strong>解构对象</strong>：使用展开运算符 <code>...</code> 来在 JSX 中传递整个 props 对象。</p>
<p>以下两个组件是等价的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Greeting firstName<span class="token operator">=</span><span class="token string">"Ben"</span> lastName<span class="token operator">=</span><span class="token string">"Hector"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Ben'</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Hector'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Greeting <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>你还可以选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> kind<span class="token punctuation">,</span> <span class="token operator">...</span>other <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>  <span class="token keyword">const</span> className <span class="token operator">=</span> kind <span class="token operator">===</span> <span class="token string">"primary"</span> <span class="token operator">?</span> <span class="token string">"PrimaryButton"</span> <span class="token operator">:</span> <span class="token string">"SecondaryButton"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>other<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button kind<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"clicked!"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        Hello World<span class="token operator">!</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
<li>
<p><strong>默认值</strong>：prop默认值是 <code>true</code>。</p>
</li>
</ol>
<h3 id="_3-3-子元素" tabindex="-1"><a class="header-anchor" href="#_3-3-子元素" aria-hidden="true">#</a> 3.3 子元素</h3>
<p>包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 <code>props.children</code> 传递给外层组件。有几种不同的方法来传递子元素：</p>
<h4 id="字符串字面量" tabindex="-1"><a class="header-anchor" href="#字符串字面量" aria-hidden="true">#</a> 字符串字面量</h4>
<p>你可以将字符串放在开始和结束标签之间，此时 <code>props.children</code> 就只是该字符串。这对于很多内置的 HTML 元素很有用。例如：</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>&lt;MyComponent&gt;Hello world!&lt;/MyComponent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>MyComponent</code> 中的 <code>props.children</code> 是一个简单的未转义字符串 <code>&quot;Hello world!&quot;</code>。</p>
<p>JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格。因此以下的几种方式都是等价的：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  Hello
  World
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="jsx-子元素" tabindex="-1"><a class="header-anchor" href="#jsx-子元素" aria-hidden="true">#</a> JSX 子元素</h4>
<p>子元素允许由多个 JSX 元素组成。你可以将不同类型的子元素混合在一起，因此你可以将字符串字面量与 JSX 子元素一起使用。这对于嵌套组件非常有用：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContainer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
   Here is a list:
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyFirstComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MySecondComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContainer</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>React 组件也能够返回存储在数组中的一组元素：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不需要用额外的元素包裹列表元素！</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// 不要忘记设置 key :)</span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token string">"A"</span><span class="token operator">></span>First item<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token string">"B"</span><span class="token operator">></span>Second item<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token string">"C"</span><span class="token operator">></span>Third item<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="javascript-表达式作为子元素" tabindex="-1"><a class="header-anchor" href="#javascript-表达式作为子元素" aria-hidden="true">#</a> JavaScript 表达式作为子元素</h4>
<p>JavaScript 表达式可以被包裹在 <code>{}</code> 中作为子元素。这对于展示任意长度的列表非常有用。例如，渲染 HTML 列表：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'finish doc'</span><span class="token punctuation">,</span> <span class="token string">'submit pr'</span><span class="token punctuation">,</span> <span class="token string">'nag dan to review'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Item key<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">}</span>    
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>JavaScript 表达式也可以和其他类型的子元素组合。这种做法可以方便地替代模板字符串：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello <span class="token punctuation">{</span>props<span class="token punctuation">.</span>addressee<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="函数作为子元素" tabindex="-1"><a class="header-anchor" href="#函数作为子元素" aria-hidden="true">#</a> 函数作为子元素</h4>
<p>通常，JSX 中的 JavaScript 表达式将会被计算为字符串、React 元素或者是列表。不过，<code>props.children</code> 和其他 prop 一样，它可以传递任意类型的数据，而不仅仅是 React 已知的可渲染类型。例如，如果你有一个自定义组件，你可以把回调函数作为 <code>props.children</code> 进行传递：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 调用子元素回调 numTimes 次，来重复生成组件</span>
<span class="token keyword">function</span> <span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> props<span class="token punctuation">.</span>numTimes<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用子元素的函数</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>items<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ListOfTenThings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Repeat numTimes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>This is item <span class="token punctuation">{</span>index<span class="token punctuation">}</span> <span class="token keyword">in</span> the list<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span>    
    <span class="token operator">&lt;</span><span class="token operator">/</span>Repeat<span class="token operator">></span><span class="token comment">// 子元素是一个函数</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>你可以将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换成 React 理解的对象。</p>
<h4 id="布尔类型、null-以及-undefined-将会忽略" tabindex="-1"><a class="header-anchor" href="#布尔类型、null-以及-undefined-将会忽略" aria-hidden="true">#</a> 布尔类型、Null 以及 Undefined 将会忽略</h4>
<p><code>false</code>, <code>null</code>, <code>undefined</code>, and <code>true</code> 是合法的子元素。但它们并不会被渲染。以下的 JSX 表达式渲染结果相同：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{false}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{null}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{undefined}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{true}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这有助于依据特定条件来渲染其他的 React 元素。例如，在以下 JSX 中，仅当 <code>showHeader</code> 为 <code>true</code> 时，才会渲染 <code>&lt;Header /&gt;</code> 组件：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span>showHeader <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>值得注意的是有一些 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noopener noreferrer">“falsy” 值<ExternalLinkIcon/></a>，如数字 <code>0</code>，仍然会被 React 渲染。因此需要确保 <code>&amp;&amp;</code> 之前的表达式总是布尔值：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MessageList</span></span> <span class="token attr-name">messages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>反之，如果你想渲染 <code>false</code>、<code>true</code>、<code>null</code>、<code>undefined</code> 等值，你需要先将它们<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion" target="_blank" rel="noopener noreferrer">转换为字符串<ExternalLinkIcon/></a>：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  My JavaScript variable is </span><span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>myVariable<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">.
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
