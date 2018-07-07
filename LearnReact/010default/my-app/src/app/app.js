import React, {Component} from 'react';
import './app.css';
import {Link, Route} from "react-router-dom";
import {AaaFastStart} from "./aaa-fast-start/aaa-fast-start";

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
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <Route path='/fast-start' component={AaaFastStart}></Route>
                </div>
            </div>
        );
    }
}