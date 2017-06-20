var webpack = require('webpack');
var ExtraTextPlugin = require('extra-text-webpack-glugin');

module.exports = {
    entry : './server.js',
    output : {
        path : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    },
    plugins : [
        new webpack.BannerPlugin('the file is bundle'),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtraTextPlugin()
    ]
};