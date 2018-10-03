import React, {Component} from 'react';

export function staticFunc() {
    console.log('this is static function');
}

export class WrappedOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>id:{this.props.data.id}</div>
                <div>name:{this.props.data.name}</div>
                <div>other:{this.props.other}</div>
            </div>
        );
    }
}

WrappedOne.staticFunc = staticFunc;



