const path = require("path");

module.exports = {
    mode: "production",

    entry: "./src/contactterminator.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    }
};