import React, {Component} from 'react';
import {AeaAaa} from "./aea-aaa";
import {AeaAba} from "./aea-aba";
import {AeaBaa} from "./aea-baa";

export class AeaForwardingRefs extends Component {
    render() {
        return (
            <div>
                <AeaAaa/>
                <br/><br/><br/>
                <AeaAba/>
                <br/><br/><br/>
                <br/><br/><br/>
                <AeaBaa/>
            </div>
        );
    }
}


