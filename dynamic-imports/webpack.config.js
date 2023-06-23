const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}