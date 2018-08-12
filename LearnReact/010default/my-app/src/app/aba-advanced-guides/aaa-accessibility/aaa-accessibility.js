import React, {Component, Fragment} from 'react';

class One extends Component {
    render() {
        const ariaLabelText = "这是aria label";
        return (
            <div>
                {/*aria-仍然采用小写加"-"的写法*/}
                <input aria-label={ariaLabelText}/>
            </div>
        );
    }
}

function Two() {
    // 倡导使用语义化的html，来加强html的可访问性

    // 有时，我们添加div破坏了html的语义化。
    // 这时，我们可以使用<Fragment></Fragment>(需要key)和<></>(不需要key)，它们不会被渲染，不会破坏语义化
    const definitionList = [['one', 'a'], ['two', 'b'], ['three', 'c']].map((item, index) => (
        <Fragment key={index}>
            <dt>{item[0]}</dt>
            <dd>{item[1]}</dd>
        </Fragment>
    ));
    return (
        <div>
            <dl>
                {definitionList}
            </dl>
            <dl>
                {/*<>*/}
                    <dt>hello</dt>
                    <dd>world</dd>
                {/*</>*/}
            </dl>
        </div>
    )
}
// TODO
export class AaaAccessibility extends Component {
    render() {
        return (
            <div>
                <One/>
                <br/><br/><br/>
                <Two/>
            </div>
        );
    }
}
