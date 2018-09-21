import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * 当不使用Flow或TypeScript进行类型检查时，可以用prop-types进行属性类型检查
 */

class One extends Component {

    // 限制myString属性的类型为string。当不是string时，控制台会有警告
    // 注意：静态属性的写法并未被正式通过，需要像transform-class-properties这样的转换器
    static propTypes = {
        myString: PropTypes.string,
    }

    render() {
        return <div>string:{this.props.myString}</div>
    }
}

// TODO：验证器的具体用法请查看文档

class Three extends Component {

    static propTypes = {
        // 这种用法可以限制单个子代
        children: PropTypes.element,
    }

    // 如果指定多个子代可以使用数组类型
    // 原因请看aaa/aka/

    render() {
        return (
            <div>
                children:{this.props.children}
            </div>
        );
    }
}

class Four extends Component {

    // 使用defaultProps指定属性的默认值
    // defaultProps也接受propTypes的属性类型检查
    static defaultProps = {
        myName: 'this is default name',
    }

    render() {
        return (
            <div>default name:{this.props.myName}</div>
        )
    }
}

export class AsaAaa extends Component {
    render() {
        return (
            <div>
                <One myString={'my string in one'}/>
                <br/><br/><br/>
                <Three>
                    <span>1 of component three.</span>
                </Three>
                <br/><br/><br/>
                <Four/>
            </div>
        );
    }
}