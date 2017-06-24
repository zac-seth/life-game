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
    output: {
        path: resolve('_test-build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            assets: resolve("_src/assets"),
            elements: resolve("_src/elements"),
            store: resolve("_src/store"),
            utils: resolve("_src/utils"),
            views: resolve("_src/views"),
            test: resolve("test")
        }
    },
    externals: [
        nodeExternals(),
        // Rewrite the require paths to use `_src`
        (context, request, callback) => {
            // This is a little messy because tests are not output in original file structure
            // test/index.test.js → _build/index.test.js
            //=> ../src → ../_src
            // test/my-pkg-fldr/my-module.test.js → _build/my-module.test.js
            //=> ../../src → ../_src
            if (request.includes('/src')) {
                const requestReqwrite = request
                    .replace('/src', '/_src')
                    .replace('../../_src', '../_src');

                console.log(requestReqwrite);
                return callback(null, `commonjs ${requestReqwrite}`);
            }

            callback();
        }
    ],
    plugins: [
        new CleanWebpackPlugin(['_test-build/*.*'])
    ]
};