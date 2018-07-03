import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaHelloWorld} from "./aaa-hello-world/aaa-hello-world";
import {AbaIntroducingJsx} from "./aba-introducing-jsx/aba-introducing-jsx";
import {AcaRendingElements} from "./aca-rendering-elements/aca-rending-elements";
import {AdaComponentsAndProps} from "./ada-components-and-props/ada-components-and-props";
import {AeaStateAndLifecycle} from "./aea-state-and-lifecycle/aea-state-and-lifecycle";
import {AfaHandlingEvents} from "./afa-handling-events/afa-handling-events";
import {AgaConditionalRendering} from "./aga-conditional-rendering/aga-conditional-rendering";

export class AaaFastStart extends Component{
    render(){
        return (
            <div>
                <Route path='/fast-start/hello-world' component={AaaHelloWorld}></Route>
                <Route path='/fast-start/introducing-jsx' component={AbaIntroducingJsx}></Route>
                <Route path='/fast-start/rending-elements' component={AcaRendingElements}></Route>
                <Route path='/fast-start/ada-components-and-props' component={AdaComponentsAndProps}></Route>
                <Route path='/fast-start/aea-state-and-lifecycle' component={AeaStateAndLifecycle}></Route>
                <Route path='/fast-start/afa-handling-event' component={AfaHandlingEvents}></Route>
                <Route path='/fast-start/aga-conditional-rendering' component={AgaConditionalRendering}></Route>
            </div>
        );
    }
}