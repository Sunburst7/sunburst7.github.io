<template><h1 id="card-卡片" tabindex="-1"><a class="header-anchor" href="#card-卡片" aria-hidden="true">#</a> Card 卡片</h1>
<p>是一个特殊容器，将信息聚合在卡片容器中展示，同时有一个边框的阴影效果。其主要prop为：</p>
<ul>
<li>header：默认模板的头部信息</li>
<li>shadow：卡片阴影的出现时机</li>
<li>bodyStyle：卡片主要内部的样式</li>
</ul>
<p>值得注意的是，卡片组件的大小是自适应的，但也可以通过直接CSS设置宽高控制。插入自定义头部与主题的信息都依赖于插槽，详情见下方的Card插槽。</p>
<p>当没有提供header或header插槽时，卡片将没有头部栏只有body主体。</p>
<h2 id="头部信息" tabindex="-1"><a class="header-anchor" href="#头部信息" aria-hidden="true">#</a> 头部信息</h2>
<div class="line">
    <s-card header="Title" shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
        <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
	<s-card shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
		<template #header>
			<div class="card-header">
				<span>Card Name</span>
				<s-button type="text">Operation</s-button>
			</div>
   		</template>
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>,justifyContent:<span class="token punctuation">'</span>space-between<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ 'List item ' + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>,justifyContent:<span class="token punctuation">'</span>space-between<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ 'List item ' + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.square</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px
<span class="token punctuation">}</span>
<span class="token selector">.card-header</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="阴影时机" tabindex="-1"><a class="header-anchor" href="#阴影时机" aria-hidden="true">#</a> 阴影时机</h2>
<div class="line">
    <s-card shadow="always" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
        <div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
	<s-card shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
    	<s-card shadow="never" :body-style="{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}" class="square">
      	<div v-for="o in 4" :key="o">
            {{ 'List item ' + o }}
        </div>
  	</s-card>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>,justifyContent:<span class="token punctuation">'</span>space-between<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ 'List item ' + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>,justifyContent:<span class="token punctuation">'</span>space-between<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ 'List item ' + o }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.square</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px
<span class="token punctuation">}</span>
<span class="token selector">.card-header</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="card-属性" tabindex="-1"><a class="header-anchor" href="#card-属性" aria-hidden="true">#</a> Card 属性</h2>
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
<td>header</td>
<td>默认模板的标题行</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>shadow</td>
<td>显示阴影的时机</td>
<td>string</td>
<td>always/hover/body</td>
<td>always</td>
</tr>
<tr>
<td>bodyStyle</td>
<td>卡片的body的样式</td>
<td>object</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="card-插槽" tabindex="-1"><a class="header-anchor" href="#card-插槽" aria-hidden="true">#</a> Card 插槽</h2>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-或default</td>
<td>卡片的body主题内容</td>
</tr>
<tr>
<td>header</td>
<td>卡片的头部信息</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>

<style scope>
.line{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.square{
  width: 350px;
  height: 250px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>    