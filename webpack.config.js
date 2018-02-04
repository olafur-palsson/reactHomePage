const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              publicPath: "./",
              limit: 8192,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],

  entry: "./app/index.js",
  output: {
    filename: "webpack-bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./build"
  }
}
