const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    performance: {
        maxAssetSize: 1000000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader', // Specify the loader as a string, not in an array
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                    'image-webpack-loader',
                ],
            },
        ],
    },
};
