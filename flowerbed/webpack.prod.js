const path = require("path");
const merge = require("webpack-merge");
const common = require('./webpack.common');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new UglifyjsWebpackPlugin({sourceMap: true}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
    ],
    devtool: 'source-map'
});

