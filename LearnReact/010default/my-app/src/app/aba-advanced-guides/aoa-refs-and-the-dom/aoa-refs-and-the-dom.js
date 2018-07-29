import React, {Component} from 'react';
import {AoaAaa} from "./aoa-aaa";
import {AoaAba} from "./aoa-aba";
import {AoaAca} from "./aoa-aca";

export class AoaRefsAndTheDom extends Component {
    render() {
        return (
            <div>
                <AoaAaa/>
                <br/><br/><br/>
                <AoaAba/>
                <br/><br/><br/>
                <AoaAca/>
            </div>
        )
    }
}

