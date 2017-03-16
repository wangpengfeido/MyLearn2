/**
 * Created by w1036_000 on 2017/3/13
 */
const userInput = '在jsx中插入用户输入是安全的，因为它会被渲染成字符串，防止xss';
const element=React.createElement('h1',{className:'back-red'},'jsx相当于调用React.createElement函数');

ReactDOM.render(
    (
        <div>
            <h1 className="back-red" tabIndex="1">jsx中属性名要用驼峰命名法,class变成className</h1>
            <h1>{userInput}</h1>
            {element}
        </div>
    ),
    document.getElementById('root')
);
