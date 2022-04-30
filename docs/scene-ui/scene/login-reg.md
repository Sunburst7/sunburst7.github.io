---
title: Login Reg 组件
---

# LoginReg组件

它的参数如下

* onLogin: 登录时触发的事件，
* onReg: 注册时触发的事件，
* onLoginSuc：登录成功时的回调，
* onRegSuc：注册时成功时的回调，
* onLoginFail：登录失败时的回调，
* onRegFail：注册失败时的回调，
* LoginTitle：登录框的标题，
* LoginSubmitTip: 登录按钮上的提示,
* RegTitle: 注册框的标题,
* RegSubmitTip: 注册按钮上的提示
```ts
interface SceneLoginRegProps {
    onLogin:( p: { userID: string, pwd: string } ) => Promise< { done: boolean } >
    onReg: ( p: { userID: string, userNick: any, pwd: string } ) => Promise< { done: boolean } >
    onLoginSuc ?: ( userID: string ) => any,
    onRegSuc ?: ( userID: string ) => any,
    onLoginFail ?: ( userID: string ) => any,
    onRegFail ?: ( userID: string ) => any,

    LoginTitle ?: string;
    LoginSubmitTip ?: string;
    
    RegTitle ?: string;
    RegSubmitTip ?: string;
}
```



例子：

<div>
    <s-login-reg
    :onLogin="onLogin"
    :onReg="onReg">
    </s-login-reg>
</div>



```vue
<script setup lang='ts'>
    import { SLoginReg } from 'scene-ui';
    // ( p ) => Promise< { done: boolean } >
    const onLogin = ( 
        p: { 
            userID: string, 
            pwd: string 
        }
    ) => fetch( 
        'http://localhost:9000/api/login',
        {
            method: 'POST',
            headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
            }),
            body: new URLSearchParams([["userID", p.userID],["pwd", p.pwd]]).toString()
        }
    )
    .then((res) => {
        return res.json()
    })

    const onReg = ( 
        p: { 
            userID: string, 
            pwd: string, 
            userNick: string 
        } 
    ) => fetch( 
            'http://localhost:9000/api/reg',
            {
                method: 'POST',
                headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
                }),
                body: new URLSearchParams([["userID", p.userID],["pwd", p.pwd], ["userNick", p.userNick]]).toString()
            }
        )
    .then((res) => {
        return res.json()
    })

</script>
<template>
    <s-login-reg 
    :onLogin="onLogin"
    :onReg="onReg">
    </s-login-reg>
</template>
```

## LoginReg属性

| 属性  | 说明                             | 类型           | 可选值                                           | 默认值 |
| ----- | -------------------------------- | -------------- | ------------------------------------------------ | ------ |
| onLogin  | 登录时触发的函数 |   ( p: { userID: string, pwd: string } ) => Promise< { done: boolean } >       | -                                                | -      |
| onReg  | 注册时触发的函数                         | ( p: { userID: string, userNick: any, pwd: string } ) => Promise< { done: boolean } > | -           | -      |
| onLoginSuc | 登录成功时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<成功提示>消息 | -      |
| onRegSuc | 注册成功时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<成功提示>消息 | -      |
| onLoginFail | 登录失败时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<失败提示>消息 | -      |
| onRegFail | 注册失败时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<失败提示>消息 | -      |
| onLoginFail | 登录失败时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<失败提示>消息 | -      |
| onRegFail | 注册失败时触发的函数 userID会被作为回调的参数                         | ( userID: string ) => any         | 不管是否传入该值 都会触发一个全局的<失败提示>消息 | -      |
| LoginTitle | 登录的标题                         | string  | 一个描述登录目的的标题字符串 | "登录"      |
| LoginSubmitTip | 登录按钮上的文字                         | string  | - | "LOGIN"      |
| RegTitle | 注册的标题                         | string  | 一个描述注册目的的标题字符串 | "注册"      |
| RegSubmitTip | 注册按钮上的文字                         | string  | - | "点击注册"      |

<script lang="ts" setup>
const onLogin = () => new Promise( r => r( { done: true } ) );
const onReg = () => new Promise( r => r( { done: true } ) );
</script>
<style scope>
/* div{
    text-align: center;
} */
</style>    