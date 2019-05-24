const webpack = require('webpack');

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
                'ts-loader'
            ],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            use: 'css-loader'
        }]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ],
    },
    watch: true
};
