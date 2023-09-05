const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[content hash].css"
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new webpack.ProvidePlugin({
    React: "react"
  })
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target,
  plugins,
  devtool: "source-map",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
    hot: true
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },

  stats: {
    children: true
  },

  module: {

    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      context: path.resolve(__dirname, "src/context/"),
      consts: path.resolve(__dirname, "src/consts/")
    }
  }
};