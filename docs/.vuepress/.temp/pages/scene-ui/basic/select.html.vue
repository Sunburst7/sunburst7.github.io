<template><h1 id="select-选择器" tabindex="-1"><a class="header-anchor" href="#select-选择器" aria-hidden="true">#</a> Select 选择器</h1>
<p>用于在一些选项中选择一个或多个。</p>
<ul>
<li>当单选时，需要绑定一个响应性变量表示结果</li>
<li>当多选时，多选框绑定的值是以逗号分隔的字符串</li>
</ul>
<h2 id="普通单选" tabindex="-1"><a class="header-anchor" href="#普通单选" aria-hidden="true">#</a> 普通单选</h2>
<p>设置v-model，name，options即可。</p>
<p>注意：options需要传入一个响应性的数组。</p>
<div class="line">
    <s-select 
          v-model="str1" 
          name="str" 
          :options="options" 
          >
    </s-select>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str1<span class="token punctuation">"</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> 
      <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option1'</span><span class="token punctuation">,</span><span class="token string">'option2'</span><span class="token punctuation">,</span><span class="token string">'option3'</span><span class="token punctuation">,</span><span class="token string">'option4'</span><span class="token punctuation">,</span><span class="token string">'option5'</span><span class="token punctuation">,</span><span class="token string">'option6'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="禁用选项" tabindex="-1"><a class="header-anchor" href="#禁用选项" aria-hidden="true">#</a> 禁用选项</h2>
<p>给disabledOptions传入一个与options等长的boolean数组，false表示对应索引的项不禁用，true表示禁用。</p>
<div class="line">
    <s-select 
          v-model="str2" 
          name="str" 
          :options="options" 
          :disabledOptions="[false,true,false,false,false,false]">
    </s-select>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str2<span class="token punctuation">"</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:disabledOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[false,true,false,false,false,false]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option1'</span><span class="token punctuation">,</span><span class="token string">'option2'</span><span class="token punctuation">,</span><span class="token string">'option3'</span><span class="token punctuation">,</span><span class="token string">'option4'</span><span class="token punctuation">,</span><span class="token string">'option5'</span><span class="token punctuation">,</span><span class="token string">'option6'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="多选" tabindex="-1"><a class="header-anchor" href="#多选" aria-hidden="true">#</a> 多选</h2>
<p>当需要多选功能时，注意multiple表示是否开启多选功能，multiple-limit表示多选的数量限制。</p>
<p>默认多选选项为气泡展示，显示最后一个选择的选项，当前选择选项数与最多选择的选项数。</p>
<div class="line">
    <s-select 
          v-model="str3" 
          :multiple="true" 
          :multiple-limit="3" 
          name="str" 
          :options="options" 
          :disabledOptions="[false,true,false,false,false,false]">
    </s-select>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-select</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str3<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:multiple-limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> 
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>str<span class="token punctuation">"</span></span> 
      <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:disabledOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[false,true,false,false,false,false]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option1'</span><span class="token punctuation">,</span><span class="token string">'option2'</span><span class="token punctuation">,</span><span class="token string">'option3'</span><span class="token punctuation">,</span><span class="token string">'option4'</span><span class="token punctuation">,</span><span class="token string">'option5'</span><span class="token punctuation">,</span><span class="token string">'option6'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="select-属性" tabindex="-1"><a class="header-anchor" href="#select-属性" aria-hidden="true">#</a> Select 属性</h2>
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
<td>modelValue</td>
<td>选择器绑定的值</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>跟随表单一起提交的原生的name属性</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>选择器的选项</td>
<td>array</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>disabledOptions</td>
<td>选项们是否被禁用</td>
<td><code>Array&lt;boolean&gt;</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>选择器是否被禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>选择器的输入提示</td>
<td>string</td>
<td>-</td>
<td>string</td>
</tr>
<tr>
<td>multiple</td>
<td>是否多选</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>multipleLimit</td>
<td>多选的最大选择数</td>
<td>number</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>collapseTags</td>
<td>多选时是否将选中值按文字的形式展示（默认气泡展示）</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="select-事件" tabindex="-1"><a class="header-anchor" href="#select-事件" aria-hidden="true">#</a> Select 事件</h2>
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
<td style="text-align:left">change</td>
<td style="text-align:left">选择器切换选项时触发</td>
<td style="text-align:left">val:string</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">选择器失去焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
<tr>
<td style="text-align:left">focus</td>
<td style="text-align:left">选择器获得焦点时触发</td>
<td style="text-align:left">e: FocusEvent</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const options = ref(['option1','option2','option3','option4','option5','option6'])  
const str1 = ref('')
const str2 = ref('')
const str3 = ref('')
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>    