const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },
  // watch: true,

  optimization: {
    // [...]
    minimize: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
});
