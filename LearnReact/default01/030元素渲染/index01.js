/**
 * Created by w1036_000 on 2017/3/13
 */
const element=<h1>Hello World</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
/////////////////////////////////////////////
function tick() {
    const element2=(
        <div>
            <h1>ReactDOM.render只渲染变化的部分</h1>
            <h2>当前时间：{new Date().toLocaleTimeString()}</h2>
            <h1>但是通常只调用一次ReactDOM.render方法</h1>
        </div>
    );
    ReactDOM.render(
        element2,
        document.getElementById('root2')
    )
}
setInterval(tick,1000);
