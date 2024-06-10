const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/route.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
  devtool: false,
};
