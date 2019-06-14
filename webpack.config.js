const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SvgStore = require("webpack-svgstore-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "webpack-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico",
        }),
        new SvgStore({
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ]
            },
            prefix: "icon-"
        })
    ]
};
