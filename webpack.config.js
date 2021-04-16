const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const config = {
    entry: './frontend/starwars.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    },
    plugins:[]
};

if (isProduction) {
    config.plugins.push(
    new webpack.EnvironmentPlugin([
        'NODE_ENV',
        'AUTH0_CLIENT_ID',
        'AUTH0_DOMAIN'
    ]),
    );
} else {
    const Dotenv = require('dotenv-webpack');
    config.plugins.push(new Dotenv());
}

module.exports = config;