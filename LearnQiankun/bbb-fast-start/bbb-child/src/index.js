// 首次挂载执行
export async function bootstrap() {
  console.log("------child: bootstrap");
}

// 每次挂载执行
export async function mount(props) {
  console.log("------child: mount", props);
}

// 卸载执行
export async function unmount(props) {
  console.log("------child: unmount", props);
}

// 使用 loadMicroApp 手动加载时执行
export async function update(props) {
  console.log("------child: update", props);
}
