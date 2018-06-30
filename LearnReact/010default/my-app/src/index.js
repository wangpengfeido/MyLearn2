import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./app/app";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
