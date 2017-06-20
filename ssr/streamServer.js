'use strict'
var fs = require('fs')
var path = require('path')
// 定义全局的Vue为了服务端的app.js
global.Vue = require('vue')
// 获取HTML布局
var layout = fs.readFileSync('./index.html', 'utf8')
var layoutSections = layout.split('<div id="app"></div>')
var preAppHTML = layoutSections[0];
var postAppHTML = layoutSections[1];
// 创建一个渲染器
var renderer = require('vue-server-renderer').createRenderer()
// 创建一个Express服务器
var express = require('express')
var server = express()
// 部署静态文件夹为 "assets"文件夹
server.use('/assets', express.static(
    path.resolve(__dirname, 'assets')
))
// 处理所有的Get请求
server.get('*', function (request, response) {
    var stream = renderer.renderToStream(require('./assets/app')())
    response.setHeader("Content-type", "text/html;charset=UTF-8");
    // 将预先的HTML写入响应
    response.write(preAppHTML)
    // 每当新的块被渲染
    stream.on('data', function (chunk) {


        // 将块写入响应
        response.write(chunk)
    })
    // 当所有的块被渲染完成
    stream.on('end', function () {
        // 将post-app HTML写入响应
        response.end(postAppHTML)
    })
    // 当渲染时发生错误
    stream.on('error', function (error) {
        // 打印错误到控制台
        console.error(error)
        // 告诉客服端发生了错误
        return response
            .status(500)
            .send('Server Error')
    })
})
// 监听5000端口
server.listen(3000, function (error) {
    if (error) throw error
    console.log('Server is running at localhost:3 000')
})