const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static')
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
};