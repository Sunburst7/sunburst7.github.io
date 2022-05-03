<template><h1 id="scene-ui组件库" tabindex="-1"><a class="header-anchor" href="#scene-ui组件库" aria-hidden="true">#</a> Scene-UI组件库</h1>
<p>scene-ui组件库是山东大学软件学院的学生计划维护的一个开源组件库。计划实现一个开箱即用的组件库以及一个基于该组件库的低代码开发平台。同时实现3个示例网站。</p>
<ul>
<li>
<p>主要技术栈：Vue3+TypeScript</p>
</li>
<li>
<p>特点：开箱即用、场景组件、低代码开发平台</p>
</li>
</ul>
<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> quick start</h2>
<p>首先你需要安装最新版的<strong>Scene-UI</strong>：</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm i scene-ui --save		//生产环境
npm i scene-ui --save-dev	//开发环境
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>接着你需要在main.ts或其他地方导入我们的全局CSS样式：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">'scene-ui/style'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后按需导入你需要的组件即可：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> SButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="update-version" tabindex="-1"><a class="header-anchor" href="#update-version" aria-hidden="true">#</a> update version</h2>
<p>推荐从node_mudules中删除scene-ui依赖包，再重新使用npm下载</p>
</template>
