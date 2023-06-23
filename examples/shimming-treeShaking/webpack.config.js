const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Webpackbar = require('webpackbar');

module.exports = {
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new Webpackbar({
            profile: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            myFunc: [path.resolve(__dirname, './src/someFunction.js'), 'default'],
            join: ['lodash', 'join']
        })
    ],
    optimization: {
        usedExports: true
    }
};