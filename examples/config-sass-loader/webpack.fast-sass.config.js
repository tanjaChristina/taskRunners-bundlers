const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "fast-sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}