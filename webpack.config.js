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
          test: /\.js?$/, // search for js files
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'] // use es2015 and react
          }
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
       ]
    }
 }
 module.exports = config;