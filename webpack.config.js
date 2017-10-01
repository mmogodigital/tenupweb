const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/index.js", "./src/scss/style.scss"]
    },
    output: {
        path: path.resolve(__dirname, "public/static/dist"),
        filename: "js/bundle.js",
        publicPath: '/public/static/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-0", "flow", "env"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    devtool: "source-map", 
    context: __dirname,
    target: "web",
    devServer: {
        proxy: {
          '/api': 'http://localhost:8000'
        },
        contentBase: path.join(__dirname, 'public/static/'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true
      },
    
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.min.css',
            allChunks: true,
        }),
       /* new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js',
        }),*/
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        /*new webpack.DefinePlugin({
            'process.env.NODE_ENV': "dev"
        }),*/
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
		extensions: ['.js', '.css']
	},
	watch: true
}