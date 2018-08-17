import React, {Component} from 'react';

// 父子耦合
// 当需要在组件树的深层次更新context时，可以通过context向下传递一个函数，以允许consumer更新context

const themes = {
    light: {background: '#eee'},
    dark: {background: '#222'},
};

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

function ThemeToggleButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
                    toggle theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export class AcaAdaUpdatingContextFromANestedComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: themes.dark,
            toggleTheme: this.handleToggleTheme,
        }
    }

    handleToggleTheme = () => {
        this.setState((prevState) => ({
            theme: prevState.theme === themes.dark ? themes.light : themes.dark,
        }));
    }

    render() {
        return (
            <div>
                {/* 将一个带有更新函数的value赋给context */}
                <ThemeContext.Provider value={this.state}>
                    <ThemeToggleButton/>
                </ThemeContext.Provider>
            </div>
        );
    }
}


