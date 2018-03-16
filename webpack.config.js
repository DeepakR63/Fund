var config = {
    entry: './main.js',
    output: {
       filename: 'index.js',
       publicPath: '/',
    },
    devServer: {
       inline: true,
       port: 8080,
       historyApiFallback: true,
    },
    module: {
       rules: [
        {
            test: /\.css$/,
            loader: 'style-loader'
          }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          
          {
             test: /\.js|.css?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;