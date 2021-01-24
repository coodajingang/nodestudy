const path = require("path")

// 插件用于生成html文件，自动注入js链接 
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 插件用于build前清楚dist目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 定义入口文件
    entry: "./src/index.ts",

    // 定义输出文件
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: { // 用于配置将ts结尾的文件解析为module
        extensions: [".ts", ".js", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "chrome" : "80",
                                           // "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
}