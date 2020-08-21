const path = require('path');

const config = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "main.js",
        publicPath: "/assets/"
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        publicPath: "/assets/",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    
                ]
            }
        ]
    }
}; 
module.exports = config;