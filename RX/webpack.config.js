/**
 * Created by lenovo on 2017/3/20.
 */
var path = require('path');

module.exports = {
    entry: './code',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                } //将react编译成js文件
            },
        ]
    }
};
