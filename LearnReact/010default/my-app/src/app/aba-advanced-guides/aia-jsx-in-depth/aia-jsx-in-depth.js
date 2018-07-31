import React, {Component} from 'react';
import {AiaAaa} from "./aia-aaa";
import {AiaAba} from "./aia-aba";
import {AiaAca} from "./aia-aca";
import {AiaAda} from "./aia-ada";

export class AiaJsxInDepth extends Component {
    render() {
        return (
            <div>
                <AiaAaa/>
                <br/><br/><br/>
                <AiaAba/>
                <br/><br/><br/>
                <AiaAca/>
                <br/><br/><br/>
                <AiaAda/>
                <br/><br/><br/>
            </div>
        );
    }
}

