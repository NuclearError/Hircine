module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ['transform-object-rest-spread'],
      },
    },
    {
      test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]',
        },
      }],
    }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
