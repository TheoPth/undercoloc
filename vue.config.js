module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        devtool: 'inline-cheap-module-source-map',
        output: {
            // use absolute paths in sourcemaps (important for debugging via IDE)
            devtoolModuleFilenameTemplate: '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        }
    }
}