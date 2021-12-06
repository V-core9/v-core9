module.exports = {
    mode: appMode,
    entry: {
      v_app: "./source/v_app.js",
    },
    target: "web",
    output: {
      path: path.resolve(__dirname, "PUBLIC"),
      filename: "[name].V-core9.js",
      clean: cleanOutput,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };