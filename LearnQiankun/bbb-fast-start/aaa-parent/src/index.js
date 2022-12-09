import { registerMicroApps, start, loadMicroApp } from "qiankun";

// 注册微应用并自动加载

registerMicroApps([
  {
    name: "bbb-child",
    entry: "//localhost:18081",
    container: "#container-auto",
    activeRule: "/bbb-child",
  },
]);

start();

document.querySelector("#go-to-bbb-child").addEventListener("click", () => {
  window.history.pushState(null, "", "/bbb-child");
});
document.querySelector("#go-to-xxx").addEventListener("click", () => {
  window.history.pushState(null, "", "/xxx");
});
document.querySelector("#manual-load-child").addEventListener("click", () => {
  // 手动加载微应用
  loadMicroApp({
    name: "bbb-child",
    entry: "//localhost:18081",
    container: "#container-manually",
  });
});
