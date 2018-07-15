import React, {Component} from 'react';
import {AkaAaa} from "./aka-aaa";
import {AkaAba} from "./aka-aba";

export class AkaCompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <AkaAaa/>
                <br/><br/><br/><br/><br/><br/>
                <AkaAba/>
            </div>
        )
    }
}
