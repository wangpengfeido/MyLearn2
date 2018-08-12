import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaAccessibility} from "./aaa-accessibility/aaa-accessibility";

import {AbaCodeSplitting} from "./aba-code-splitting/aba-code-splitting";
import {AiaJsxInDepth} from "./aia-jsx-in-depth/aia-jsx-in-depth";
import {AsaTypecheckingWithProptypes} from "./asa-typechecking-with-proptypes/asa-typechecking-with-proptypes";
import {AqaStaticTypeChecking} from "./aqa-static-type-checking/aqa-static-type-checking";
import {AoaRefsAndTheDom} from "./aoa-refs-and-the-dom/aoa-refs-and-the-dom";
import {AtaUnControlledComponent} from "./ata-uncontrolled-component/ata-uncontrolled-component";
import {AnaReconciliation} from "./ana-reconciliation/ana-reconciliation";


export class AbaAdvancedGuides extends Component {
    render() {
        return (
            <div>
                <Route path="/aba-advanced-guides/aaa-accessibility" component={AaaAccessibility}/>
                <Route path="/aba-advanced-guides/aba-code-splitting" component={AbaCodeSplitting}/>
                <Route path="/aba-advanced-guides/aia-jsx-in-depth" component={AiaJsxInDepth}/>
                <Route path="/aba-advanced-guides/ana-reconciliation" component={AnaReconciliation}/>
                <Route path="/aba-advanced-guides/aoa-refs-and-the-dom" component={AoaRefsAndTheDom}/>
                <Route path="/aba-advanced-guides/aqa-static-type-checking" component={AqaStaticTypeChecking}/>
                <Route path="/aba-advanced-guides/asa-typechecking-with-proptypes" component={AsaTypecheckingWithProptypes}/>
                <Route path="/aba-advanced-guides/ata-uncontrolled-component" component={AtaUnControlledComponent}/>
            </div>
        );
    }
}


