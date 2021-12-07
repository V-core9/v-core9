const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./source/app.js",
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "PUBLIC"),
        filename: "[name].v-core9.js",
        clean: false,
    }
};