<template><h1 id="info-panel-信息板" tabindex="-1"><a class="header-anchor" href="#info-panel-信息板" aria-hidden="true">#</a> Info-Panel 信息板</h1>
<p>用于展示信息，传入一个对象，将对象的键值优雅的展示在卡片上，注意type属性用于设置图标，名称参考<a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap Icons <ExternalLinkIcon/></a></p>
<p>title表示作为title的属性名，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'bob'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">14</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">title</span><span class="token operator">:</span>name<span class="token comment">//表示bob作为标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>整个信息板采用的是自适应大小，也就是说不用关心每行的长宽，组件会自适应调整达到最佳效果，而只需要关心整体的长宽。</p>
<p>下面是两个例子，分别是不使用插槽与使用插槽：</p>
<div class="line">
    <s-info-panel 
      :width="300"
      :height="300"
      type="person" 
      title="name" 
      :info="person"
    />
    <s-info-panel 
      :width="300"
      :height="300"
      theme="success"
      type="github" 
      title="name" 
      :info="githubObj"
    >
      <template #default>
          <s-icon name="star" color="#ffab00" size="24px" />
        </template>
    </s-info-panel>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-info-panel</span> 
      <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> 
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-info-panel</span> 
      <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github<span class="token punctuation">"</span></span> 
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>githubObj<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffab00<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24px<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-info-panel</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Bob'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'22'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">'123456@163.com'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">'SDU'</span>
<span class="token punctuation">}</span> 
<span class="token keyword">const</span> githubObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"scene-ui"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">synopsis</span><span class="token operator">:</span><span class="token string">'a scene-drived ui lib for a more quickly frontend!!!!!!!!!'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stars</span><span class="token operator">:</span><span class="token string">'100'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">forks</span><span class="token operator">:</span><span class="token string">'100'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">languageList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'java'</span><span class="token punctuation">,</span><span class="token string">'vue'</span><span class="token punctuation">,</span><span class="token string">'ts'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="info-panel-属性" tabindex="-1"><a class="header-anchor" href="#info-panel-属性" aria-hidden="true">#</a> Info-Panel 属性</h2>
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
<td>width</td>
<td>信息板宽度</td>
<td>string|number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>信息板高度</td>
<td>string|number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>theme</td>
<td>信息板颜色主体</td>
<td>string</td>
<td>main/success/info/warning/error</td>
<td>main</td>
</tr>
<tr>
<td>type</td>
<td>信息板展示信息类型，主要区别在于左上角图标</td>
<td>string</td>
<td>bootstrap-icon图标名称，如（person）</td>
<td>info-square-fill</td>
</tr>
<tr>
<td>title</td>
<td>信息板标题的属性名</td>
<td>string</td>
<td>info.keys()</td>
<td>-</td>
</tr>
<tr>
<td>info</td>
<td>信息板传入的对象</td>
<td>object</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="info-panel-插槽" tabindex="-1"><a class="header-anchor" href="#info-panel-插槽" aria-hidden="true">#</a> Info-Panel 插槽</h2>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-/default</td>
<td>信息板右上角区域</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const person = {
    name:'Bob',
    age:'22',
    email:'123456@163.com',
    school:'SDU'
} 
const githubObj = {
  name:"scene-ui",
  synopsis:'a scene-drived ui lib for a more quickly frontend!!!!!!!!!',
  stars:'100',
  forks:'100',
  languageList:['java','vue','ts']
}
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    