const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJSON = require(path.join(process.cwd(), 'package.json'));
const appName = packageJSON.name;
const isDev = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: appName + '[hash:8].js',
        chunkFilename: appName + '[name].[hash:8].js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[hash:8].css',
            chuckFileName: isDev ? '[id].css' : '[id].[hash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'media'
                }                
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}