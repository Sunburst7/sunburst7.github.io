import{f as u,g as l,r as o,o as a,c as t,a as n,d as c,w as r,F as p,e as i,b as d,h as k,t as b}from"./app.ab9e2f57.js";const h=n("h1",{id:"scrollbar-\u6EDA\u52A8\u6761",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scrollbar-\u6EDA\u52A8\u6761","aria-hidden":"true"},"#"),i(" Scrollbar \u6EDA\u52A8\u6761")],-1),m=n("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),g={class:"line"},A={class:"scrollbar-line"},D=d(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-scrollbar</span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num in 30<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar-demo-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                {{num}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-scrollbar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scope</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">  
<span class="token selector">.scrollbar-line</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scrollbar-demo-item</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ecf5ff<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="scrollbar-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#scrollbar-\u5C5E\u6027" aria-hidden="true">#</a> Scrollbar \u5C5E\u6027</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u53EF\u89C6\u533A\u57DF\u7684\u5BBD\u5EA6(\u5FC5\u987B)</td><td>number</td><td>-</td><td>-</td></tr><tr><td>height</td><td>\u53EF\u89C6\u533A\u57DF\u7684\u9AD8\u5EA6(\u5FC5\u987B)</td><td>number</td><td>-</td><td>-</td></tr><tr><td>thumbSize</td><td>\u6EDA\u52A8\u6761\u539A\u5EA6</td><td>number</td><td>-</td><td>6</td></tr><tr><td>theme</td><td>\u6EDA\u52A8\u6761\u989C\u8272</td><td>string</td><td>main/success/info/warning/error</td><td>main</td></tr><tr><td>alwaysNeedY</td><td>Y\u8F74\u6EDA\u52A8\u6761\u662F\u5426\u4E00\u76F4\u663E\u793A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>alwaysNeedX</td><td>X\u8F74\u6EDA\u52A8\u6761\u662F\u5426\u4E00\u76F4\u663E\u793A</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="scrollbar-\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#scrollbar-\u63D2\u69FD" aria-hidden="true">#</a> Scrollbar \u63D2\u69FD</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-/default</td><td>\u9700\u8981\u6DFB\u52A0\u6EDA\u52A8\u6761\u7684\u5185\u5BB9\uFF0C\u4E00\u822C\u6BD4\u53EF\u89C6\u533A\u57DF\u5927</td></tr></tbody></table><h2 id="scrollbar-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#scrollbar-\u65B9\u6CD5" aria-hidden="true">#</a> Scrollbar \u65B9\u6CD5</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>moveTo</td><td>\u63A7\u5236\u6EDA\u52A8\u5305\u88F9\u7684\u5143\u7D20\u81EA\u52A8\u79FB\u52A8 distance px\u7684\u8DDD\u79BB\uFF0C\u5B9E\u73B0\u6EDA\u52A8\u6761\u7684\u79FB\u52A8</td><td>distance: number,direction: &#39;Y&#39; | &#39;X&#39;</td></tr></tbody></table>`,7),f=u({setup(F){return l(!0),(y,E)=>{const e=o("s-scrollbar");return a(),t(p,null,[h,m,n("div",g,[c(e,{width:200,height:200},{default:r(()=>[n("div",A,[(a(),t(p,null,k(30,s=>n("div",{key:s,class:"scrollbar-demo-item"},b(s),1)),64))])]),_:1})]),D],64)}}});export{f as default};
