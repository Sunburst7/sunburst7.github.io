<template><p>组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。</p>
<h1 id="_1-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_1-组件生命周期" aria-hidden="true">#</a> 1 组件生命周期</h1>
<p>React v16.4后的生命周期如图所示</p>
<p><img src="3-组件与生命周期.assets/2022-06-12-18-22-51-image.png" alt=""></p>
<blockquote>
<p>一张v17之前与之后的对比图：</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5fa490ee4d948dba86a950bfe08dede~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p>
<p><em>红色为 React 17 已经废弃的生命周期钩子，绿色为新增的生命周期钩子</em></p>
</blockquote>
<p>根据阶段可以将生命周期的API分为三个阶段：</p>
<ul>
<li>
<p>render：纯净且不包含副作用。可能会被 React 暂停，中止或重新启动。</p>
</li>
<li>
<p>pre-render：可以读取 DOM。</p>
</li>
<li>
<p>commit：可以使用 DOM，运行副作用，安排更新。</p>
</li>
</ul>
<h2 id="_1-1-render-api" tabindex="-1"><a class="header-anchor" href="#_1-1-render-api" aria-hidden="true">#</a> 1.1 Render API</h2>
<ul>
<li>
<p><code>constructor</code>：该方法只会执行一次，调用该方法会返回一个组件实例。</p>
<ul>
<li>
<p>初始化阶段执行，可直接对 <code>this.state</code> 赋值。其他生命周期函数中只能通过 <code>this.setState</code> 修改 state，不能直接为 <code>this.state</code> 赋值。</p>
</li>
<li>
<p>如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。</p>
</li>
<li>
<p>在为 React.Component 子类实现构造函数时，应在其他语句之前调用 <code>super(props)</code>。</p>
</li>
<li>
<p><strong>避免将 props 的值复制给 state！这是一个常见的错误，如此做毫无必要（你可以直接使用 <code>this.props.color</code>）：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 不要这样做</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> props<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>getDerivedStateFromProps(不常用)</code>：</p>
<p>它是一个<strong>静态方法</strong>，接收 props 和 state 两个参数。它会在调用 render 方法之前被调用，不管是在初始挂载时还是在后续组件更新时都会被调用。</p>
<p>它的调用时机和 <code>componentWillMount、componentWillUpdate、componentWillReceiveProps </code>一样都是在 render 方法被调用之前，它可以作为 <code>componentWillMount、componentWillUpdate 和 componentWillReceiveProps</code> 的替代方案。</p>
<p>当然，它的作用不止如此，它可以返回一个对象，用来更新 state，就像它的名字一样，从 props 中获取衍生的 state。如果不需要更新 state 则可以返回 null。</p>
<p>这个生命周期函数是<strong>类的静态方法</strong>，并不是原型中的方法，所以在其内部使用 this 访问到的不是组件实例。</p>
</li>
<li>
<p><code>shouldComponentUpdate</code>：</p>
<p><strong>在组件准备更新之前调用，但是首次渲染或者使用 forceUpdate 函数时不会被调用。判断 React 组件的输出是否受当前 state 或 props 更改的影响。</strong></p>
<p>默认情况下，当组件的 props 或者 state 变化时，都会导致组件更新。它在 render 方法之前执行，如果它的返回值为 false，则不会更新组件，也不会执行后面的 render 方法。</p>
<p>它接收两个参数，nextProps 和 nextState，即下一次更新的 props 和下一次更新的 state。我们可以将 <code>this.props</code> 和 nextProps 比较，以及将 <code>this.state</code> 与 nextState 比较，并返回 false，让组件跳过更新。不过注意：它并不会阻止子组件因为 state 改变而导致的更新。</p>
<p>此方法仅作为性能优化的方式而存在。不要依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent组件，而不是手动编写 <code>shouldComponentUpdate()</code>。<code>PureComponent</code> 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。</p>
</li>
<li>
<p><code>render</code>：是 class 组件中唯一必须实现的方法。</p>
<p>当 <code>render</code> 被调用时，它会检查 <code>this.props</code> 和 <code>this.state</code> 的变化并返回以下类型之一：</p>
<ul>
<li><strong>React 元素</strong>。通常通过 JSX 创建。例如，<code>&lt;div /&gt;</code> 会被 React 渲染为 DOM 节点，<code>&lt;MyComponent /&gt;</code> 会被 React 渲染为自定义组件，无论是 <code>&lt;div /&gt;</code> 还是 <code>&lt;MyComponent /&gt;</code> 均为 React 元素。</li>
<li><strong>数组或 fragments</strong>。 使得 render 方法可以返回多个元素。<a href="https://zh-hans.reactjs.org/docs/fragments.html" target="_blank" rel="noopener noreferrer">fragments<ExternalLinkIcon/></a></li>
<li><strong>Portals</strong>。可以渲染子节点到不同的 DOM 子树中。<a href="https://zh-hans.reactjs.org/docs/portals.html" target="_blank" rel="noopener noreferrer">portals<ExternalLinkIcon/></a></li>
<li><strong>字符串或数值类型</strong>。它们在 DOM 中会被渲染为文本节点。</li>
<li><strong>布尔类型或 <code>null</code></strong>。什么都不渲染。（主要用于支持返回 <code>test &amp;&amp; &lt;Child /&gt;</code> 的模式，其中 test 为布尔类型。)</li>
</ul>
<p><code>render()</code> 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。如需与浏览器进行交互，请在 <code>componentDidMount()</code> 或其他生命周期方法中执行你的操作。保持 <code>render()</code> 为纯函数，可以使组件更容易思考。</p>
</li>
</ul>
<h2 id="_1-2-commit-api" tabindex="-1"><a class="header-anchor" href="#_1-2-commit-api" aria-hidden="true">#</a> 1.2 commit API</h2>
<p>commit 阶段在首次渲染时会执行 componentDidMount，在组件更新时会执行 getSnapshotBeforeUpdate 和 componentDidUpdate。</p>
<ul>
<li>
<p><code>getSnapshotBeforeUpdate</code>：此生命周期函数在最近一次渲染提交至 DOM 树之前执行，此时 DOM 树还未改变，我们可以在这里获取 DOM 改变前的信息，例如：更新前 DOM 的滚动位置。</p>
<p>它接收两个参数，分别是：<code>prevProps、prevState</code>，上一个状态的 props 和上一个状态的 state。<strong>它的返回值将会传递给 componentDidUpdate 生命周期钩子的第三个参数</strong></p>
<p>使用场景：需要获取更新前 DOM 的信息时。例如：需要以特殊方式处理滚动位置的聊天线程等。</p>
</li>
<li>
<p><code>componentDidMount</code>：该生命周期方法会在组件挂载之后执行，也只会执行一次，也就是将组件对应的 DOM 插入 DOM 树中之后调用。它会在浏览器更新视图之前调用，<strong>如果在 componentDidMount 中直接调用<code>this.setState</code>，它会触发额外的渲染，会再一次调用 render 函数，但是浏览器中视图的更新只会执行一次。</strong></p>
<p>使用场景：依赖于 DOM 的初始化操作应该放在这里，此外，我们一般在这个生命周期方法实例化网络请求、添加订阅等。</p>
</li>
<li>
<p><code>componentDidUpdate</code>：在组件更新后立即调用，首次渲染不会调用该方法。<strong>可以在这个生命周期中直接调用 <code>this.setState</code>，但是必须包裹在一个条件语句中，否则会导致死循环。</strong></p>
<p>componentDidUpdate 接收三个参数，分别是 <code>prevProps、prevState、snapshot</code>，即：前一个状态的 props，前一个状态的 state、<code>getSnapshotBeforeUpdate</code> 的返回值。</p>
<p>使用场景：在这个生命周期方法中，可以对 DOM 进行操作或者进行网络请求。</p>
</li>
<li>
<p><code>componentWillUnmount</code>：这个生命周期函数会在组件卸载以及销毁之前调用。<strong>不应调用 <code>setState()</code></strong>，因为该组件将永远不会重新渲染。</p>
<p>使用场景：通常用来执行组件的清理操作，例如，清除 timer，取消网络请求或清除在 <code>componentDidMount()</code> 中创建的订阅等。</p>
</li>
</ul>
<h1 id="_2-类组件" tabindex="-1"><a class="header-anchor" href="#_2-类组件" aria-hidden="true">#</a> 2 类组件</h1>
<p>类组件是基于ES6的class来定义的通过继承<code>React.Component</code> 得来的 React 组件。类组件提供了所有的生命周期的实例方法以及一些额外的 API：</p>
<ul>
<li>
<p>setState()：</p>
<p><code>setState()</code> 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。这是用于更新用户界面以响应事件处理器和处理服务器数据的主要方式</p>
<blockquote>
<p>应该将 <code>setState()</code> 视为<strong>请求</strong>而不是立即更新组件的命令。<code>setState()</code> 并不总是立即更新组件。它会批量推迟更新。这使得在调用 <code>setState()</code> 后立即读取 <code>this.state</code> 成为了隐患。为了消除隐患，请使用 <code>componentDidUpdate</code> 或者 <code>setState</code> 的回调函数（<code>setState(updater, callback)</code>），这两种方式都可以保证在应用更新后触发。</p>
</blockquote>
<p><code>setState()</code>有两个参数：</p>
<p>参数一为带有形式参数的 <code>updater</code> 函数或对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//函数方式根据 props.step 来增加 state</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> props<span class="token punctuation">.</span>step<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//stateChange 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>如果后续状态取决于当前状态，我们建议使用 updater 函数的形式代替对象形式</strong>：</p>
</li>
<li>
<p>forceUpdate()：</p>
<p>默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 <code>render()</code> 方法依赖于其他数据，则可以调用 <code>forceUpdate()</code> 强制让组件重新渲染。通常你应该避免使用 <code>forceUpdate()</code>，尽量在 <code>render()</code> 中使用 <code>this.props</code> 和 <code>this.state</code>。</p>
<p>调用 <code>forceUpdate()</code> 将致使组件调用 <code>render()</code> 方法，此操作会跳过该组件的 <code>shouldComponentUpdate()</code>。但其子组件会触发正常的生命周期方法，包括 <code>shouldComponentUpdate()</code> 方法。如果标记发生变化，React 仍将只更新 DOM。</p>
</li>
</ul>
<p>class 属性</p>
<ul>
<li>
<p>defaultProps：</p>
<p><code>defaultProps</code> 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 <code>null</code> 的情况。例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

CustomButton<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'blue'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>displayName：<code>displayName</code> 字符串多用于调试消息。如果调试时需要显示不同的名称或创建高阶组件</p>
</li>
</ul>
<p>实例属性</p>
<ul>
<li>props：组件标签上的属性对象，需特别注意，<code>this.props.children</code> 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义。</li>
<li>state：组件中的 state 包含了随时可能发生变化的数据。state 由用户自定义，它是一个普通 JavaScript 对象。如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。永远不要直接改变 <code>this.state</code></li>
</ul>
<h2 id="纯组件" tabindex="-1"><a class="header-anchor" href="#纯组件" aria-hidden="true">#</a> 纯组件</h2>
<p>类组件分为普通类组件(React.Component)以及纯类组件(React.PureComponent)。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Component</span>
<span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// PureComponent</span>
<span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>React.Component</code>和<code>React.PureComponent</code>区别</p>
<p>先了解下React生命周期函数shouldComponentUpdate，这个函数返回一个布尔值，如果返回true，那么当props或state改变的时候进行更新；如果返回false，当props或state改变的时候不更新，默认返回true。这里的更新不更新，其实说的是执不执行<code>render</code>函数，如果不执行render函数，那该组件和其子组件都不会重新渲染。</p>
<p>区别：</p>
<ul>
<li>
<p>1、继承PureComponent时，不能再重写shouldComponentUpdate</p>
</li>
<li>
<p>2、React.PureComponent基于shouldComponentUpdate做了一些优化，通过prop和state的浅比较来实现shouldComponentUpdate，也就是说，如果是引用类型的数据，只会比较是不是同一个地址，而不会比较具体这个地址存的数据是否完全一致。</p>
</li>
</ul>
<p>因此：仅在你的 props 和 state 较为简单时，才使用 <code>React.PureComponent</code>，或者在深层数据结构发生变化时调用 <a href="https://zh-hans.reactjs.org/docs/react-component.html#forceupdate" target="_blank" rel="noopener noreferrer"><code>forceUpdate()</code><ExternalLinkIcon/></a> 来确保组件被正确地更新。此外，<code>React.PureComponent</code> 中的 <code>shouldComponentUpdate()</code> 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListOfWords</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>PureComponent渲染结果<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WordAdder</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'marklar'</span><span class="token punctuation">]</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// This section is bad style and causes a bug</span>
     <span class="token keyword">const</span> words <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>words<span class="token punctuation">;</span>
     words<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'marklar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">words</span><span class="token operator">:</span> words<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// slice() 方法返回一个新的数组对象</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span>
         <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>Component渲染结果<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
             <span class="token operator">&lt;</span>ListOfWords words<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>words<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
             <span class="token operator">&lt;</span>ListOfWords words<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>WordAdder <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h1 id="_3-函数组件初步" tabindex="-1"><a class="header-anchor" href="#_3-函数组件初步" aria-hidden="true">#</a> 3 函数组件初步</h1>
<p>早期并没有 React-Hooks 的加持，函数组件内部无法定义和维护 state，因此它还有一个别名叫“无状态组件”。以下是一个典型的函数组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">DemoFunction</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> text <span class="token punctuation">}</span> <span class="token operator">=</span> props
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"demoFunction"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">function 组件所接收到的来自外界的文本内容是：[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>特点：</p>
<ul>
<li>只负责接收 props，渲染 DOM</li>
<li>没有 state</li>
<li>返回了一个 React 元素</li>
<li>不能访问生命周期方法</li>
<li>不需要显示声明 this 关键字：在 ES6 的类声明中往往需要将函数的 this 关键字绑定到当前作用域，而因为函数式声明的特性，我们不需要再强制绑定。</li>
</ul>
<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<p><a href="https://juejin.cn/post/6844903735043293191" target="_blank" rel="noopener noreferrer">React（二）：类组件、函数式组件 - 掘金<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/7096137407409422344" target="_blank" rel="noopener noreferrer">React 生命周期详解 - 掘金 (juejin.cn)<ExternalLinkIcon/></a></p>
</template>
