const {defineConfig} = require('@vue/cli-service');
const bundleTracker = require('webpack-bundle-tracker');
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "http://127.0.0.1:8080",
    outputDir: "./dist/",

    // --------------------------
    devServer: {
        devMiddleware: {
            headers: {"Access-Control-Allow-Origin": "*"},
            publicPath: "http://127.0.0.1:8080",
        },
        hot: 'only',

    },
    // ---------------------------
    chainWebpack: config => {
        config.optimization.splitChunks(false)
        config.plugin('BundleTracker').use(bundleTracker, [
            {
                filename: './webpack-stats.json'
            }
        ])
        config.resolve.alias.set('__STATIC__', 'static')
    }
})
