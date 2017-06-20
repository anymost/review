/**
 * Created by lenovo on 2017/3/20.
 */

module.exports = {
    entry: './home.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                } //将react编译成js文件
            },
        ]
    }
};