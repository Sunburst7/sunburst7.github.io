import{_ as r,r as u,o as i,c as k,a,e as p,F as d,d as e,b as l}from"./app.0b3b1598.js";const m={},b=a("h1",{id:"\u5355\u9009\u6846-radio",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5355\u9009\u6846-radio","aria-hidden":"true"},"#"),e(" \u5355\u9009\u6846 Radio")],-1),h=a("p",null,"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009",-1),q=a("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),e(" \u57FA\u7840\u7528\u6CD5")],-1),g=a("p",null,"\u5355\u9009\u6846\u4E0D\u5E94\u8BE5\u6709\u592A\u591A\u7684\u53EF\u9009\u9879\uFF0C \u5982\u679C\u4F60\u6709\u5F88\u591A\u7684\u53EF\u9009\u9879\u4F60\u5E94\u8BE5\u4F7F\u7528\u9009\u62E9\u6846\u800C\u4E0D\u662F\u5355\u9009\u6846\u3002",-1),v=e("\u4E00\u4E2A\u5355\u9009\u6309\u94AE\u7EC4\u7531\u5177\u6709\u76F8\u540C "),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"name",-1),V=e("\u5C5E\u6027\u7684\u5355\u9009\u6309\u94AE\u7EC4\u6210\u3002 \u4E00\u65E6\u5355\u9009\u6309\u94AE\u7EC4\u88AB\u5EFA\u7ACB\uFF0C\u9009\u62E9\u90A3\u6309\u94AE\u7EC4\u7684\u4EFB\u4F55\u5355\u9009\u6309\u94AE\u5C06\u4F1A\u81EA\u52A8\u53D6\u6D88\u540C\u7EC4\u5F53\u524D\u9009\u62E9\u7684\u4EFB\u4F55\u6309\u94AE\u3002"),y=a("p",null,[e("\u8981\u4F7F\u7528 Radio \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E"),a("code",null,"v-model"),e("\u7ED1\u5B9A\u53D8\u91CF\uFF0C \u9009\u4E2D\u610F\u5473\u7740\u63D0\u4EA4\u7684\u503C\u4E3Aname=modelValue\uFF0C "),a("code",null,"label"),e("\u53EF\u4EE5\u662F"),a("code",null,"String"),e("\u3001"),a("code",null,"Number"),e(" \u6216 "),a("code",null,"Boolean"),e("\u3002")],-1),w={class:"line"},z=l(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u7981\u7528\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u72B6\u6001" aria-hidden="true">#</a> \u7981\u7528\u72B6\u6001</h2><p>\u8BBE\u7F6Edisabled=&quot;true&quot;\u5B9E\u73B0\u7981\u7528\u3002</p>`,3),N={class:"line"},x=l(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5E26\u6709\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u5E26\u6709\u8FB9\u6846" aria-hidden="true">#</a> \u5E26\u6709\u8FB9\u6846</h2><p>\u8BBE\u7F6E:border=&quot;true&quot;\u53EF\u4EE5\u4F7F\u5F97\u5355\u9009\u6846\u6709\u8FB9\u6846\u3002</p>`,3),B={class:"line"},U=l(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-radio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="radio-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#radio-\u5C5E\u6027" aria-hidden="true">#</a> Radio \u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue/v-model</td><td>\u5355\u9009\u6846\u7ED1\u5B9A\u7684\u503C</td><td>String/Number/Boolean</td><td>-</td><td>-</td></tr><tr><td>name</td><td>\u968F\u8868\u5355\u4E00\u8D77\u63D0\u4EA4\u7684\u539F\u751F\u7684name\u5C5E\u6027</td><td>String</td><td>-</td><td>-</td></tr><tr><td>label</td><td>\u5355\u9009\u6846\u7684\u6587\u672C</td><td>String</td><td>-</td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>size</td><td>\u5355\u9009\u6846\u5C3A\u5BF8</td><td>string</td><td>default/small/large</td><td>default</td></tr></tbody></table><h2 id="radio-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#radio-\u4E8B\u4EF6" aria-hidden="true">#</a> Radio \u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td style="text-align:left;">\u7ED1\u5B9A\u7684modelValue\u503C</td></tr></tbody></table>`,5);function S(n,s){const c=u("ExternalLinkIcon"),o=u("s-radio");return i(),k(d,null,[b,h,q,g,a("p",null,[v,a("a",f,[_,p(c)]),V]),y,a("div",w,[p(o,{modelValue:n.phone,"onUpdate:modelValue":s[0]||(s[0]=t=>n.phone=t),name:"contact",label:"phone",disabled:!1,size:"default"},null,8,["modelValue"]),p(o,{modelValue:n.email,"onUpdate:modelValue":s[1]||(s[1]=t=>n.email=t),name:"contact",label:"email",disabled:!1,size:"default"},null,8,["modelValue"])]),z,a("div",N,[p(o,{modelValue:n.phone,"onUpdate:modelValue":s[2]||(s[2]=t=>n.phone=t),name:n.contact,label:"phone",disabled:!0},null,8,["modelValue","name"]),p(o,{modelValue:n.email,"onUpdate:modelValue":s[3]||(s[3]=t=>n.email=t),name:n.contact,label:"email",disabled:!0},null,8,["modelValue","name"])]),x,a("div",B,[p(o,{modelValue:n.phone,"onUpdate:modelValue":s[4]||(s[4]=t=>n.phone=t),name:n.contact,label:"phone",border:!0},null,8,["modelValue","name"]),p(o,{modelValue:n.email,"onUpdate:modelValue":s[5]||(s[5]=t=>n.email=t),name:n.contact,label:"email",border:!0},null,8,["modelValue","name"])]),U],64)}var R=r(m,[["render",S]]);export{R as default};
