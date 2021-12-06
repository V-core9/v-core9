const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        v_app: "./source/v_app.js",
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "PUBLIC"),
        filename: "[name].V-core9.js",
        clean: false,
    }
};