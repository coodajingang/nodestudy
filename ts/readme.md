## 创建过程
* mkdir ts  & cd ts
* 初始化 npm init -y  
* npm install -D webpack webpack-cli typescript ts-loader
* 配置webpack create file webpack.config.js And config.  
* 配置ts作为模块 resolve 
* 安装webpack插件 npm i -D clean-webpack-plugin html-webpack-plugin 
* 增加build脚本 在package.json中  
* 安装dev server 
  * npm i -D webpack-dev-server 
  * "start": "webpack serve --open --open 3000 chrome.exe" 
* 安装 babel 
  * npm i -D @babel/core @babel/preset-env babel-loader core-js 
  * 配置 