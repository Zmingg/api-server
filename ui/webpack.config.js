const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.yaml'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    unknownContextCritical: false,

    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|ui\/swagger-editor)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        options: {
          context: __dirname,
          configFile: path.resolve(__dirname, '/tsconfig.json')
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot|svg|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    contentBase: devMode ? __dirname : path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: '8725',
    historyApiFallback: true,
    proxy: [{
      path: '/api',
      target: 'http://localhost:3000',
    }, {
      path: '/schemas',
      target: 'http://localhost:3000',
    }, {
      path: '/swagger',
      target: 'http://localhost:3000',
    }]
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
};
