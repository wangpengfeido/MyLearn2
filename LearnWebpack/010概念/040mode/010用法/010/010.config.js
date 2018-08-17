const path = require('path');
const webpack = require('webpack');

// mode会使用webpack的对应配置优化。选项值：development(默认)、production、none
// development:会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin,NamedModulesPlugin。
// production:会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin ,UglifyJsPlugin.
// none:不选用任何默认优化选项

// 注意：设置NODE_ENV并不会改变mode的值

module.exports = {
    entry: {
        main: './src/01.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    // mode
    mode: 'development',
    // mode: 'production',
    // mode: 'none',
};

