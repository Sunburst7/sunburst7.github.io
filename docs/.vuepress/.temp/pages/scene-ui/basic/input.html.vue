<template><h1 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> Input 输入框</h1>
<p>输入单行文本</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>最简单的配置是给组件绑定上modelValue与name即可。Input输入框有两种模式：普通文本与密码，密码不可见，通过type设置，默认为text。placeholder是原生属性。</p>
<p>其他一些配置项：</p>
<ul>
<li>width：设置输入框的宽度</li>
<li>readonly：设置是否只读</li>
<li>clearable：设置输入框是否开启一键清空（type=text的情况下可用）</li>
<li>center：设置文字是否居中</li>
</ul>
<div class="line">
    <s-input v-model="str1"
        name="input"
        placeholder="input something"
        type="text"
    	:width="300"
        :readonly="false"
        :clearable="true"
    />
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str1<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input something<span class="token punctuation">"</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
    	<span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
        <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
        <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="密码框" tabindex="-1"><a class="header-anchor" href="#密码框" aria-hidden="true">#</a> 密码框</h2>
<p>设置type=&quot;password&quot;时input为密码框。</p>
<div class="line">
    <s-input v-model="str2"
        name="input"
        placeholder="password?"
        type="password"
    	:width="300"
        :readonly="false"
        :clearable="true"
        :center="true"
    />
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str2<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password?<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
  	<span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
    <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h2>
<p>与原生disabled类似，设置:disabled=&quot;true&quot;可实现禁用效果</p>
<div class="line">
    <s-input v-model="str3"
        name="input"
        type="text"
    	:width="300"
        :disabled="true"
    />
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str3<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
  	<span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="前后缀" tabindex="-1"><a class="header-anchor" href="#前后缀" aria-hidden="true">#</a> 前后缀</h2>
<p>可以通过具名插槽的方式设置输入框的前后缀，可以放一些图标或者文字提示之类，<strong>注意插入内容的高度不宜超过22px</strong>。</p>
<div class="line">
    <s-input v-model="str4"
        name="input"
        type="text"
    	:width="300"
        placeholder="search"
    >
      <template #prefix>
        <s-icon name="search" color="#aa00ff" size="16px" />
      </template>
      <template #suffix>
        <s-button size="small">go</s-button>
      </template>
    </s-input>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str4<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
  	<span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prefix</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#aa00ff<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16px<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#suffix</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>go<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str4 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="验证函数" tabindex="-1"><a class="header-anchor" href="#验证函数" aria-hidden="true">#</a> 验证函数</h2>
<p>向<code>validate</code>传入一个函数表示验证，函数需要满足一定格式：</p>
<ul>
<li>函数形参是一个string或number代表每次输入的值</li>
<li>函数返回值必须是一个长度为2的数组，第一个值表示输入是否成功，第二个值表示提示。</li>
</ul>
<div class="line">
    <s-input v-model="str5"
        name="input"
        placeholder="input something"
        type="text"
    	:width="300"
        :validate="inputValidator"
    />
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str5<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input something<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
    <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValidator<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> str5 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">inputValidator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string <span class="token operator">|</span> number</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'out of length'</span><span class="token punctuation">]</span>
  <span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'success!'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="input-属性" tabindex="-1"><a class="header-anchor" href="#input-属性" aria-hidden="true">#</a> Input 属性</h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>modelValue/v-model</td>
<td>输入框绑定的值（必要）</td>
<td>string|number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>跟随表单一起提交的原生的name属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>输入框的类型</td>
<td>string</td>
<td>text/password</td>
<td>text</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的输入提示</td>
<td>string</td>
<td>-</td>
<td>input</td>
</tr>
<tr>
<td>width</td>
<td>输入区域的宽度，不是整个组件的宽度</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>disabled</td>
<td>输入框是否禁用</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>输入框是否只读</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>输入框是否开启一键清空（type=text的情况下可用）</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>input文本是否居中</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>validate</td>
<td>输入框的值的验证函数，返回值有格式要求</td>
<td>function</td>
<td>-</td>
<td>undefined</td>
</tr>
</tbody>
</table>
<h2 id="input-插槽" tabindex="-1"><a class="header-anchor" href="#input-插槽" aria-hidden="true">#</a> Input 插槽</h2>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框的前端内容，大小不宜超过22px*22px</td>
</tr>
<tr>
<td>suffix</td>
<td>输入框的后端内容，大小不宜超过22px*22px</td>
</tr>
</tbody>
</table>
<h2 id="input-事件" tabindex="-1"><a class="header-anchor" href="#input-事件" aria-hidden="true">#</a> Input 事件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">change</td>
<td style="text-align:left">输入框切换选项时触发</td>
<td style="text-align:left">newVal:string|number，oldVal:string|number</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">输入框失去焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">输入框获得焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">input</td>
<td style="text-align:left">输入框输入时触发</td>
<td style="text-align:left">val: string|number</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const str1 = ref('')
const str2 = ref('')
const str3 = ref('')
const str4 = ref('')
const str5 = ref('')
const inputValidator = (value: string | number)=>{
  if(value.toString().length > 10)
    return [false, 'out of length']
  else
    return [true, 'success!']
}
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    