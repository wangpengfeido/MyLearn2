import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        // checkbox
        super(props);
        this.state = {
            data: [{name: 'one', value: 1, checked: true},
                {name: 'two', value: 2, checked: false},
                {name: 'three', value: 3,}],
        };
    }

    checkboxChangeHandler = (event) => {
        const target = event.target;
        this.setState((prevState)=>{
            let data=prevState.data;
            data[target.value] ['checked']= target.checked;
            return data;
        });
    }

    render() {
        const checkboxGroup = this.state.data.map((item, index) => (
            <label key={index}>
                <input type="checkbox" name="test" value={index}
                       checked={item.checked} onChange={this.checkboxChangeHandler}/>
                <span>{item.name}</span>
            </label>
        ));
        return (
            <div>
                {checkboxGroup}
            </div>
        )
    }
}

export class AiaAba extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        )
    }
}
