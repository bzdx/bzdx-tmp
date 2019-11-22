const path = require('path');
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/js/index.js",
    },
    output: {
        path: path.resolve(__dirname, './static'),
        filename: '[name].js'
    },
    // devServer: {
    //     contentBase: './dist',
    //     host: "127.0.0.1",
    //     port: 8000,
    //     hot: true
    // },
    plugins: [
        // new CleanWebpackPlugin.CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {from: "./src/libs", to: "./libs"},
            {from: "./src/img", to: "./img"},
            {from: "./src/css/", to: "./css"},
            {from: "./src/views", to: "../views"},
        ]),
        new UglifyJsPlugin(),
    ],
    externals: {
        "vue": "Vue",
        "vue-router": "VueRouter",
        "vue-bus": "VueBus",
        "axios": "axios"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            // js IE9
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            // css
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            // stylus
            {
                test: /\.styl$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "stylus-loader"}
                ]
            },
            // pug
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            // picture
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100
                        }
                    }
                ]
            }
        ]
    },
    mode: "development"
};
