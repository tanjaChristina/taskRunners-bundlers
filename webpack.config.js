const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
      /* insert image loader config here, all images should be outputted to directory 'asset/resources/images' */
      /* second task involves also a loader dealing with html, here would be a good place for it */
    ]
  },
  devServer:{
    static: './dist'
  },
  output: {
    clean: true
  },
  plugins: [ new MiniCssExtractPlugin()]
};
