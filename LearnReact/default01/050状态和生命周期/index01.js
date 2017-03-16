/**
 * Created by w1036_000 on 2017/3/10.
 */

//属性改为this.props
class Clock extends React.Component {
    render() {
      return (
       <div>
           <h1>hello world</h1>
           <h1>当前时间：{this.props.date.toLocaleTimeString()}</h1>
       </div>
      );
    }
}

ReactDOM.render(
    <Clock date={new Date()}></Clock>,
    document.getElementById('root')
);

