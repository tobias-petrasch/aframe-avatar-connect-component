require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: __dirname,
    filename: "./dist/aframe-avatar-connect-component.min.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
