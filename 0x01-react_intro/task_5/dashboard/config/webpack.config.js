const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            name: 'index.html',
            inject: false,
            template: './dist/index.html',
        }),
    ],
    devtool: 'inline-source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        static: './dist',
        compress: true,
        open: true,
        hot: true,
        port: 8564,
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
                        loader: 'file-loader!image-webpack-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
};

