<template><h2 id="_1-jsx简介" tabindex="-1"><a class="header-anchor" href="#_1-jsx简介" aria-hidden="true">#</a> 1 jsx简介</h2>
<p>JSX（JavaScript XML） 是一个 JavaScript 的语法扩展，它具有 JavaScript 的全部功能。它看起来像是一种模板语言，实际上 JSX 并不是模板语言，而是对 JavaScript 语言的扩展。<strong>JSX 基于 JavaScript 语言，所以它具备 JS 的全部能力（JS 能做的 JSX 都可以做，比如表达式计算），但又新增了某些能力（JS 不能做的 JSX 也可以做，比如自定义组件）。</strong></p>
<h2 id="_2-jsx本质" tabindex="-1"><a class="header-anchor" href="#_2-jsx本质" aria-hidden="true">#</a> 2 jsx本质</h2>
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
<h2 id="_3-jsx语法" tabindex="-1"><a class="header-anchor" href="#_3-jsx语法" aria-hidden="true">#</a> 3 jsx语法</h2>
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
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>import React from 'react';

// Hello变量
function Hello(props) {  
  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;
}

function HelloWorld() {
  // 正确！React 知道 &lt;Hello /&gt; 是一个组件，因为它是大写字母开头的：  
  return &lt;Hello toWhat=&quot;World&quot; /&gt;;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>你不能将表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。  
    const SpecificStory = components[props.storyType];  
    return &lt;SpecificStory story={props.story} /&gt;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>由于这些标签会被编译为对命名变量的直接引用，当你使用 JSX <code>&lt;Foo /&gt;</code> 表达式时，<code>Foo</code> 必须包含在作用域内。同时由于 JSX 会编译为 <code>React.createElement</code> 调用形式，所以 <code>React</code> 库也必须包含在 JSX 代码作用域内。</p>
</div>
<p>在 JSX 中，你也可以使用点语法来引用一个 React 组件。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果 <code>MyComponents.DatePicker</code> 是一个组件，你可以在 JSX 中直接使用：</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return &lt;div&gt;Imagine a {props.color} datepicker here.&lt;/div&gt;;
  }
}

function BlueDatePicker() {
  return &lt;MyComponents.DatePicker color=&quot;blue&quot; /&gt;;}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-2-props" tabindex="-1"><a class="header-anchor" href="#_3-2-props" aria-hidden="true">#</a> 3.2 props</h3>
<p>JSX中指定props的方式主要有以下几种：</p>
<ol>
<li>
<p><strong>字符串字面量</strong>：你可以将字符串字面量赋值给 prop，它的值是未转义的。</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>&lt;MyComponent message=&quot;&amp;lt;3&quot; /&gt;

&lt;MyComponent message={'&lt;3'} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p><strong>JavaScript 表达式</strong>：你可以把包裹在 <code>{}</code> 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素。例如，如下的 JSX：</p>
<p><code>if</code> 语句以及 <code>for</code> 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。比如：</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {    
  description = &lt;strong&gt;even&lt;/strong&gt;;  
  } else {    
  description = &lt;i&gt;odd&lt;/i&gt;;  
  }  
  return &lt;div&gt;{props.number} is an {description} number&lt;/div&gt;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 <code>camelCase</code>（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。</p>
<p>例如，JSX 里的 <code>class</code> 变成了 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className" target="_blank" rel="noopener noreferrer"><code>className</code><ExternalLinkIcon/></a>，而 <code>tabindex</code> 则变为 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex" target="_blank" rel="noopener noreferrer"><code>tabIndex</code><ExternalLinkIcon/></a>。</p>
</div>
</li>
<li>
<p>解构对象</p>
</li>
<li>
<p>默认值</p>
</li>
</ol>
<p>参考：</p>
<p><a href="https://juejin.cn/post/6998859047524892709" target="_blank" rel="noopener noreferrer">React中的JSX原理渐析 - 掘金 (juejin.cn)<ExternalLinkIcon/></a></p>
</template>
