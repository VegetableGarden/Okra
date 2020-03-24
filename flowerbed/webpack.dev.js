const path = require("path");
const merge = require("webpack-merge");
const common = require('./webpack.common');
const webpack = require('webpack');
const proxy = require('./proxy-config');

module.exports = merge(common, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../www/'),
        hot: true,
        historyApiFallback: {
            index: path.resolve(__dirname, '../www/index.html'),
        },
        proxy: {
            '/api': proxy        }
    }

});

