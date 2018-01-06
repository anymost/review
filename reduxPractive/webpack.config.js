/**
 * Created by lenovo on 2017/3/20.
 */

module.exports = {
    entry: './index.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } //将react编译成js文件
            },
        ]
    }
};
