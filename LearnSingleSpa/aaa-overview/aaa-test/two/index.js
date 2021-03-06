let domEl;
export function bootstrap(props) {
  return Promise.resolve().then(() => {
    domEl = document.createElement('div');
    domEl.id = 'app2';
    document.body.appendChild(domEl);
  });
}
export function mount(props) {
  return Promise.resolve().then(() => {
    domEl.textContent = 'App 2 is mounted!';
  });
}
export function unmount(props) {
  return Promise.resolve().then(() => {
    domEl.textContent = '';
  });
}
