/**
 * Module contains dev webpack configuration
 * @module _/config/webpack.dev.js
 * @author Igor Ivanov
 */

const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const path = require('path');

const common = require('./webpack.common.js');

const defaultDevPort = 4425;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify('development'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../../', './assets/icons/dev-favicon.png'),
                    to: path.join(__dirname, '../../dist/', './assets/img/favicon.png'),
                },
                {
                    from: path.join(__dirname, '../../', './assets/svg/logo.svg'),
                    to: path.join(__dirname, '../../dist/', './assets/svg/logo.svg'),
                },
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: process.env.DEV_PORT || defaultDevPort,
        hot: true,
    },
});
