import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Game} from './game/game'

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
