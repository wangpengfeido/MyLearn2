import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaAccessibility} from "./aaa-accessibility/aaa-accessibility";
import {AsaTypecheckingWithProptypes} from "./asa-typechecking-with-proptypes/asa-typechecking-with-proptypes";
import {AqaStaticTypeChecking} from "./aqa-static-type-checking/aqa-static-type-checking";
import {AoaRefsAndTheDom} from "./aoa-refs-and-the-dom/aoa-refs-and-the-dom";

export class AbaAdvancedGuides extends Component {
    render() {
        return (
            <div>
                <Route path="/aba-advanced-guides/aba-advanced-guides" component={AaaAccessibility}/>
                <Route path="/aba-advanced-guides/aoa-refs-and-the-dom" component={AoaRefsAndTheDom}/>
                <Route path="/aba-advanced-guides/aqa-static-type-checking" component={AqaStaticTypeChecking}/>
                <Route path="/aba-advanced-guides/asa-typechecking-with-proptypes" component={AsaTypecheckingWithProptypes}/>

            </div>
        );
    }
}


