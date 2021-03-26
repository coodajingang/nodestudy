const path = require('path');

// 插件用于生成html文件，自动注入js链接 
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 插件用于build前清楚dist目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = { 
  mode: "development", // production
  // 定义入口
  entry: "./src/index.ts", 
  /**定义打包输出文件目录和文件名 */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 定义webpack打包文件是否使用箭头函数，对于ie低版本需要打开
    // environment: {
    //   arrowFunction: false
    // }
  },
  /** 可以使用模块引入ts等结尾的文件 */
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            // 使用babel加载器用来使打包的代码可以兼容不同的环境
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "chrome": "70",
                      // "ie": "11"
                    },
                    // 对于不兼容的环境使用corejs进行替换，选择版本3，usage并按需加载打包
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          // 对于ts文件使用ts-loader加载器
          "ts-loader"
        ],
        exclude: /node_mmodules/
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