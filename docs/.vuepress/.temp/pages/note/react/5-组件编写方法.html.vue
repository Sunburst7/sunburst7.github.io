<template><p>本篇主要学习React官方教程的一些特殊的要求的组件编写方法。</p>
<h2 id="_1-条件渲染" tabindex="-1"><a class="header-anchor" href="#_1-条件渲染" aria-hidden="true">#</a> 1 条件渲染</h2>
<p>实现根据条件渲染的方式主要有以下几种：</p>
<ul>
<li><code>If Else</code>条件渲染</li>
<li>使用三元运算符进行条件渲染</li>
<li>&amp;&amp;运算符的条件渲染</li>
<li>带<code>switch case</code>多条件渲染</li>
<li>枚举对象的多条件渲染</li>
<li>HOC(高阶组件)条件渲染（计划中）</li>
</ul>
<p>在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 <code>render</code> 方法直接返回 <code>null</code>，而不进行任何渲染。在组件的 <code>render</code> 方法中返回 <code>null</code> 并不会影响组件的生命周期。<code>componentDidUpdate</code> 依然会被调用。</p>
<h3 id="_1-1-if-else" tabindex="-1"><a class="header-anchor" href="#_1-1-if-else" aria-hidden="true">#</a> 1.1 if-else</h3>
<p>JSX 中的方括号{}中注入和混合一些 javascript 代码。但是它有一些局限性——不能直接向其中插入 if-else 语句。详情见官方解释：<a href="https://react-cn.github.io/react/tips/if-else-in-JSX.html" target="_blank" rel="noopener noreferrer">If-Else in JSX | React (react-cn.github.io)<ExternalLinkIcon/></a></p>
<p>因此if-else 最好在在 JSX 外层使用，这里结合官网的例子，是一个根据<code>isLoggedIn</code>的值来切换按钮的按钮组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Welcome back<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">GuestGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Please sign up<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> props<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserGreeting <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>GuestGreeting <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">LoginButton</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>
        Login
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">LogoutButton</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>
        Logout
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LoginControl</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleLoginClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleLogoutClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleLoginClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleLogoutClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>
      <span class="token keyword">let</span> button<span class="token punctuation">;</span>
      <span class="token comment">// 在JSX外层使用IF-ELSE</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>      
          button <span class="token operator">=</span> <span class="token operator">&lt;</span>LogoutButton onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>    
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>      
          button <span class="token operator">=</span> <span class="token operator">&lt;</span>LoginButton onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>    
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>Greeting isLoggedIn<span class="token operator">=</span><span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>        
          <span class="token punctuation">{</span>button<span class="token punctuation">}</span>      
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>LoginControl <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h3 id="_1-2-三元运算符" tabindex="-1"><a class="header-anchor" href="#_1-2-三元运算符" aria-hidden="true">#</a> 1.2 三元运算符</h3>
<p>JavaScript 中的三目运算符<code>condition ? true : false</code>，三元运算符是常见 if-else 语句的快捷方式。适用于：</p>
<ul>
<li>
<p>条件变量或函数返回值赋值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Conditional rendering with ternary operator</span>
<span class="token keyword">let</span> isDrinkCoffee <span class="token operator">=</span> role <span class="token operator">===</span> <span class="token string">"programmer"</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// Conditional rendering with ternary operator</span>
<span class="token keyword">function</span> <span class="token function">isDrinkCoffee</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> role <span class="token operator">===</span> <span class="token string">"programmer"</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>于 JSX 中的条件渲染</p>
</li>
</ul>
<p>对于上面的例子，将核心的render()函数改写为三元运算符：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>isLoggedIn
       <span class="token operator">?</span> <span class="token operator">&lt;</span>LogoutButton onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> 
       <span class="token operator">:</span> <span class="token operator">&lt;</span>LoginButton onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> 
       <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_1-3-与运算符" tabindex="-1"><a class="header-anchor" href="#_1-3-与运算符" aria-hidden="true">#</a> 1.3 与运算符&amp;&amp;</h3>
<p>与运算符进行条件渲染的原理是：在 JavaScript 中，<code>true &amp;&amp; expression</code> 总是会返回 <code>expression</code>, 而 <code>false &amp;&amp; expression</code> 总是会返回 <code>false</code>。<strong>因此，如果条件是 <code>true</code>，<code>&amp;&amp;</code> 右侧的元素就会被渲染，如果是 <code>false</code>，React 会忽略并跳过它。</strong></p>
<p>适用于：使用它进行简单的条件渲染，只执行满足条件或不满足条件的语句块，不会两面都执行。</p>
<p>下面是一个简单的例子，当消息盒内有信息时显示信息条数，没有信息时不显示。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Mailbox</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> unreadMessages <span class="token operator">=</span> props<span class="token punctuation">.</span>unreadMessages<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>
          You have <span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length<span class="token punctuation">}</span> unread messages<span class="token punctuation">.</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Re: React'</span><span class="token punctuation">,</span> <span class="token string">'Re:Re: React'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Mailbox unreadMessages<span class="token operator">=</span><span class="token punctuation">{</span>messages<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_1-4-switch的多条件渲染" tabindex="-1"><a class="header-anchor" href="#_1-4-switch的多条件渲染" aria-hidden="true">#</a> 1.4 switch的多条件渲染</h3>
<p><code>switch-case</code>语句在 JSX 中进行条件渲染。但是，你需要将其包装在 IIFE 中。</p>
<p>下面是一个假设你要呈现一个基于 <code>alert</code> 状态设置样式的<code>alert</code>组件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">"warning"</span><span class="token operator">:</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"warning"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>messageState<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"error"</span><span class="token operator">:</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"error"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>messageState<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"success"</span><span class="token operator">:</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"success"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>messageState<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"info"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>messageState<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_1-5-对象的条件渲染" tabindex="-1"><a class="header-anchor" href="#_1-5-对象的条件渲染" aria-hidden="true">#</a> 1.5 对象的条件渲染</h3>
<p>使用对象进行条件渲染适用于：分配具有多个条件变量值或返回值。</p>
<p>对于1.4中的例子。你要基于状态呈现 alert 组件。这是使用枚举对象有条件地呈现它的方式。你需要创建一个枚举对象，首先称为“ ALERT_STATUS”。然后，只需在 JSX 中使用 <code>[]</code>括号内的状态变量来调用它，该变量的值为'warning'，'error'，'success'或'info'。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">ALERT_STATUS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"warning"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"error"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"success"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"info"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">ALERT_STATUS</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果需要传递参数可以借助函数返回一个对象，该对象是我们的枚举对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">ALERT_STATUS</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"warning"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"error"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"success"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"info"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">ALERT_STATUS</span><span class="token punctuation">(</span>messageState<span class="token punctuation">)</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>将枚举对象拆分到单独文件来复用</strong></p>
<p>关于使用枚举对象进行条件渲染的最好的特性是可以复用。回到示例案例，Alert 组件是 React 中通常可重用的组件。因此，当你要有条件地渲染它时，也可以让它复用。</p>
<p>你可以在单独的文件中定义枚举，然后将它导出。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AlertComponent <span class="token keyword">from</span> <span class="token string">"./path/to/AlertComponent"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ALERT_STATUS</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"warning"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"error"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"success"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token operator">&lt;</span>AlertComponent status<span class="token operator">=</span><span class="token string">"info"</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>然后，在要在组件中使用它时将其导入。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALERT_STATUS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./alertStatus"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-列表与key" tabindex="-1"><a class="header-anchor" href="#_2-列表与key" aria-hidden="true">#</a> 2 列表与KEY</h2>
<p>官方推荐使用map()函数来构造一个列表，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">NumberList</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> numbers <span class="token operator">=</span> props<span class="token punctuation">.</span>numbers<span class="token punctuation">;</span>
  <span class="token keyword">const</span> listItems <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>      
        <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token punctuation">{</span>listItems<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Mailbox unreadMessages<span class="token operator">=</span><span class="token punctuation">{</span>messages<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>如果<code>&lt;li&gt;</code>没有添加key值，会看到一个警告 <code>a key should be provided for list items</code>，意思是当你创建一个元素时，必须包括一个特殊的 <code>key</code> 属性。</p>
</blockquote>
<p>key的作用：</p>
<p>key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。</p>
<p>一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key，当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key。</p>
<p>为什么说是万不得已呢？当列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。</p>
<p>一些key的注意事项：</p>
<ul>
<li>
<p>key的位置</p>
<p>元素的 key 只有放在就近的数组上下文中才有意义。比方说，如果你提取出一个 <code>ListItem</code> 组件，你应该把 key 保留在数组中的这个 <code>&lt;ListItem /&gt;</code> 元素上，而不是放在 <code>ListItem</code> 组件中的 <code>&lt;li&gt;</code> 元素上。一个好的经验法则是：<strong>在 <code>map()</code> 方法中的元素需要设置 key 属性。</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListItem</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 正确！这里不需要指定 key：</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">NumberList</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> numbers <span class="token operator">=</span> props<span class="token punctuation">.</span>numbers<span class="token punctuation">;</span>
  <span class="token keyword">const</span> listItems <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token comment">// 正确！key 应该在数组的上下文中被指定</span>
    <span class="token operator">&lt;</span>ListItem key<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>listItems<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>NumberList numbers<span class="token operator">=</span><span class="token punctuation">{</span>numbers<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li>
<li>
<p>key在只是兄弟节点是唯一的：</p>
<p>数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> props<span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>sidebar<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">{</span>content<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hello World'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Welcome to learning React!'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Installation'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'You can install React from npm.'</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// v18 的新方法</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Blog posts<span class="token operator">=</span><span class="token punctuation">{</span>posts<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li>
<li>
<p>在组件中是无法读取到props.key的</p>
</li>
<li>
<p>可以直接在JSX中生成列表：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">NumberList</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> numbers <span class="token operator">=</span> props<span class="token punctuation">.</span>numbers<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token operator">&lt;</span>ListItem key<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                  value<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>但如果一个 <code>map()</code> 嵌套了太多层级，最好需要进行组件化</p>
</li>
</ul>
<h2 id="_3-组件状态提升" tabindex="-1"><a class="header-anchor" href="#_3-组件状态提升" aria-hidden="true">#</a> 3 组件状态提升</h2>
<p>在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，<strong>如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中</strong>。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。</p>
<h2 id="_4-组件组合" tabindex="-1"><a class="header-anchor" href="#_4-组件组合" aria-hidden="true">#</a> 4 组件组合</h2>
<p>下面会举一些适合使用组合的场景来说明在React中组合优于继承：</p>
<h3 id="_4-1-包含关系" tabindex="-1"><a class="header-anchor" href="#_4-1-包含关系" aria-hidden="true">#</a> 4.1 包含关系</h3>
<p>有些组件无法提前知晓它们子组件的具体内容。在 <code>Sidebar</code>（侧边栏）和 <code>Dialog</code>（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。</p>
<p>我们建议这些组件使用一个特殊的 <code>children</code> prop 来将他们的子组件传递到渲染结果中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">SplitPane</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"SplitPane"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"SplitPane-left"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>left<span class="token punctuation">}</span>      
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"SplitPane-right"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>right<span class="token punctuation">}</span>      
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>SplitPane
      left<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>Contacts <span class="token operator">/</span><span class="token operator">></span>      
      <span class="token punctuation">}</span>
      right<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>Chat <span class="token operator">/</span><span class="token operator">></span>      
      <span class="token punctuation">}</span> 
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>&lt;Contacts /&gt;</code> 和 <code>&lt;Chat /&gt;</code> 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。(类似于槽slot)</p>
<h3 id="_4-2-特殊实例" tabindex="-1"><a class="header-anchor" href="#_4-2-特殊实例" aria-hidden="true">#</a> 4.2 特殊实例</h3>
<p>有些时候，我们会把一些组件看作是其他组件的特殊实例，比如 <code>WelcomeDialog</code> 可以说是 <code>Dialog</code> 的特殊实例。</p>
<p>在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过传入不同的 props 定制并渲染“一般”组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Dialog</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>FancyBorder color<span class="token operator">=</span><span class="token string">"blue"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"Dialog-title"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"Dialog-message"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>FancyBorder<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数特殊实例</span>
<span class="token keyword">function</span> <span class="token function">WelcomeDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Dialog
      title<span class="token operator">=</span><span class="token string">"Welcome"</span>
      message<span class="token operator">=</span><span class="token string">"Thank you for visiting our space craft!"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类的特殊实例</span>
<span class="token keyword">class</span> <span class="token class-name">SignUpDialog</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleSignUp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSignUp</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Dialog title<span class="token operator">=</span><span class="token string">"Mars Exploration Program"</span>
              message<span class="token operator">=</span><span class="token string">"How should we refer to you?"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login<span class="token punctuation">}</span>
               onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSignUp<span class="token punctuation">}</span><span class="token operator">></span>
          Sign Me Up<span class="token operator">!</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dialog<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">login</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleSignUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Welcome aboard, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div></template>
