import Vue from 'vue';
import {upperFirst} from 'lodash';
import {camelCase} from 'lodash';

const requireComponent = require.context(
    // 组件文件夹路径
    './base-components',
    // 是否查询子目录
    false,
    // 匹配文件名
    /base-\w+.(vue|js)$/,
)

requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName);

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
            // 剥去文件名开头的 './' 和结尾的扩展名
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    );

    //全局注册组件
    Vue.component(
        componentName,
        // 如果使用'export default'导出则使用default，否则使用根
        componentConfig.default || componentConfig,
    )
});


