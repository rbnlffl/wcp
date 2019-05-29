const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/bundle.ts',
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                'babel-loader',
                'ts-loader',
                'eslint-loader'
            ],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.scss$/,
            use: [
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CopyPlugin([
            { from: 'src/index.html', to: '.' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    devServer: {
        contentBase: 'dist',
        compress: true,
        hot: true
    }
};
