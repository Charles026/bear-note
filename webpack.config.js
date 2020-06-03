const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode:'development',
    entry:[
        './src/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
      },
    devtool:'source-maps',
    devServer: {
        contentBase: path.join(__dirname,'src'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true,
      },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'charles.design',
            template: path.resolve('./src/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    module:{
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputpath: './images',
                        name: 'dirname/[hash].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                  }
                }
              },
          ],
       
        
    }
};