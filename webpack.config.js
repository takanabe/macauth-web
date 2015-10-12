module.exports = {
  context: __dirname + "/src",
  entry: {
    jsx: "./app.jsx",
    css: "./main.css",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
};
