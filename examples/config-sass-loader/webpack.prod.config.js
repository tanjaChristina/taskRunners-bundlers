const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

/* Webpack v5 comes with the latest terser-webpack-plugin out of the box. If you are using Webpack v5 or above and wish to customize the options, you will still need to install terser-webpack-plugin. Using Webpack v4, you have to install terser-webpack-plugin v4. */

module.exports = {
    output: {
        filename: 'bundle.js',
      },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization:{
		minimize: true,

        minimizer:[
            new CssMinimizerPlugin()
        ]
    }
}