const path = require('path')
const webpack = require("webpack")
const nodeExternals = requiere("webpack-node-externals")
const terserPlugin = requiere("terser-webpack-plugin")

const config ={
entry: {server:'./src/index.ts'},
output: {
filename: 'server.js',
path: path.join( __dirname, 'dist' ),
publicPath: "/"
},
module: {
rules: [
{
test: /\.ts$/,
exclude: /node_module/,
use: ['ts-loader', 'eslint-loader']
}]},
resolve: {
extensions: [ '.ts', '.tsx' ]
},
target: 'node',
mode: 'development',
plugins:[new webpack.HotModuleReplacementPlugin()],
optimization:{
    minimize: true,
    minimizer:[
        new terserPlugin({
            parallel: 4,
            extractComments: true,
            terserOptions:{
                sourceMap: true,
            }
        })
    ]
}
}

module.exports = () => {
    switch (process.env.NODE_ENV){
        case "production":
            config.mode = "production";
            config.watch = false;
            break;
        case "development":
            config.mode = "development";
            config.watch = false;
            break;    
    }
    return config;
}