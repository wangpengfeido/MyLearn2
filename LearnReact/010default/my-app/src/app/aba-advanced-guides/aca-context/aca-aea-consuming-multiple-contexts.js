import React, {Component} from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext();

function One(props) {
    // 当使用多个context时，react 需要让每个consumer作为组件树中一个单独的节点。这样做是为了重新渲染时更快。
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <div>
                            <div>theme:{theme}</div>
                            <div>user:{user}</div>
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

export class AcaAeaConsumingMultipleContext extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value="dark">
                    <UserContext.Provider value="tom">
                        <One/>
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        )
    }
}


