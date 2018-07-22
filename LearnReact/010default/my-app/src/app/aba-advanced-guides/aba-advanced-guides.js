import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaAccessibility} from "./aaa-accessibility/aaa-accessibility";

export class AbaAdvancedGuides extends Component {
    render() {
        return (
            <div>
                <Route path="/aba-advanced-guides/aba-advanced-guides" component={AaaAccessibility}/>
            </div>
        );
    }
}


