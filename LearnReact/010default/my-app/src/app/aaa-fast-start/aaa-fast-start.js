import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaHelloWorld} from "./aaa-hello-world/aaa-hello-world";
import {AbaIntroducingJsx} from "./aba-introducing-jsx/aba-introducing-jsx";
import {AcaRendingElements} from "./aca-rendering-elements/aca-rending-elements";
import {AdaComponentsAndProps} from "./ada-components-and-props/ada-components-and-props";

export class AaaFastStart extends Component{
    render(){
        return (
            <div>
                <Route path='/fast-start/hello-world' component={AaaHelloWorld}></Route>
                <Route path='/fast-start/introducing-jsx' component={AbaIntroducingJsx}></Route>
                <Route path='/fast-start/rending-elements' component={AcaRendingElements}></Route>
                <Route path='/fast-start/ada-components-and-props' component={AdaComponentsAndProps}></Route>
            </div>
        );
    }
}