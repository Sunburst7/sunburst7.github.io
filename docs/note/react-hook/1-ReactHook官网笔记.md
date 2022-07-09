---
title: 1.React-Hook官网笔记
---

推荐阅读React官网关于为什么使用hook代替类组件以及React团队2018年conf大会，本篇博客的例子大多出自该开发者大会，B站有资源：[React Today and Tomorrow and 90% Cleaner React With Hooks](https://www.bilibili.com/video/BV1JE411X7NE?spm_id_from=333.1007.top_right_bar_window_history.content.click)

## 1 useState，useEffect，useContext简介

将以conf大会的例子作为引入，简单介绍这三个最常用的API。

### 1.1 useState

这是一个最常见的类组件，展示一个名字并且可编辑：

```js
import React from 'react';
import Row from './Row';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value
    })
  }

  render() {
    return (
      <section>
        <Row label="Name">
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
      </section>
    );
  }

}
```

而 `useState` 是一个 Hook。**Hook 是一个 React 提供的函数，它可以让你在 function 组件中“钩”连 到一些 React 特性**，比如State。`useState(initState)`传入初始状态来指定它的初始值。

```js{5}
import React, { useState } from 'react';
import Row from './Row';

export default function Greeting(props) {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="Surname">
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
      </Row>
    </section>
  );
}
```

### 1.2 useContext

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。Context 在需要获取当前主题或者当前用户正在使用的语言很有用。尤其是所有组件都需要读取一些相同变量时，使用 context 可以有效避免总是通过 props 传值。

下面

```
import React from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value
    })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
            <Row label="Name">
              <input
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </Row>
            <Row label="Surname">
              <input
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </Row>
            <LocaleContext.Consumer>
              {locale => (
                <Row label="Language">
                  {locale}
                </Row>
              )}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>

    );
  }

}
```
