import React, {Component} from 'react';

class One extends Component {
    render(){
        const ariaLabelText="这是aria label";
        return (
            <div>
                {/*aria-仍然采用小写加"-"的写法*/}
                <input aria-label={ariaLabelText}/>
            </div>
        );
    }
}

export class AaaAccessibility extends Component {
    render(){
        return (
            <div>
                <One/>
            </div>
        );
    }
}
