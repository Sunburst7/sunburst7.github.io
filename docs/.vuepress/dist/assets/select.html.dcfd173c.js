import{f as d,g as t,r as k,o as m,c as b,a as n,d as e,F as g,e as r,b as o}from"./app.ab9e2f57.js";const E=n("h1",{id:"select-\u9009\u62E9\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#select-\u9009\u62E9\u5668","aria-hidden":"true"},"#"),r(" Select \u9009\u62E9\u5668")],-1),F=n("p",null,"\u7528\u4E8E\u5728\u4E00\u4E9B\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u3002",-1),f=n("ul",null,[n("li",null,"\u5F53\u5355\u9009\u65F6\uFF0C\u9700\u8981\u7ED1\u5B9A\u4E00\u4E2A\u54CD\u5E94\u6027\u53D8\u91CF\u8868\u793A\u7ED3\u679C"),n("li",null,"\u5F53\u591A\u9009\u65F6\uFF0C\u591A\u9009\u6846\u7ED1\u5B9A\u7684\u503C\u662F\u4EE5\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32")],-1),h=n("h2",{id:"\u666E\u901A\u5355\u9009",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u666E\u901A\u5355\u9009","aria-hidden":"true"},"#"),r(" \u666E\u901A\u5355\u9009")],-1),v=n("p",null,"\u8BBE\u7F6Ev-model\uFF0Cname\uFF0Coptions\u5373\u53EF\u3002",-1),q=n("p",null,"\u6CE8\u610F\uFF1Aoptions\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u54CD\u5E94\u6027\u7684\u6570\u7EC4\u3002",-1),A={class:"line"},C=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str1<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> 
      <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;option1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7981\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u9009\u9879" aria-hidden="true">#</a> \u7981\u7528\u9009\u9879</h2><p>\u7ED9disabledOptions\u4F20\u5165\u4E00\u4E2A\u4E0Eoptions\u7B49\u957F\u7684boolean\u6570\u7EC4\uFF0Cfalse\u8868\u793A\u5BF9\u5E94\u7D22\u5F15\u7684\u9879\u4E0D\u7981\u7528\uFF0Ctrue\u8868\u793A\u7981\u7528\u3002</p>`,3),_={class:"line"},B=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str2<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:disabledOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[false,true,false,false,false,false]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;option1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u591A\u9009" tabindex="-1"><a class="header-anchor" href="#\u591A\u9009" aria-hidden="true">#</a> \u591A\u9009</h2><p>\u5F53\u9700\u8981\u591A\u9009\u529F\u80FD\u65F6\uFF0C\u6CE8\u610Fmultiple\u8868\u793A\u662F\u5426\u5F00\u542F\u591A\u9009\u529F\u80FD\uFF0Cmultiple-limit\u8868\u793A\u591A\u9009\u7684\u6570\u91CF\u9650\u5236\u3002</p><p>\u9ED8\u8BA4\u591A\u9009\u9009\u9879\u4E3A\u6C14\u6CE1\u5C55\u793A\uFF0C\u663E\u793A\u6700\u540E\u4E00\u4E2A\u9009\u62E9\u7684\u9009\u9879\uFF0C\u5F53\u524D\u9009\u62E9\u9009\u9879\u6570\u4E0E\u6700\u591A\u9009\u62E9\u7684\u9009\u9879\u6570\u3002</p>`,4),y={class:"line"},D=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str3<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:multiple-limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>str<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:disabledOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[false,true,false,false,false,false]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;option1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;option6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="select-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#select-\u5C5E\u6027" aria-hidden="true">#</a> Select \u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u9009\u62E9\u5668\u7ED1\u5B9A\u7684\u503C</td><td>string</td><td>-</td><td>-</td></tr><tr><td>name</td><td>\u8DDF\u968F\u8868\u5355\u4E00\u8D77\u63D0\u4EA4\u7684\u539F\u751F\u7684name\u5C5E\u6027</td><td>string</td><td>-</td><td>-</td></tr><tr><td>options</td><td>\u9009\u62E9\u5668\u7684\u9009\u9879</td><td>array</td><td>-</td><td>-</td></tr><tr><td>disabledOptions</td><td>\u9009\u9879\u4EEC\u662F\u5426\u88AB\u7981\u7528</td><td><code>Array&lt;boolean&gt;</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>\u9009\u62E9\u5668\u662F\u5426\u88AB\u7981\u7528</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u5668\u7684\u8F93\u5165\u63D0\u793A</td><td>string</td><td>-</td><td>string</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>multipleLimit</td><td>\u591A\u9009\u7684\u6700\u5927\u9009\u62E9\u6570</td><td>number</td><td>-</td><td>1</td></tr><tr><td>collapseTags</td><td>\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A\uFF08\u9ED8\u8BA4\u6C14\u6CE1\u5C55\u793A\uFF09</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="select-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#select-\u4E8B\u4EF6" aria-hidden="true">#</a> Select \u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">\u9009\u62E9\u5668\u5207\u6362\u9009\u9879\u65F6\u89E6\u53D1</td><td style="text-align:left;">val:string</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">\u9009\u62E9\u5668\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;">e: FocusEvent</td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">\u9009\u62E9\u5668\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;">e: FocusEvent</td></tr></tbody></table>`,5),O=d({setup(x){const u=t(["option1","option2","option3","option4","option5","option6"]),l=t(""),c=t(""),i=t("");return(V,s)=>{const p=k("s-select");return m(),b(g,null,[E,F,f,h,v,q,n("div",A,[e(p,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=a=>l.value=a),name:"str",options:u.value},null,8,["modelValue","options"])]),C,n("div",_,[e(p,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=a=>c.value=a),name:"str",options:u.value,disabledOptions:[!1,!0,!1,!1,!1,!1]},null,8,["modelValue","options"])]),B,n("div",y,[e(p,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=a=>i.value=a),multiple:!0,"multiple-limit":3,name:"str",options:u.value,disabledOptions:[!1,!0,!1,!1,!1,!1]},null,8,["modelValue","options"])]),D],64)}}});export{O as default};
