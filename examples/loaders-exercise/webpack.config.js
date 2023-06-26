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
      },
      /* insert image loader config here, all images should be outputted to directory 'asset/resources/images' */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /* second task involves also a loader dealing with html, here would be a good place for it */
    ]
  },
  devServer:{
    static: './dist'
  },
  output: {
    clean: true,
    assetModuleFilename: 'asset/resources/images/[name][ext]'
  },
  plugins: [ new MiniCssExtractPlugin()]
};
