<template><h1 id="login-reg-登录注册" tabindex="-1"><a class="header-anchor" href="#login-reg-登录注册" aria-hidden="true">#</a> Login Reg 登录注册</h1>
<p>它的参数如下</p>
<ul>
<li>onLogin: 登录时触发的事件，</li>
<li>onReg: 注册时触发的事件，</li>
<li>onLoginSuc：登录成功时的回调，</li>
<li>onRegSuc：注册时成功时的回调，</li>
<li>onLoginFail：登录失败时的回调，</li>
<li>onRegFail：注册失败时的回调，</li>
<li>LoginTitle：登录框的标题，</li>
<li>LoginSubmitTip: 登录按钮上的提示,</li>
<li>RegTitle: 注册框的标题,</li>
<li>RegSubmitTip: 注册按钮上的提示</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SceneLoginRegProps</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onLogin</span><span class="token operator">:</span><span class="token punctuation">(</span> p<span class="token operator">:</span> <span class="token punctuation">{</span> userID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> pwd<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">></span>
    <span class="token function-variable function">onReg</span><span class="token operator">:</span> <span class="token punctuation">(</span> p<span class="token operator">:</span> <span class="token punctuation">{</span> userID<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> userNick<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> pwd<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">></span>
    onLoginSuc <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> userID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    onRegSuc <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> userID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    onLoginFail <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> userID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    onRegFail <span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span> userID<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span>

    LoginTitle <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    LoginSubmitTip <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    
    RegTitle <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    RegSubmitTip <span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>例子：</p>
<div>
    <s-login-reg
    :onLogin="onLogin"
    :onReg="onReg">
    </s-login-reg>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> SLoginReg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scene-ui'</span><span class="token punctuation">;</span>
    <span class="token comment">// ( p ) => Promise&lt; { done: boolean } ></span>
    <span class="token keyword">const</span> <span class="token function-variable function">onLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span> 
        <span class="token parameter"><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token literal-property property">userID</span><span class="token operator">:</span> string<span class="token punctuation">,</span> 
            <span class="token literal-property property">pwd</span><span class="token operator">:</span> string 
        <span class="token punctuation">}</span></span>
    <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span> 
        <span class="token string">'http://localhost:9000/api/login'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span> <span class="token comment">// 指定提交方式为表单提交</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"userID"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>userID<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"pwd"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>pwd<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onReg</span> <span class="token operator">=</span> <span class="token punctuation">(</span> 
        <span class="token parameter"><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token literal-property property">userID</span><span class="token operator">:</span> string<span class="token punctuation">,</span> 
            <span class="token literal-property property">pwd</span><span class="token operator">:</span> string<span class="token punctuation">,</span> 
            <span class="token literal-property property">userNick</span><span class="token operator">:</span> string 
        <span class="token punctuation">}</span></span> 
    <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span> 
            <span class="token string">'http://localhost:9000/api/reg'</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span> <span class="token comment">// 指定提交方式为表单提交</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"userID"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>userID<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"pwd"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>pwd<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"userNick"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>userNick<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-login-reg</span> 
    <span class="token attr-name">:onLogin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLogin<span class="token punctuation">"</span></span>
    <span class="token attr-name">:onReg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onReg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-login-reg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="loginreg属性" tabindex="-1"><a class="header-anchor" href="#loginreg属性" aria-hidden="true">#</a> LoginReg属性</h2>
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
<td>onLogin</td>
<td>登录时触发的函数</td>
<td>( p: { userID: string, pwd: string } ) =&gt; Promise&lt; { done: boolean } &gt;</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onReg</td>
<td>注册时触发的函数</td>
<td>( p: { userID: string, userNick: any, pwd: string } ) =&gt; Promise&lt; { done: boolean } &gt;</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onLoginSuc</td>
<td>登录成功时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;成功提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>onRegSuc</td>
<td>注册成功时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;成功提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>onLoginFail</td>
<td>登录失败时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;失败提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>onRegFail</td>
<td>注册失败时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;失败提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>onLoginFail</td>
<td>登录失败时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;失败提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>onRegFail</td>
<td>注册失败时触发的函数 userID会被作为回调的参数</td>
<td>( userID: string ) =&gt; any</td>
<td>不管是否传入该值 都会触发一个全局的&lt;失败提示&gt;消息</td>
<td>-</td>
</tr>
<tr>
<td>LoginTitle</td>
<td>登录的标题</td>
<td>string</td>
<td>一个描述登录目的的标题字符串</td>
<td>&quot;登录&quot;</td>
</tr>
<tr>
<td>LoginSubmitTip</td>
<td>登录按钮上的文字</td>
<td>string</td>
<td>-</td>
<td>&quot;LOGIN&quot;</td>
</tr>
<tr>
<td>RegTitle</td>
<td>注册的标题</td>
<td>string</td>
<td>一个描述注册目的的标题字符串</td>
<td>&quot;注册&quot;</td>
</tr>
<tr>
<td>RegSubmitTip</td>
<td>注册按钮上的文字</td>
<td>string</td>
<td>-</td>
<td>&quot;点击注册&quot;</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts" setup>
const onLogin = () => new Promise( r => r( { done: true } ) );
const onReg = () => new Promise( r => r( { done: true } ) );
</script>

<style scope>
/* div{
    text-align: center;
} */
</style>    