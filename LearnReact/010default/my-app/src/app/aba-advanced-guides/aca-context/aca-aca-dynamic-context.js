import React, {Component} from 'react';

// 动态context
// context value 也可以动态地改变

const themes = {
    light: {background: '#eee'},
    dark: {background: '#222'},
};

const ThemeContext = React.createContext(themes.dark);

function ThemedButton(props) {
    // 使用context消费者
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button {...props} style={{backgroundColor: theme.background}}></button>
            )}
        </ThemeContext.Consumer>
    );
}

// 一个使用themed button的中间组件
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            改变theme的按钮
        </ThemedButton>
    );
}


export class AcaAcaDynamicContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: themes.dark,
        }
    }

    handleChangeTheme = () => {
        // 动态地改变了 context 的 value
        this.setState((prevState) => ({
            theme: prevState.theme === themes.dark ? themes.light : themes.dark,
        }));
    }

    render() {
        return (
            <div>
                {/* value 被赋了一个变量 */}
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.handleChangeTheme}/>
                </ThemeContext.Provider>
                <div>
                    <ThemedButton>在context提供者外并不会受影响</ThemedButton>
                </div>
            </div>
        )
    }
}


