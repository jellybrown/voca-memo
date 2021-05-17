const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 7000,
    contentBase: path.resolve((__dirname, "dist")),
    hot: true,
  },
  mode: "development",
};
