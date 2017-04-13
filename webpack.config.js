const webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),  
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'postcss-loader'],
                }),
            }, 
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.[name].css'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};