import{_ as n,e as s}from"./app.36fc1fbc.js";const a={},e=s(`<h1 id="scene-ui-a-simple-ui-component-lib-with-simple-style" tabindex="-1"><a class="header-anchor" href="#scene-ui-a-simple-ui-component-lib-with-simple-style" aria-hidden="true">#</a> Scene-UI:A simple ui-component-lib with simple style</h1><p>\u{1F389}\u{1F389} Congratulations on the official <strong>v1.0</strong> release</p><p>The scene-ui component library is an <strong>open source component library</strong> maintained by the students of the School of Software of ShanDong University.</p><p><strong>Now a total of 15 basic components, 6 scene components, and 2 ui-method components can be used.</strong></p><p>Main technology stack: Vue3+TypeScript</p><p>Features:</p><ul><li>out-of-the-box,</li><li>scene components</li><li>low-code development platform\uFF08not available\uFF09</li></ul><p>Our website: https://sunburst7.github.io/scene-ui/</p><p>The three of us are rookies, and hope make progress together with the mature devloper.</p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> quick start</h2><p>First you need to install the latest version of Scene-UI:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i scene-ui --save		//produce environment
npm i scene-ui --save-dev	//develop environment
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Then you need to import our global CSS styles in main.ts or elsewhere:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;scene-ui/style&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Then import the components you need as needed:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> SButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;scene-ui&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="update-version" tabindex="-1"><a class="header-anchor" href="#update-version" aria-hidden="true">#</a> update version</h2><p>It is recommended to delete the scene-ui dependency package from node_mudules, and then use npm to download it again</p>`,18);function t(p,o){return e}var c=n(a,[["render",t]]);export{c as default};