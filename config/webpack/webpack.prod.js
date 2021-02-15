/**
 * Module contains prod webpack configuration
 * @module _/config/webpack.prod.js
 * @author Igor Ivanov
 */
const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new WebpackAssetsManifest({
            output: path.join(__dirname, '../../dist/asset-manifest.json'),
            merge: true,
        }),
        new ImageminPlugin({
            disable: false,
            pngquant: {
                quality: '95-100',
            },
        }),
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify('production'),
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        comparisons: false,
                    },
                    parse: {},
                    mangle: true,
                    output: {
                        comments: false,
                        // eslint-disable-next-line camelcase
                        ascii_only: true,
                    },
                },
                parallel: true,
            }),
        ],
        concatenateModules: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            maxInitialRequests: Infinity,
            minSize: 0,
            maxSize: 200000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    performance: {
        assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    output: {
        filename: 'assets/js/[name].[chunkhash].js',
        path: path.resolve(__dirname, '../../dist'),
    },
});
