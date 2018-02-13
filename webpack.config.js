const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path              = require("path")


module.exports = {

  devtool: "source-map",
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
        test: /app\/.+\.js$/,
        use: {
          loader: "babel-loader"
        }
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
