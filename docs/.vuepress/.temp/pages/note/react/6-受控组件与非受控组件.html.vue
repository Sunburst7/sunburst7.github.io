<template><p>在React中使用HTML默认的表单可以完成提交表单到新页面的功能，在 HTML 中，表单元素（如<code>&lt;input&gt;</code>、 <code>&lt;textarea&gt;</code> 和 <code>&lt;select&gt;</code>）之类的表单元素通常自己维护数据，并根据用户输入进行更新。但需要访问到用户填写的表单数据，React中推荐<strong>受控组件</strong>的方式，但任然有一种非受控组件的方式需要了解。</p>
<h2 id="_1-受控组件" tabindex="-1"><a class="header-anchor" href="#_1-受控组件" aria-hidden="true">#</a> 1 受控组件</h2>
<p>在 React 中，受控组件的可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用<code>setState()</code>来更新。使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。[<code>setState()</code> 自动将部分 state 合并到当前 state, 只需调用它更改部分 state 即可。]</p>
<p>在受控组件上指定 value 的 prop 会阻止用户更改输入。下面的代码演示输入最初被锁定，但在短时间延迟后变为可编辑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token string">"hi"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-1-基础用法" tabindex="-1"><a class="header-anchor" href="#_1-1-基础用法" aria-hidden="true">#</a> 1.1 基础用法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Form</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 受控组件的唯一数据源</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textareaValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectValue</span><span class="token operator">:</span> <span class="token string">'coconut'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>inputHandleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inputHandleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>textareaHandleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">textareaHandleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>selectHandleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectHandleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 控制input组件的改变</span>
    <span class="token function">inputHandleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 控制textarea组件的改变</span>
    <span class="token function">textareaHandleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textareaValue</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 控制select组件的改变</span>
    <span class="token function">selectHandleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">selectValue</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 表单的提交</span>
    <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'提交: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token operator">+</span><span class="token string">'\n'</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>textareaValue<span class="token operator">+</span><span class="token string">'\n'</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>label<span class="token operator">></span>
            <span class="token literal-property property">input</span><span class="token operator">:</span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputHandleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>label<span class="token operator">></span>
            <span class="token literal-property property">textarea</span><span class="token operator">:</span>
            <span class="token operator">&lt;</span>textarea value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>textareaValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textareaHandleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>label<span class="token operator">></span>
          <span class="token literal-property property">select</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>select value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selectHandleChange<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"grapefruit"</span><span class="token operator">></span>葡萄柚<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
            <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"lime"</span><span class="token operator">></span>酸橙<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
            <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"coconut"</span><span class="token operator">></span>椰子<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
            <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"mango"</span><span class="token operator">></span>芒果<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"提交"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>由于在表单元素上设置了 <code>value</code> 属性，因此显示的值将始终为 <code>this.state.value</code>，这使得 React 的 state 成为唯一数据源。由于 <code>handlechange</code> 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。</p>
<blockquote>
<p>你可以将数组传递到 <code>value</code> 属性中，以支持在 <code>select</code> 标签中选择多个选项：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;select multiple={true} value={['B', 'C']}>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 HTML 中，<code>&lt;input type=&quot;file&quot;&gt; </code>允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 File API 进行控制。因为它的 value 只读，所以它是 React 中的一个<strong>非受控</strong>组件。</p>
</blockquote>
<h3 id="_1-2-多个输入" tabindex="-1"><a class="header-anchor" href="#_1-2-多个输入" aria-hidden="true">#</a> 1.2 多个输入</h3>
<p>当需要处理多个 <code>input</code> 元素时，我们可以给每个元素添加 <code>name</code> 属性，并让处理函数根据 <code>event.target.name</code> 的值选择要执行的操作。或者根据类型判断对应的value：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Reservation</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isGoing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">numberOfGuests</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token comment">// 多于三个的情况可以用switch</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> target<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'isGoing'</span> <span class="token operator">?</span> target<span class="token punctuation">.</span>checked <span class="token operator">:</span> target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token comment">//const value = target.type === 'checkbox' ? target.checked : target.value;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> target<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>
          <span class="token literal-property property">参与</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            name<span class="token operator">=</span><span class="token string">"isGoing"</span>
            type<span class="token operator">=</span><span class="token string">"checkbox"</span>
            checked<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isGoing<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>
          <span class="token literal-property property">来宾人数</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            name<span class="token operator">=</span><span class="token string">"numberOfGuests"</span>
            type<span class="token operator">=</span><span class="token string">"number"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>numberOfGuests<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="_2-ref" tabindex="-1"><a class="header-anchor" href="#_2-ref" aria-hidden="true">#</a> 2 Ref</h2>
<p>作为非受控组件的核心技术，<code>Refs</code>直接访问真实DOM的能力，不同于prop数据流，<code>Refs</code>可以在典型数据流之外强制修改子组件。被修改的子组件可能是一个 <strong>React 组件的实例</strong>，也可能是一个 <strong>DOM 元素</strong>。</p>
<p>下面是官方推荐使用Refs的几种场景：</p>
<ul>
<li>管理焦点，文本选择或媒体播放。</li>
<li>触发强制动画。</li>
<li>集成第三方 DOM 库。</li>
</ul>
<h3 id="_2-1-基础用法" tabindex="-1"><a class="header-anchor" href="#_2-1-基础用法" aria-hidden="true">#</a> 2.1 基础用法</h3>
<p>Refs 有两种创建方法，创建后通过 <code>ref</code> 属性附加到 React 元素。通常将 Refs 分配给类的实例属性，以便可以在整个组件中引用它们。</p>
<ul>
<li>
<p><strong>createRef()</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p><strong>回调 refs</strong>：React元素的Ref属性传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomTextInput2</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">focusTextInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token comment">// 使用原生 DOM API 使 text 输入框获得焦点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件挂载后，让文本框自动获得焦点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React，</span>
    <span class="token comment">// 这种方式是内联函数定义的，在更新过程中它会被执行两次，</span>
    <span class="token comment">// 第一次传入参数 null，然后第二次会传入参数 DOM 元素。</span>
    <span class="token comment">// 这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。</span>
    <span class="token comment">// 通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> element<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"button"</span>
          value<span class="token operator">=</span><span class="token string">"Focus the text input"</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li>
</ul>
<p>当 ref 被传递给 <code>render</code> 中的元素时，对该节点的引用可以在 ref 的 <code>current</code> 属性中被访问。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>当 <code>ref</code> 属性用于 HTML 元素时， DOM 元素作为其 <code>current</code> 属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建一个 ref 来存储 textInput 的 DOM 元素</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接使用原生 API 使 text 输入框获得焦点,通过 "current" 来访问 DOM 节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 告诉 React 我们想把 &lt;input> ref 关联到render()创建的 `textInput` 上</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"button"</span>
          value<span class="token operator">=</span><span class="token string">"Focus the text input"</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li>
<li>
<p>当 <code>ref</code> 属性用于自定义 class 组件时，组件的挂载实例作为其 <code>current</code> 属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">AutoFocusTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取的是CustomeTextInput组件实例，是一个对象 有focusTextInput方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>CustomTextInput ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
</ul>
<p>注意：默认情况下，<strong>你不能在函数组件上使用 <code>ref</code> 属性</strong>，因为它们没有实例，你可以<strong>在函数组件内部使用 <code>ref</code> 属性</strong>，只要它指向一个 DOM 元素或 class 组件</p>
<h3 id="_2-2-refs-转发" tabindex="-1"><a class="header-anchor" href="#_2-2-refs-转发" aria-hidden="true">#</a> 2.2 Refs 转发</h3>
<p>Refs转发技术通俗的理解，<strong>就是在父组件中获得子组件内部的React元素的引用</strong>，一般情况下只能获得子组件本身的引用，这种用法虽然破坏了封装的特性，但其对某些组件，尤其是可重用的组件库是很有用的。</p>
<p><code>React.forwardRef</code> 会创建一个React组件，这个组件能够将其接受的 <a href="https://zh-hans.reactjs.org/docs/refs-and-the-dom.html" target="_blank" rel="noopener noreferrer">ref<ExternalLinkIcon/></a> 属性转发到其组件树下的另一个组件中。这种技术并不常见，但在以下两种场景中特别有用：</p>
<ul>
<li>转发 refs 到 DOM 组件（本节的内容）</li>
<li>在高阶组件中转发 refs（暂未提到）</li>
</ul>
<p><code>React.forwardRef</code> 接受<code>render(props, ref)</code>函数作为参数。返回 React 元素节点。</p>
<p>在下面的示例中，<code>FancyButton</code> 使用 <code>React.forwardRef</code> 来获取传递给它的 <code>ref</code>，然后转发到它渲染的 DOM <code>button</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 利用React.forwardRef创建一个组件</span>
<span class="token keyword">const</span> FancyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>button ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"FancyButton"</span><span class="token operator">></span>
    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 你可以直接获取 DOM button 的 ref：</span>
<span class="token keyword">const</span> ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>FancyButton ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span><span class="token operator">></span>Click me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>FancyButton<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这样，使用 <code>FancyButton</code> 的组件可以获取底层 DOM 节点 <code>button</code> 的 ref ，并在必要时访问，就像其直接使用 DOM <code>button</code> 一样。</p>
<blockquote>
<p>以下是对上述示例发生情况的逐步解释：</p>
<ol>
<li>我们通过调用 <code>React.createRef</code> 创建了一个React ref并将其赋值给 <code>ref</code> 变量。</li>
<li>我们通过指定 <code>ref</code> 为 JSX 属性，将其向下传递给 <code>&lt;FancyButton ref={ref}&gt;</code>。</li>
<li>React 传递 <code>ref</code> 给 <code>forwardRef</code> 内函数 <code>(props, ref) =&gt; ...</code>，作为其第二个参数。</li>
<li>我们向下转发该 <code>ref</code> 参数到 <code>&lt;button ref={ref}&gt;</code>，将其指定为 JSX 属性。</li>
<li>当 ref 挂载完成，<code>ref.current</code> 将指向 <code>&lt;button&gt;</code> DOM 节点。</li>
</ol>
</blockquote>
<p>注意：</p>
<blockquote>
<ul>
<li>
<p>第二个参数 <code>ref</code> 只在使用 <code>React.forwardRef</code> 定义组件时存在。常规函数和 class 组件不接收 <code>ref</code> 参数，且 props 中也不存在 <code>ref</code>。</p>
</li>
<li>
<p>Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。</p>
</li>
</ul>
</blockquote>
<h2 id="_3-非受控组件" tabindex="-1"><a class="header-anchor" href="#_3-非受控组件" aria-hidden="true">#</a> 3 非受控组件</h2>
<p>非受控组件技术依赖于<code>Refs</code>，使用 ref 来从 DOM 节点中获取表单数据。非受控组件将真实数据储存在 DOM 节点中。</p>
<p>如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。</p>
<p>下面的代码使用非受控组件接受一个表单的值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">NameForm</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A name was submitted: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>
          <span class="token literal-property property">Name</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"Submit"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>在 React 渲染生命周期时，表单元素上的 <code>value</code> 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 <code>defaultValue</code> 属性，而不是 <code>value</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label<span class="token operator">></span>
        <span class="token literal-property property">Name</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>input
          defaultValue<span class="token operator">=</span><span class="token string">"Bob"</span>
          type<span class="token operator">=</span><span class="token string">"text"</span>
          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"Submit"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>同样，<code>&lt;input type=&quot;checkbox&quot;&gt;</code> 和 <code>&lt;input type=&quot;radio&quot;&gt;</code> 支持 <code>defaultChecked</code>，<code>&lt;select&gt;</code> 和 <code>&lt;textarea&gt;</code> 支持 <code>defaultValue</code>。</p>
<p>在 React 中，<code>&lt;input type=&quot;file&quot; /&gt;</code> 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。开发者使用 File API 与文件进行交互。下面的例子显示了如何创建一个DOM 节点的 ref从而在提交表单时获取文件的信息：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FileInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fileInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Selected file - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>
          Upload file<span class="token operator">:</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>'root<span class="token punctuation">)</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>FileInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
