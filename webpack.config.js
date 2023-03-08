const path = require('path');

module.exports = {
    mode: 'development',
    watch: false,
    devtool: 'source-map',
    entry: {
        'index.js': './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.less'],
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'exemplo-package',
            type: 'umd'
        },
        globalObject: 'this'
    }
};