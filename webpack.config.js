const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, arg) => {
  const isDevelopment = arg.mode === 'development';

  return {
    entry: {
      main: './src/index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node-modules/
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src/js')
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            // { loader: "css-modules-typescript-loader"},
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          type: 'asset/resource',
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CleanWebpackPlugin()
    ],
    devServer: {
      port: 9000
    },
    devtool: 'source-map',
  }
}