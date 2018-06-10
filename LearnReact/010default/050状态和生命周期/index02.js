/**
 * Created by w1036_000 on 2017/3/10.
 */


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};
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

