import React, {Component} from 'react';
import './app.css';
import {Link, Route} from "react-router-dom";
import {AaaFastStart} from "./aaa-fast-start/aaa-fast-start";
import {AbaAdvancedGuides} from "./aba-advanced-guides/aba-advanced-guides";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <ul>
                        <li>
                            <div><Link to="/fast-start">快速开始</Link></div>
                            <ul>
                                <li><Link to="/fast-start/hello-world">HelloWorld</Link></li>
                                <li><Link to="/fast-start/introducing-jsx">JSX简介</Link></li>
                                <li><Link to="/fast-start/rending-elements">元素渲染</Link></li>
                                <li><Link to="/fast-start/ada-components-and-props">组件和props</Link></li>
                                <li><Link to="/fast-start/aea-state-and-lifecycle">state和生命周期</Link></li>
                                <li><Link to="/fast-start/afa-handling-event">事件处理</Link></li>
                                <li><Link to="/fast-start/aga-conditional-rendering">条件渲染</Link></li>
                                <li><Link to="/fast-start/aha-list-and-keys">列表&keys</Link></li>
                                <li><Link to="/fast-start/aia-forms">表单</Link></li>
                                <li><Link to="/fast-start/aja-lifting-state-up">状态提升</Link></li>
                                <li><Link to="/fast-start/aka-composition-vs-inheritance">组合vs继承</Link></li>
                                <li><Link to="/fast-start/ala-thinking-in-react">react理念</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div><Link to="/aba-advanced-guides">高级指引</Link></div>
                            <ul>
                                <li><Link to='/aba-advanced-guides/aaa-accessibility'>可访问性</Link></li>
                                <li><Link to='/aba-advanced-guides/aba-code-splitting'>代码分隔</Link></li>
                                <li><Link to='/aba-advanced-guides/aia-jsx-in-depth'>深入JSX</Link></li>
                                <li><Link to='/aba-advanced-guides/aoa-refs-and-the-dom'>Refs&Dom</Link></li>
                                <li><Link to='/aba-advanced-guides/aqa-static-type-checking'>静态类型检查</Link></li>
                                <li><Link to='/aba-advanced-guides/asa-typechecking-with-proptypes'>使用PropTypes进行类型检查</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <Route path='/fast-start' component={AaaFastStart}></Route>
                    <Route path='/aba-advanced-guides' component={AbaAdvancedGuides}></Route>
                </div>
            </div>
        );
    }
}