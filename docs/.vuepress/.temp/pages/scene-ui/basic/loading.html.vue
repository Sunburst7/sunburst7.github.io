<template><h1 id="loading-加载" tabindex="-1"><a class="header-anchor" href="#loading-加载" aria-hidden="true">#</a> Loading 加载</h1>
<p>使用函数的方式提供一个全屏或局部的加载动画，在需要的时候展示加载动画，防止页面失去响应提高用户体验。</p>
<p>导入全局对象：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>SceneLoading<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该对象只有一个唯一方法<code>service(options: loadingProps)</code>，其中<code>options</code>参数为 Loading 的配置项，具体见下表。该方法用于根据你的props参数创建一个loading实例并返回他。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>loading组件是一个单例模式，也就是说无法在已经有一个正在运行的loading组件的情况下再调用SceneLoading.service(options: loadingProps)创建另一个loading组件</p>
</div>
<p>返回的loading实例有两个函数方法：</p>
<ul>
<li><code>open()</code>：表示开启loading动画</li>
<li><code>close()</code>：表示关闭loading动画</li>
</ul>
<h2 id="全局加载" tabindex="-1"><a class="header-anchor" href="#全局加载" aria-hidden="true">#</a> 全局加载</h2>
<p>演示一个全局5s的loading动画</p>
<div class="line">
    <s-button @click="onGlobalLoading">全局loading</s-button>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onGlobalLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>全局loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SceneLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span>
<span class="token keyword">const</span> <span class="token function-variable function">onGlobalLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 创建一个loadingInstance实例	</span>
  <span class="token keyword">let</span> loadingInstance <span class="token operator">=</span> SceneLoading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'body'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fullScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'loading...'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onClose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'loading close!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  loadingInstance<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>loadingInstance<span class="token punctuation">.</span>close<span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="局部加载" tabindex="-1"><a class="header-anchor" href="#局部加载" aria-hidden="true">#</a> 局部加载</h2>
<p>演示一个局部5s的loading动画</p>
<div class="line">
    <s-card id="card" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
        <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button @click="onLocalLoading('#card')" type="text">
              局部loading
            </s-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
   </s-card>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card<span class="token punctuation">"</span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span> <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLocalLoading(<span class="token punctuation">'</span>#card<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              局部loading
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ 'List item ' + o }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SceneLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span>
<span class="token keyword">const</span> <span class="token function-variable function">onLocalLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> loadingInstance <span class="token operator">=</span> SceneLoading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> target<span class="token punctuation">,</span>
    <span class="token literal-property property">fullScreen</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'loading...'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onClose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'loading close!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  loadingInstance<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>loadingInstance<span class="token punctuation">.</span>close<span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="loaidng-属性" tabindex="-1"><a class="header-anchor" href="#loaidng-属性" aria-hidden="true">#</a> Loaidng 属性</h2>
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
<td>target</td>
<td>Loading需要覆盖的 DOM 节点.可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入document.querySelector以获取到对应DOM节点</td>
<td>VNode |string|HTMLElement</td>
<td>-</td>
<td>'body'</td>
</tr>
<tr>
<td>fullScreen</td>
<td>是否占据整个屏幕，当target指向document.body时生效</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>text</td>
<td>loading组件的文本提示</td>
<td>string</td>
<td>-</td>
<td>'loading...'</td>
</tr>
<tr>
<td>onClose</td>
<td>loading组件关闭的回调函数</td>
<td>Function</td>
<td>-</td>
<td>()=&gt;{console.log('loading close!')}</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref,onMount} from 'vue'
import { SceneLoading } from '../../../../components/loading/loading'
const onLocalLoading = (target: HTMLElement | string) =>{
  let loadingInstance = SceneLoading.service({
    target: target,
    fullScreen: false,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
const onGlobalLoading = () =>{
  // 创建一个loadingInstance实例	
  let loadingInstance = SceneLoading.service({
    target: 'body',
    fullScreen: true,
    text: 'loading...',
    onClose: ()=>{
      console.log('loading close!');
    }
  })
  loadingInstance.open()
  setTimeout(loadingInstance.close,5000)
}
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
/* card 测试css */
.square{
  width: 400px;
  height: 300px
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
  flex-grow: 1;
   }
</style>    