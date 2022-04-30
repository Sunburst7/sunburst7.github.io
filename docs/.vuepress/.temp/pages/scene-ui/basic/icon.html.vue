<template><h1 id="icon-图标" tabindex="-1"><a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a> Icon 图标</h1>
<p>基于BootStrap-icon图标库的图表组件，使用时只需要设置：</p>
<ul>
<li>name：代表图标名称，</li>
<li>color：代表颜色，</li>
<li>size：代表图标大小（默认宽=高）</li>
</ul>
<p>图标名称可查看<a href="https://icons.bootcss.com/" target="_blank" rel="noopener noreferrer">Bootstrap 图标库<ExternalLinkIcon/></a>。</p>
<p>例子：</p>
<div>
    <s-icon class="item" name="github" color="black" :size="24" />
    <s-icon class="item" name="steam" color="#409EFF" :size="24" />
    <s-icon class="item" name="alarm" color="#67C23A" :size="32" />
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steam<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#409EFF<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alarm<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#67C23A<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="icon属性" tabindex="-1"><a class="header-anchor" href="#icon属性" aria-hidden="true">#</a> Icon属性</h2>
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
<td>name</td>
<td>图标名，从bootstrap-icon官网查询</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标大小</td>
<td>string|number</td>
<td>字符串必须含有css的长度单位(px,rem...)</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td>string</td>
<td>css颜色命名要求(#开头的六位16进制数或颜色字符串)</td>
<td>-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const disabled = ref(true)
</script>

<style scope>
.item{
    margin-right:10px;
}
</style>    