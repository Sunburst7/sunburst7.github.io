<template><h1 id="dialog-对话框" tabindex="-1"><a class="header-anchor" href="#dialog-对话框" aria-hidden="true">#</a> Dialog 对话框</h1>
<p>一个具有遮罩效果的弹出界面。</p>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>使用时在HTML界面任意位置创建<code>&lt;s-dialog&gt;</code>，给它的v-model绑定一个相应性boolean变量，使用一个组件控制true/false即可实现打开关闭。</p>
<p>对于对话框的头部，可以使用默认的模板填上title即可，或者插入name=&quot;title&quot;的插槽自定义头部。</p>
<ul>
<li><code>modal</code>控制是否需要灰色背景遮罩</li>
<li><code>lockScroll</code>控制当Dialog出现时是否需要滚锁定</li>
<li><code>closeOnClickModal</code>控制当Dialog出现时，是否可以点击阴影关闭Dialog</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;s-button @click="showDialog1 = true">Show Modal&lt;/s-button>
&lt;s-dialog v-model="showDialog1" 
      title="Tip" 
      :modal="true" 
      :lockScroll="true"
      :closeOnClickModal="true"
>
	click ok to comfirm.
&lt;/s-dialog>
&lt;script lang="ts" setup>
import {ref} from 'vue'
const showDialog1 = ref(false)
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="line">
    <s-button @click="showDialog1 = true">开启对话框</s-button>
    <s-dialog v-model="showDialog1" 
      title="Tip" 
      :modal="true" 
      :lockScroll="true"
    >
    </s-dialog>
</div>
<h2 id="插入自定义内容" tabindex="-1"><a class="header-anchor" href="#插入自定义内容" aria-hidden="true">#</a> 插入自定义内容</h2>
<p>对话框不只可以插入文字，还可以插入一些组件：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showDialog2 = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showDialog2<span class="token punctuation">"</span></span> 
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:lockScroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:closeOnClickModal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-card</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">"</span></span></span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span> <span class="token attr-name">:body-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{padding:<span class="token punctuation">'</span>10px<span class="token punctuation">'</span>,display:<span class="token punctuation">'</span>flex<span class="token punctuation">'</span>,flexDirection:<span class="token punctuation">'</span>column<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Card Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Operation
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o in 4<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>o<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ 'List item ' + o }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> showDialog2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>例子：</p>
<div class="line">
    <s-button @click="showDialog2 = true">开启对话框</s-button>
<s-dialog v-model="showDialog2" 
      title="title" 
      :modal="true" 
      :lockScroll="true"
      :closeOnClickModal="true"
    >
      <s-card style="width:400px" id="card2" shadow="hover" :body-style="{padding:'10px',display:'flex',flexDirection:'column'}" class="square">
        <template #header>
          <div class="card-header">
            <span>Card Name</span>
            <s-button type="text">
              Operation
            </s-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </s-card>
    </s-dialog>
</div>
<h2 id="dialog-属性" tabindex="-1"><a class="header-anchor" href="#dialog-属性" aria-hidden="true">#</a> Dialog 属性</h2>
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
<td>modelValue/v-model</td>
<td>是否显示 Dialog</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>title</td>
<td>Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>对话框的container的最小宽度</td>
<td>number</td>
<td>-</td>
<td>400</td>
</tr>
<tr>
<td>modal</td>
<td>是否需要遮罩层</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>lockScroll</td>
<td>是否在 Dialog 出现时将 body 滚动锁定</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>是否可以通过点击 modal 关闭 Dialog</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h2 id="dialog-插槽" tabindex="-1"><a class="header-anchor" href="#dialog-插槽" aria-hidden="true">#</a> Dialog 插槽</h2>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>对话框的主体部分</td>
</tr>
<tr>
<td>title</td>
<td>对话框的标题</td>
</tr>
</tbody>
</table>
<h2 id="dialog-事件" tabindex="-1"><a class="header-anchor" href="#dialog-事件" aria-hidden="true">#</a> Dialog 事件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">open</td>
<td style="text-align:left">在对话框被插入到DOM之前被调用</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">opened</td>
<td style="text-align:left">当过渡动画完成时被调用</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">close</td>
<td style="text-align:left">在对话框准备离开之前被调用</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">closed</td>
<td style="text-align:left">在离开过渡完成、且元素已从 DOM 中移除时调用</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const showDialog1 = ref(false)
const showDialog2 = ref(false)
const showDialog3 = ref(false)
const showDialog4 = ref(false)
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>    