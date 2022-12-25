import{f as c,g as r,r as i,o as k,c as d,a as p,d as s,w as a,F as b,b as u,e as t}from"./app.6c710a2b.js";const m=u(`<h1 id="checkboxbutton-\u9009\u62E9\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#checkboxbutton-\u9009\u62E9\u6309\u94AE" aria-hidden="true">#</a> CheckboxButton \u9009\u62E9\u6309\u94AE</h1><p>\u5B83\u7684\u53C2\u6570\u5982\u4E0B</p><ul><li>checked: \u521D\u59CB\u503C \u662F\u5426\u9009\u4E2D\uFF0C</li><li>theme: checkbox\u7684\u4E3B\u9898\u8272\uFF0C</li><li>disabled\uFF1A\u662F\u5426\u7981\u7528\uFF0C</li><li>unsure\uFF1A\u662F\u5426\u5904\u4E8E&lt;\u4E0D\u786E\u5B9A&gt;\u72B6\u6001\uFF0C</li><li>modelValue\uFF1Av-model\u7ED1\u5B9A\u7684\u503C Boolean\uFF0C</li><li>size\uFF1A\u7EC4\u4EF6\u7684\u5927\u5C0F\uFF0C</li><li>label\uFF1A\u7EC4\u4EF6\u7684\u6807\u7B7E</li><li>leftBorderRound: \u662F\u5426\u5DE6\u4FA7\u663E\u793A\u4E3A\u5706\u89D2</li><li>rightBorderRound: \u662F\u5426\u53F3\u4FA7\u663E\u793A\u4E3A\u5706\u89D2</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> checkboxButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    checked<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> DefaultColor<span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token operator">:</span>ComponentConstants<span class="token punctuation">.</span>StandardColor<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> ComponentConstants<span class="token punctuation">.</span>StandardColorArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u662F\u5426\u5904\u4E8E&quot;\u4E0D\u786E\u5B9A\u72B6\u6001&quot;    </span>
    unsure<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    modelValue<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> DefaultSize<span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token operator">:</span>ComponentConstants<span class="token punctuation">.</span>StandardSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> ComponentConstants<span class="token punctuation">.</span>StandardSizeArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    leftBorderRound<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    rightBorderRound<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        required<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>\u4F8B\u5B50\uFF1A</p>`,5),g={class:"line"},h=t("\u9ED8\u8BA4"),f=t("\u5DE6\u5706"),F=t("\u53D8\u8272"),E=t("Disabled"),q={class:"line"},B=t("\u4F60\u597D\u4E16\u754C"),C=t("\u4F60\u597D\u4E16\u754C"),_=t("\u4F60\u597D\u4E16\u754C"),v=u(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> select <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">&gt;</span></span>\u5DE6\u5706<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53D8\u8272<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\u4E16\u754C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\u4E16\u754C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\u4E16\u754C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="checkboxbutton\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#checkboxbutton\u5C5E\u6027" aria-hidden="true">#</a> CheckboxButton\u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checked</td><td>box\u7684\u521D\u59CB\u503C</td><td>boolean</td><td>false</td><td>true/false</td></tr><tr><td>theme</td><td>box\u7684\u4E3B\u9898\u989C\u8272</td><td>StandardColor</td><td>&quot;main&quot;</td><td>&quot;main&quot;,&quot;info&quot;,&quot;success&quot;,&quot;warning&quot;,&quot;error&quot;</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td>true/false</td></tr><tr><td>unsure</td><td>\u662F\u5426\u5904\u4E8E\u4E0D\u786E\u5B9A\u72B6\u6001</td><td>boolean</td><td>false</td><td>true/false</td></tr><tr><td>modelValue(\u5BF9\u5E94v-model)</td><td>box\u7ED1\u5B9A\u7684\u503C</td><td>boolean</td><td>false</td><td>true/false</td></tr><tr><td>size</td><td>box\u7684\u5927\u5C0F</td><td>StandardSize</td><td>&quot;default&quot;</td><td>&quot;large&quot; ,&quot;default&quot;, &quot;small&quot;</td></tr><tr><td>label</td><td>box\u7684\u6807\u7B7E\u8BF4\u660E</td><td>string</td><td>\u4EFB\u4F55\u4E00\u6BB5\u63CF\u8FF0\u6027\u7684string</td><td>&quot;&quot;</td></tr><tr><td>leftBorderRound</td><td>\u5DE6\u8FB9\u6846\u662F\u5426\u5706\u89D2\u98CE\u683C</td><td>boolean</td><td>false</td><td>true/false</td></tr><tr><td>rightBorderRound</td><td>\u53F3\u8FB9\u6846\u662F\u5426\u5706\u89D2\u98CE\u683C</td><td>boolean</td><td>false</td><td>true/false</td></tr></tbody></table>`,3),A=c({setup(x){const e=r(!1);return(D,o)=>{const n=i("s-checkbox-button");return k(),d(b,null,[m,p("div",null,[p("div",g,[s(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},{default:a(()=>[h]),_:1},8,["modelValue"]),s(n,{theme:"warning",leftBorderRound:""},{default:a(()=>[f]),_:1}),s(n,{theme:"success"},{default:a(()=>[F]),_:1}),s(n,{theme:"main",disabled:""},{default:a(()=>[E]),_:1})]),p("div",q,[s(n,{theme:"info",leftBorderRound:""},{default:a(()=>[B]),_:1}),s(n,{theme:"info"},{default:a(()=>[C]),_:1}),s(n,{theme:"info",leftBorderRound:""},{default:a(()=>[_]),_:1})])]),v],64)}}});export{A as default};