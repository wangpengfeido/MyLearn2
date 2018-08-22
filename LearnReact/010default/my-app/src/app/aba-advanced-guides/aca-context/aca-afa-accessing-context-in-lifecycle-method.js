import React, {Component} from 'react';

// 在生命周期钩子中访问context

// 将context的值作为props传给组件，然后在组件的生命周期钩子中访问props，那么就能访问到context

const ThemeContext = React.createContext('dark');

class One extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('........', this.props.theme);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('........', prevProps.theme, this.props.theme);
    }

    render() {
        return (<div>{this.props.theme}</div>);
    }
}

export class AcaAfaAccessingContextInLifecycleMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
        };
    }

    handleChangeTheme = () => {
        this.setState((prevState) => ({
            theme: prevState.theme += 'a',
        }));
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemeContext.Consumer>
                        {theme => (
                            <One theme={theme}/>
                        )}
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
                <div>
                    <button onClick={this.handleChangeTheme}>
                        改变
                    </button>
                </div>
            </div>
        )
    }
}

