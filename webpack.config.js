const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const dotenv = require('dotenv');

// Load .env variables at build time and inject them into the bundle
const envResult = dotenv.config();
const env = (envResult && envResult.parsed) ? envResult.parsed : {};
const defineEnv = {
    'process.env': JSON.stringify({
        TONCENTER_API_KEY: env.TONCENTER_API_KEY || process.env.TONCENTER_API_KEY || '',
        TONAPI_API_KEY: env.TONAPI_API_KEY || process.env.TONAPI_API_KEY || '',
        NODE_ENV: process.env.NODE_ENV || (isProduction ? 'production' : 'development'),
    }),
};

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.DefinePlugin(defineEnv),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: require.resolve('process/browser.js'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets' }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'css', to: 'css' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '...'],
        fullySpecified: false,
        fallback: {
            process: require.resolve('process/browser.js'),
            buffer: require.resolve('buffer/'),
        },
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
