var MyExampleWebpackPlugin = require('./webpack-plugins/MyExampleWebpackPlugin');

module.exports = {
    plugins:[
        new MyExampleWebpackPlugin({options:true})
    ]
}