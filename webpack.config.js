module.exports = {
  context: __dirname + "/src",
  entry: {
    jsx: "./app.jsx",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]"},
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
