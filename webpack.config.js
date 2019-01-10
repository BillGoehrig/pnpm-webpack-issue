const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'main.js'),
  output: {
    path: path.join(__dirname, "lib"),
    filename: "main.bundle.js",
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: require.resolve('style-loader') },
          {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: require.resolve('style-loader') },
          {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 },
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              includePaths: [path.join(__dirname, "node_modules")]
            },
          },
        ],
      },
      {
        exclude: [/\.js$/, /\.s?css$/, /\.json$/],
        use: {
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        }
      },
    ]
  },
};
