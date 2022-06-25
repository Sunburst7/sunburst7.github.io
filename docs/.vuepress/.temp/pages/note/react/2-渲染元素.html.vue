<template><h2 id="_1-v16到v18渲染元素的方法" tabindex="-1"><a class="header-anchor" href="#_1-v16到v18渲染元素的方法" aria-hidden="true">#</a> 1 v16到v18渲染元素的方法</h2>
<p>React 18 提供了两个 root API，被称之为 Legacy Root API 和 New Root API：</p>
<ul>
<li>
<p>Legacy Root API：是指之前版本的 root API <code>ReactDOM.render</code>，它将创建一个以 &quot;legacy&quot; 模式运行的 root，其工作方式与 React 17 完全相同。我们会给这个 API 添加一个警告，来说明它将要被弃用并建议切换到 New Root API。</p>
</li>
<li>
<p>New Root API：新的 root API 是 <code>ReactDOM.createRoot</code>。它可以在 React 18 中创建一个 root，并支持 React 18 中支持的所有新特性。</p>
</li>
</ul>
<p>在 Legacy Root API 中，root 对用户来说是不透明的，因为我们将它附加到 DOM 元素上，通过 DOM 节点访问它，并没有将其暴露给用户：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span>
<span class="token comment">// v18 之前的方法</span>
<span class="token comment">// During an update, React would access</span>
<span class="token comment">// the root of the DOM element.</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>root<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>v18 中我们可以通过 <code>createRoot</code> Api 手动创建 root 节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>总结这两种API的区别：</p>
<ul>
<li>
<p>在 Legacy API 中，你需要多次将容器元素传递给 <code>render</code>，即使它从未更改过。</p>
</li>
<li>
<p>其次，这一变化允许让我们可以移除 <code>hydrate</code> 方法并替换为 root 上的一个选项；删除渲染回调，这些回调在部分 hydration 中是没有意义的。</p>
<p>这句话的意思是可以这么用 createRoot： createRoot(container, { hydrate: true }).render()
但是值得注意的是，最新的版本中 createRoot 要废弃 <code>hydrate: true</code> 这一用法，并引入新的 <code>hydrateRoot</code> 支持，具体见 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fpull%2F21687%2Ffiles" title="https://github.com/facebook/react/pull/21687/files" target="_blank" rel="noopener noreferrer">github.com/facebook/re…<ExternalLinkIcon/></a>。</p>
</li>
</ul>
</blockquote>
<p>创建根节点的核心API是<code>createRoot</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">createRoot</span><span class="token punctuation">(</span>container<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该方法为提供的容器创建一个 React 根并返回根root。 root 可用于通过<code>root.render(element, container)</code>将 React 元素渲染到 DOM 中。值得注意的是：</p>
<ul>
<li>当调用render()时，root的任何现有的DOM元素都会被全部替换，使用diff算法实现高效的更新。</li>
<li>createRoot() 不修改容器节点（只修改容器的子节点）。 可以在不覆盖现有子节点的情况下将组件插入现有 DOM 节点。</li>
</ul>
<h2 id="_2-回调函数问题" tabindex="-1"><a class="header-anchor" href="#_2-回调函数问题" aria-hidden="true">#</a> 2 回调函数问题</h2>
<p>在v16的<code>render()</code>方法中，你可以传递一个回调函数，在组件被渲染或更新后调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'App'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token operator">&lt;</span>App tab<span class="token operator">=</span><span class="token string">"home"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Called after inital render or any update.</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'rendered'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>而在v18 New Root API 中，我们删除了此回调。推荐的方法是添加一个callback ref到根元素上。推荐的写法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> callback <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Callback will be called when the div is first created.</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//函数会在渲染后执行</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App callback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"renderered"</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<p>【1】<a href="https://juejin.cn/post/6992435557456412709" target="_blank" rel="noopener noreferrer">React 18 用 createRoot 替换 render - 掘金<ExternalLinkIcon/></a></p>
</template>
