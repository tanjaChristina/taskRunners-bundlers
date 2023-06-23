const path = require('path');

module.exports = {
    entry: "./myOwnAppName/entry",
    output:{
        path: path.resolve(__dirname, "output-myConfig"),
        filename: "outputBundle-myConfig.js"
    }
}