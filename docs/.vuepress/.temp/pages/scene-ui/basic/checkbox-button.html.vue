<template><h1 id="checkboxbutton-选择按钮" tabindex="-1"><a class="header-anchor" href="#checkboxbutton-选择按钮" aria-hidden="true">#</a> CheckboxButton 选择按钮</h1>
<p>它的参数如下</p>
<ul>
<li>checked: 初始值 是否选中，</li>
<li>theme: checkbox的主题色，</li>
<li>disabled：是否禁用，</li>
<li>unsure：是否处于&lt;不确定&gt;状态，</li>
<li>modelValue：v-model绑定的值 Boolean，</li>
<li>size：组件的大小，</li>
<li>label：组件的标签</li>
<li>leftBorderRound: 是否左侧显示为圆角</li>
<li>rightBorderRound: 是否右侧显示为圆角</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> checkboxButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
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

    <span class="token comment">// 是否处于"不确定状态"    </span>
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
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>例子：</p>
<div>
    <div class="line">
        <s-checkbox-button v-model="select">默认</s-checkbox-button>
        <s-checkbox-button theme="warning" leftBorderRound>左圆</s-checkbox-button>
        <s-checkbox-button theme="success">变色</s-checkbox-button>
        <s-checkbox-button theme="main" disabled>Disabled</s-checkbox-button>
    </div>
    <div class="line">
        <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
        <s-checkbox-button theme="info">你好世界</s-checkbox-button>
        <s-checkbox-button theme="info" leftBorderRound>你好世界</s-checkbox-button>
    </div>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> select <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">></span></span>左圆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>变色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">></span></span>你好世界<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好世界<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-checkbox-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">leftBorderRound</span><span class="token punctuation">></span></span>你好世界<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-checkbox-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="checkboxbutton属性" tabindex="-1"><a class="header-anchor" href="#checkboxbutton属性" aria-hidden="true">#</a> CheckboxButton属性</h2>
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
<td>checked</td>
<td>box的初始值</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>theme</td>
<td>box的主题颜色</td>
<td>StandardColor</td>
<td>&quot;main&quot;</td>
<td>&quot;main&quot;,&quot;info&quot;,&quot;success&quot;,&quot;warning&quot;,&quot;error&quot;</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>unsure</td>
<td>是否处于不确定状态</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>modelValue(对应v-model)</td>
<td>box绑定的值</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>size</td>
<td>box的大小</td>
<td>StandardSize</td>
<td>&quot;default&quot;</td>
<td>&quot;large&quot; ,&quot;default&quot;, &quot;small&quot;</td>
</tr>
<tr>
<td>label</td>
<td>box的标签说明</td>
<td>string</td>
<td>任何一段描述性的string</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>leftBorderRound</td>
<td>左边框是否圆角风格</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
<tr>
<td>rightBorderRound</td>
<td>右边框是否圆角风格</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const select = ref( false );
</script>

<style scope>
.line{
    display: flex;
    justify-content: space-around;
    align-items: flex-end
}
</style>  