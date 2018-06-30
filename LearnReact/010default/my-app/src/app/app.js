import React, {Component} from 'react';
import './app.css';

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
                            <div>快速开始</div>
                            <ul>
                                <li><a>Hello World</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="content"> </div>
            </div>
        );
    }
}