import React, {Component} from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = output.toFixed(3);
    return rounded;
}

// 当几个组件共用一部分数据时，可以将这些数据提升到它们的父组件当中
// 这个例子是：两个可输入摄氏和华氏度的输入框，其值同步

class TemperatureInput extends Component {
    // 让组件"受控"
    // 即属性值从父组件传入，值改变时触发事件，再通过父组件中的事件响应改变属性值
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <span>温度（{scaleNames[scale]}）：</span>
                <input value={temperature} onChange={this.handleChange}/>
            </div>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        // 将子组件中需要的状态提升到这里
        // 父组件中只保存了温度和温度类型，通过计算得出每种温度。而没有保存每种温度
        this.state = {
            temperature: '',
            scale: 'c',
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celisius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celisius}
                                  onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={celisius}/>
            </div>
        )
    }
}

export class AjaAaa extends Component {
    render() {
        return (
            <div>
                <Calculator/>
            </div>
        );
    }
}

// 在React应用中，对应任何可变数据理应只有一个单一“数据源”。
// 你应该在应用中保持 自上而下的数据流，而不是尝试在不同组件中同步状态。
// 与双向绑定相比，可以更快地寻找和定位bug的工作。因为哪个组件保有状态数据，也只有它自己能够操作这些数据

// 如果某些数据可以由props或者state提供，那么它很有可能不应该在state中出现。例如上例子只保存了温度和类型，而没有保存两种温度
