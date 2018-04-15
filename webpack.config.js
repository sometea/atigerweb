const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'raw-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html'},
            { from: 'images', to: 'images' },
        ]),
    ],
};