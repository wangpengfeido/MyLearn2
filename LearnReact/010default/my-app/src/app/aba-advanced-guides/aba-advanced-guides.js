import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaAccessibility} from "./aaa-accessibility/aaa-accessibility";
import {AbaCodeSplitting} from "./aba-code-splitting/aba-code-splitting";
import {AiaJsxInDepth} from "./aia-jsx-in-depth/aia-jsx-in-depth";

export class AbaAdvancedGuides extends Component {
    render() {
        return (
            <div>
                <Route path="/aba-advanced-guides/aba-advanced-guides" component={AaaAccessibility}/>
                <Route path="/aba-advanced-guides/aba-code-splitting" component={AbaCodeSplitting}/>
                <Route path="/aba-advanced-guides/aia-jsx-in-depth" component={AiaJsxInDepth}/>
            </div>
        );
    }
}


