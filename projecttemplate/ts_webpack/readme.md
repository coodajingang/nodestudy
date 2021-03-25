# 环境搭建模板 TS + webpack 
https://www.webpackjs.com/configuration/dev-server/#devserver-open
## 功能 
1. webpack自动打包ts为js文件 
2. 热更新加载
3. 单元测试 

```
mkdir xxx & cd xxx
npm init -y 
tsc --init
```
## 依赖安装 
### tsconfig 配置  
```
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "*.test.ts"],
  "compilerOptions": {
      "target": "ES2015",
      "module": "ES2015", 
      outDir": "./build", 
  }
```

### webpack 
`npm install -D webpack webpack-cli typescript ts-loader` 

创建webpack.config.js 并进行配置 
1. 创建entry 入口文件 
2. 创建output 打包输出文件
3. 使ts文件可以作为模块使用，定义resolve 
4. 定义module ，对ts结尾文件创建ts-loader规则 

### webpack插件安装 
`npm i -D clean-webpack-plugin html-webpack-plugin`

在webpack.config.js中引入插件 
```
// 插件用于生成html文件，自动注入js链接 
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 插件用于build前清楚dist目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
```

### 热加载webpack-dev-server 
`npm i -D webpack-dev-server ` 
在package.json中添加命令： 
`"start": "webpack serve --port 3000 --open chrome.exe"`
`"start": "webpack serve --port 3000 --open 'Google Chrome'"`

### 安装babel，提供打包文件兼容性
`npm i -D @babel/core @babel/preset-env babel-loader core-js `
配置 参见webpack配置文件。

### 编译打包命令 
` "build": "webpack"` 添加到package.json中。 

至此搭建完成 。

## 总结 
安装命令 ： 
```
mkdir xxx & cd xxx
npm init -y 
tsc --init

npm install -D webpack webpack-cli typescript ts-loader clean-webpack-plugin html-webpack-plugin webpack-dev-server @babel/core @babel/preset-env babel-loader core-js
```
然后拷贝配置文件tsconfig.json, webpack.config.js内容即可

## 高级配置 
1. 单元测试/mock
2. sourcemap 
3. 构建优化 
