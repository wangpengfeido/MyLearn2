import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {AaaHelloWorld} from "./aaa-hello-world/aaa-hello-world";
import {AbaIntroducingJsx} from "./aba-introducing-jsx/aba-introducing-jsx";
import {AcaRendingElements} from "./aca-rendering-elements/aca-rending-elements";
import {AdaComponentsAndProps} from "./ada-components-and-props/ada-components-and-props";
import {AeaStateAndLifecycle} from "./aea-state-and-lifecycle/aea-state-and-lifecycle";
import {AfaHandlingEvents} from "./afa-handling-events/afa-handling-events";
import {AgaConditionalRendering} from "./aga-conditional-rendering/aga-conditional-rendering";
import {AhaListAndKeys} from "./aha-list-and-keys/aha-list-and-keys";
import {AiaForms} from "./aia-forms/aia-forms";
import {AjaLiftingStateUp} from "./aja-lifting-state-up/aja-lifting-state-up";
import {AkaCompositionVsInheritance} from "./aka-composition-vs-inheritance/aka-composition-vs-inheritance";
import {AlaThinkingInReact} from "./ala-thinking-in-react/ala-thinking-in-react";

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
                <Route path='/fast-start/aha-list-and-keys' component={AhaListAndKeys}></Route>
                <Route path='/fast-start/aia-forms' component={AiaForms}></Route>
                <Route path='/fast-start/aja-lifting-state-up' component={AjaLiftingStateUp}></Route>
                <Route path='/fast-start/aka-composition-vs-inheritance' component={AkaCompositionVsInheritance}></Route>
                <Route path='/fast-start/ala-thinking-in-react' component={AlaThinkingInReact}></Route>
            </div>
        );
    }
}