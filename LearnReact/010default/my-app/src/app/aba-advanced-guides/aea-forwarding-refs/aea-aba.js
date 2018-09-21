import React, {Component} from 'react';

class WrappedOne extends Component {
    render() {
        return (<div>
            <div>id:{this.props.data.id}</div>
            <div>name:{this.props.data.name}</div>
        </div>);
    }
}


function logProps(WrappedComponent) {
    class LogProps extends Component {
        constructor(props) {
            super(props);
        }

        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props', this.props);
        }

        render() {
            const {forwordedRef, ...rest} = this.props;

            return (<WrappedComponent ref={forwordedRef} {...rest}/>);
        }
    }

    function forwardRef(props, ref) {
        return (<LogProps {...props} forwordedRef={ref}/>)
    }

    const name = WrappedComponent.displayName || WrappedComponent.name;
    forwardRef.displayName = `logProps(${name})`;

    // React.forwardRef接受一个
    return React.forwardRef(forwardRef);
}

const EnhancedComponent = logProps(WrappedOne);

class One extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    consoleRef = () => {
        console.log(this.myRef.current);
    }

    render() {
        return (<div>
            <EnhancedComponent ref={this.myRef} data={{id: 1, name: '张三'}}/>
            <button onClick={this.consoleRef}>console ref</button>
        </div>)
    }
}

export class AeaAba extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        )
    }
}



