const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const entryObj = glob.sync('test/**/*.js')
    .reduce((acc, file) => {
        acc[path.basename(file, path.extname(file))] = file;
        return acc;
    }, {});

module.exports = {
    target: 'node',
    entry: entryObj,
    devtool: "inline-source-map",
    output: {
        path: resolve('.test'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            assets: resolve(".src/assets"),
            elements: resolve(".src/elements"),
            store: resolve(".src/store"),
            utils: resolve(".src/utils"),
            views: resolve(".src/views"),
            test: resolve("test")
        }
    },
    externals: [
        nodeExternals(),
        (context, request, callback) => {
            if (request.includes('/src')) {
                const requestReqwrite = request
                    .replace('/src', '/.src')
                    .replace('../../.src', '../.src');

                console.log(requestReqwrite);
                return callback(null, `commonjs ${requestReqwrite}`);
            }

            callback();
        }
    ],
    plugins: [
        new CleanWebpackPlugin(['.test/*.*'])
    ]
};