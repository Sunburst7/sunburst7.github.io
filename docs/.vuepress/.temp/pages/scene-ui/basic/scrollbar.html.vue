<template><h1 id="scrollbar-滚动条" tabindex="-1"><a class="header-anchor" href="#scrollbar-滚动条" aria-hidden="true">#</a> Scrollbar 滚动条</h1>
<p>用于替换浏览器原生滚动条。</p>
<div class="line">
    <s-scrollbar :width="200" :height="200">
        <div class="scrollbar-line">
            <div v-for="i in 30" :key="i" class="scrollbar-demo-item">
                {{i}}
            </div>
        </div>
    </s-scrollbar>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-scrollbar</span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollbar-line<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num in 30<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollbar-demo-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                {{num}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-scrollbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scope</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">  
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="scrollbar-属性" tabindex="-1"><a class="header-anchor" href="#scrollbar-属性" aria-hidden="true">#</a> Scrollbar 属性</h2>
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
<td>可视区域的宽度(必须)</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>可视区域的高度(必须)</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>thumbSize</td>
<td>滚动条厚度</td>
<td>number</td>
<td>-</td>
<td>6</td>
</tr>
<tr>
<td>theme</td>
<td>滚动条颜色</td>
<td>string</td>
<td>main/success/info/warning/error</td>
<td>main</td>
</tr>
<tr>
<td>alwaysNeedY</td>
<td>Y轴滚动条是否一直显示</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>alwaysNeedX</td>
<td>X轴滚动条是否一直显示</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="scrollbar-插槽" tabindex="-1"><a class="header-anchor" href="#scrollbar-插槽" aria-hidden="true">#</a> Scrollbar 插槽</h2>
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
<td>需要添加滚动条的内容，一般比可视区域大</td>
</tr>
</tbody>
</table>
<h2 id="scrollbar-方法" tabindex="-1"><a class="header-anchor" href="#scrollbar-方法" aria-hidden="true">#</a> Scrollbar 方法</h2>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>moveTo</td>
<td>控制滚动包裹的元素自动移动 distance px的距离，实现滚动条的移动</td>
<td>distance: number,direction: 'Y' | 'X'</td>
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
    align-items: flex-end;
    margin:10px;
}    
.scrollbar-line{
    display: flex;
    width:300px;
    height:300px;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.scrollbar-demo-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}    
</style>    