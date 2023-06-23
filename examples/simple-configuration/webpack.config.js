const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./myOwnAppName/entry",
    output:{
        path: path.resolve(__dirname, "output"),
        filename: "outputBundle.js"
    }
}