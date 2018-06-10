/**
 * Created by w1036_000 on 2017/3/10.
 */


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    //组件被第一次渲染后调用
    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    //组件移除时调用
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        //设置state的值,并调用render方法重绘组件
        this.setState({
            date:new Date()
        });
    }
    render() {
      return (
       <div>
           <h1>hello world,{this.props.name}</h1>
           <h1>当前时间：{this.state.date.toLocaleTimeString()}</h1>
       </div>
      );
    }
}

ReactDOM.render(
    <Clock name="wang"></Clock>,
    document.getElementById('root')
);

