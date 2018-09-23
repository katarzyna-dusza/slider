const path = require('path');
const webpack = require('webpack')

const providePluginJQuery = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});

module.exports = {
    entry: {
        js: ['./src/scripts/cssModifier.js', './src/scripts/slider.js'],// './scripts/main-mobile.js'],
        css: ['./src/styles/slider.scss']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    },
    plugins: [
        providePluginJQuery
    ],
    mode: 'development'
};
