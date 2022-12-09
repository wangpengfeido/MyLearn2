import React from 'react';
import { Route, Link } from 'react-router-dom';

import AaaaStart from './pages/aaaa-tutorial/aaaa-start/aaaa-start';
import MmmmChangeNode from './pages/xxxx-test/mmmm-change-node';
import MnaaPort from './pages/xxxx-test/mnaa-port';

const pages = [
  {
    component: AaaaStart,
    path: '/aaaa-tutorial/aaaa-start/aaaa-start',
    name: '教程/快速上手/开始',
  },
  {
    component: MmmmChangeNode,
    path: '/xxxx-test/mmmm-change-node',
    name: '实验/修改node',
  },
  {
    component: MnaaPort,
    path: '/xxxx-test/mnaa-port',
    name: '实验/连接桩',
  },
];

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ width: 200, borderRight: '1px solid black' }}>
        <ul>
          {pages.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ flexGrow: 1, padding: 20 }}>
        {pages.map((item, index) => (
          <Route key={index} path={item.path} component={item.component}></Route>
        ))}
      </div>
    </div>
  );
}

export default App;
