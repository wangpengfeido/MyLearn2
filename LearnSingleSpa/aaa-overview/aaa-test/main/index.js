import * as singleSpa from 'single-spa';

singleSpa.registerApplication(
  {
    name: 'one',
    app: () => import('../one/index.js'),
    activeWhen: '/one',
  },
);

singleSpa.registerApplication(
  {
    name: 'two',
    app: () => import('../two/index.js'),
    activeWhen: '/two',
  }
);

singleSpa.start();
