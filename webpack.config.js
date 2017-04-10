ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [
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
    ],
};