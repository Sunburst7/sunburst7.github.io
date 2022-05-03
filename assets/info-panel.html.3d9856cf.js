import{f as r,r as a,o as i,c as k,a as n,d as s,w as d,F as b,e as t,b as e}from"./app.1d8a7e66.js";const F=n("h1",{id:"info-panel-\u4FE1\u606F\u677F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#info-panel-\u4FE1\u606F\u677F","aria-hidden":"true"},"#"),t(" Info-Panel \u4FE1\u606F\u677F")],-1),m=t("\u7528\u4E8E\u5C55\u793A\u4FE1\u606F\uFF0C\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C06\u5BF9\u8C61\u7684\u952E\u503C\u4F18\u96C5\u7684\u5C55\u793A\u5728\u5361\u7247\u4E0A\uFF0C\u6CE8\u610Ftype\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u56FE\u6807\uFF0C\u540D\u79F0\u53C2\u8003"),g={href:"https://icons.getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},h=t("Bootstrap Icons "),E=e(`<p>title\u8868\u793A\u4F5C\u4E3Atitle\u7684\u5C5E\u6027\u540D\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">14</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">title</span><span class="token operator">:</span>name<span class="token comment">//\u8868\u793Abob\u4F5C\u4E3A\u6807\u9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6574\u4E2A\u4FE1\u606F\u677F\u91C7\u7528\u7684\u662F\u81EA\u9002\u5E94\u5927\u5C0F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0D\u7528\u5173\u5FC3\u6BCF\u884C\u7684\u957F\u5BBD\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u9002\u5E94\u8C03\u6574\u8FBE\u5230\u6700\u4F73\u6548\u679C\uFF0C\u800C\u53EA\u9700\u8981\u5173\u5FC3\u6574\u4F53\u7684\u957F\u5BBD\u3002</p><p>\u4E0B\u9762\u662F\u4E24\u4E2A\u4F8B\u5B50\uFF0C\u5206\u522B\u662F\u4E0D\u4F7F\u7528\u63D2\u69FD\u4E0E\u4F7F\u7528\u63D2\u69FD\uFF1A</p>`,4),q={class:"line"},C=e(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-info-panel</span> 
      <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-info-panel</span> 
      <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>github<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>githubObj<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ffab00<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-info-panel</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">&#39;123456@163.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">&#39;SDU&#39;</span>
<span class="token punctuation">}</span> 
<span class="token keyword">const</span> githubObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;scene-ui&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">synopsis</span><span class="token operator">:</span><span class="token string">&#39;a scene-drived ui lib for a more quickly frontend!!!!!!!!!&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stars</span><span class="token operator">:</span><span class="token string">&#39;100&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">forks</span><span class="token operator">:</span><span class="token string">&#39;100&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">languageList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ts&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="info-panel-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#info-panel-\u5C5E\u6027" aria-hidden="true">#</a> Info-Panel \u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u4FE1\u606F\u677F\u5BBD\u5EA6</td><td>string|number</td><td>-</td><td>-</td></tr><tr><td>height</td><td>\u4FE1\u606F\u677F\u9AD8\u5EA6</td><td>string|number</td><td>-</td><td>-</td></tr><tr><td>theme</td><td>\u4FE1\u606F\u677F\u989C\u8272\u4E3B\u4F53</td><td>string</td><td>main/success/info/warning/error</td><td>main</td></tr><tr><td>type</td><td>\u4FE1\u606F\u677F\u5C55\u793A\u4FE1\u606F\u7C7B\u578B\uFF0C\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u5DE6\u4E0A\u89D2\u56FE\u6807</td><td>string</td><td>bootstrap-icon\u56FE\u6807\u540D\u79F0\uFF0C\u5982\uFF08person\uFF09</td><td>info-square-fill</td></tr><tr><td>title</td><td>\u4FE1\u606F\u677F\u6807\u9898\u7684\u5C5E\u6027\u540D</td><td>string</td><td>info.keys()</td><td>-</td></tr><tr><td>info</td><td>\u4FE1\u606F\u677F\u4F20\u5165\u7684\u5BF9\u8C61</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="info-panel-\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#info-panel-\u63D2\u69FD" aria-hidden="true">#</a> Info-Panel \u63D2\u69FD</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-/default</td><td>\u4FE1\u606F\u677F\u53F3\u4E0A\u89D2\u533A\u57DF</td></tr></tbody></table>`,5),B=r({setup(f){const u={name:"Bob",age:"22",email:"123456@163.com",school:"SDU"},o={name:"scene-ui",synopsis:"a scene-drived ui lib for a more quickly frontend!!!!!!!!!",stars:"100",forks:"100",languageList:["java","vue","ts"]};return(y,v)=>{const l=a("ExternalLinkIcon"),p=a("s-info-panel"),c=a("s-icon");return i(),k(b,null,[F,n("p",null,[m,n("a",g,[h,s(l)])]),E,n("div",q,[s(p,{width:300,height:300,type:"person",title:"name",info:u}),s(p,{width:300,height:300,theme:"success",type:"github",title:"name",info:o},{default:d(()=>[s(c,{name:"star",color:"#ffab00",size:"24px"})]),_:1})]),C],64)}}});export{B as default};
