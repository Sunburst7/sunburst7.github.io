import{f as d,g as b,r,o as t,c as p,a,d as u,w as s,F as e,b as i,h as c,e as g,t as l}from"./app.1d8a7e66.js";const m=i('<h1 id="card-\u5361\u7247" tabindex="-1"><a class="header-anchor" href="#card-\u5361\u7247" aria-hidden="true">#</a> Card \u5361\u7247</h1><p>\u662F\u4E00\u4E2A\u7279\u6B8A\u5BB9\u5668\uFF0C\u5C06\u4FE1\u606F\u805A\u5408\u5728\u5361\u7247\u5BB9\u5668\u4E2D\u5C55\u793A\uFF0C\u540C\u65F6\u6709\u4E00\u4E2A\u8FB9\u6846\u7684\u9634\u5F71\u6548\u679C\u3002\u5176\u4E3B\u8981prop\u4E3A\uFF1A</p><ul><li>header\uFF1A\u9ED8\u8BA4\u6A21\u677F\u7684\u5934\u90E8\u4FE1\u606F</li><li>shadow\uFF1A\u5361\u7247\u9634\u5F71\u7684\u51FA\u73B0\u65F6\u673A</li><li>bodyStyle\uFF1A\u5361\u7247\u4E3B\u8981\u5185\u90E8\u7684\u6837\u5F0F</li></ul><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5361\u7247\u7EC4\u4EF6\u7684\u5927\u5C0F\u662F\u81EA\u9002\u5E94\u7684\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5CSS\u8BBE\u7F6E\u5BBD\u9AD8\u63A7\u5236\u3002\u63D2\u5165\u81EA\u5B9A\u4E49\u5934\u90E8\u4E0E\u4E3B\u9898\u7684\u4FE1\u606F\u90FD\u4F9D\u8D56\u4E8E\u63D2\u69FD\uFF0C\u8BE6\u60C5\u89C1\u4E0B\u65B9\u7684Card\u63D2\u69FD\u3002</p><p>\u5F53\u6CA1\u6709\u63D0\u4F9Bheader\u6216header\u63D2\u69FD\u65F6\uFF0C\u5361\u7247\u5C06\u6CA1\u6709\u5934\u90E8\u680F\u53EA\u6709body\u4E3B\u4F53\u3002</p><h2 id="\u5934\u90E8\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5934\u90E8\u4FE1\u606F" aria-hidden="true">#</a> \u5934\u90E8\u4FE1\u606F</h2>',6),h={class:"line"},y={class:"card-header"},q=a("span",null,"Card Name",-1),F=g("Operation"),v=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{padding:<span class="token punctuation">&#39;</span>10px<span class="token punctuation">&#39;</span>,display:<span class="token punctuation">&#39;</span>flex<span class="token punctuation">&#39;</span>,flexDirection:<span class="token punctuation">&#39;</span>column<span class="token punctuation">&#39;</span>,justifyContent:<span class="token punctuation">&#39;</span>space-between<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o in 4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ &#39;List item &#39; + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{padding:<span class="token punctuation">&#39;</span>10px<span class="token punctuation">&#39;</span>,display:<span class="token punctuation">&#39;</span>flex<span class="token punctuation">&#39;</span>,flexDirection:<span class="token punctuation">&#39;</span>column<span class="token punctuation">&#39;</span>,justifyContent:<span class="token punctuation">&#39;</span>space-between<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o in 4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ &#39;List item &#39; + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.square</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px
<span class="token punctuation">}</span>
<span class="token selector">.card-header</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u9634\u5F71\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71\u65F6\u673A" aria-hidden="true">#</a> \u9634\u5F71\u65F6\u673A</h2>`,2),E={class:"line"},f=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{padding:<span class="token punctuation">&#39;</span>10px<span class="token punctuation">&#39;</span>,display:<span class="token punctuation">&#39;</span>flex<span class="token punctuation">&#39;</span>,flexDirection:<span class="token punctuation">&#39;</span>column<span class="token punctuation">&#39;</span>,justifyContent:<span class="token punctuation">&#39;</span>space-between<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o in 4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ &#39;List item &#39; + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{padding:<span class="token punctuation">&#39;</span>10px<span class="token punctuation">&#39;</span>,display:<span class="token punctuation">&#39;</span>flex<span class="token punctuation">&#39;</span>,flexDirection:<span class="token punctuation">&#39;</span>column<span class="token punctuation">&#39;</span>,justifyContent:<span class="token punctuation">&#39;</span>space-between<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o in 4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ &#39;List item &#39; + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.square</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px
<span class="token punctuation">}</span>
<span class="token selector">.card-header</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="card-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#card-\u5C5E\u6027" aria-hidden="true">#</a> Card \u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>header</td><td>\u9ED8\u8BA4\u6A21\u677F\u7684\u6807\u9898\u884C</td><td>string</td><td>-</td><td>-</td></tr><tr><td>shadow</td><td>\u663E\u793A\u9634\u5F71\u7684\u65F6\u673A</td><td>string</td><td>always/hover/body</td><td>always</td></tr><tr><td>bodyStyle</td><td>\u5361\u7247\u7684body\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="card-\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#card-\u63D2\u69FD" aria-hidden="true">#</a> Card \u63D2\u69FD</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-\u6216default</td><td>\u5361\u7247\u7684body\u4E3B\u9898\u5185\u5BB9</td></tr><tr><td>header</td><td>\u5361\u7247\u7684\u5934\u90E8\u4FE1\u606F</td></tr></tbody></table>`,5),w=d({setup(x){return b(!0),(C,_)=>{const o=r("s-card"),k=r("s-button");return t(),p(e,null,[m,a("div",h,[u(o,{header:"Title",shadow:"always","body-style":{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},class:"square"},{default:s(()=>[(t(),p(e,null,c(4,n=>a("div",{key:n},l("List item "+n),1)),64))]),_:1}),u(o,{shadow:"always","body-style":{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},class:"square"},{header:s(()=>[a("div",y,[q,u(k,{type:"text"},{default:s(()=>[F]),_:1})])]),default:s(()=>[(t(),p(e,null,c(4,n=>a("div",{key:n},l("List item "+n),1)),64))]),_:1})]),v,a("div",E,[u(o,{shadow:"always","body-style":{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},class:"square"},{default:s(()=>[(t(),p(e,null,c(4,n=>a("div",{key:n},l("List item "+n),1)),64))]),_:1}),u(o,{shadow:"hover","body-style":{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},class:"square"},{default:s(()=>[(t(),p(e,null,c(4,n=>a("div",{key:n},l("List item "+n),1)),64))]),_:1}),u(o,{shadow:"never","body-style":{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},class:"square"},{default:s(()=>[(t(),p(e,null,c(4,n=>a("div",{key:n},l("List item "+n),1)),64))]),_:1})]),f],64)}}});export{w as default};
