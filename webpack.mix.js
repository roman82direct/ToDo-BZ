const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

const path = require('path');
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true }
                        ]
                    ],
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
            }
        ]
    },

    resolve: {
        alias: {
            '@actions': path.resolve(__dirname, 'resources', 'js', 'components', 'core', 'store', 'actions'),
            '@middlewares': path.resolve(__dirname, 'resources', 'js', 'components', 'core', 'middleware'),
        }
    },
});

