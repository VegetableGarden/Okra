const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
const outputPath = path.resolve(__dirname, '../www');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
    output: {
        path: outputPath,
        publicPath: '/',
        filename: '[name].[hash]-[id].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
        }),
        new ExtractTextWebpackPlugin({
            filename: '[name]-[chunkhash].css',
            disable: false,
            allChunks: true,
        }),
        new CleanWebpackPlugin([outputPath], {allowExternal: true}),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(le|c)ss$/,
                include: /src/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            url: true,
                            import: true,
                            localIdentName: '[folder]_[name]__[local]__[hash:base64:5]'
                        }
                    },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(le|c)ss$/,
                include: /node_modules/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        },
                    ]
                })
            },
            {
                test: /\.(png|svg|gif|woff|woff2|eot|ttf|otf|)$/,
                use: 'file-loader'
            },
        ]
    }
};

