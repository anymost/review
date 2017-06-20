/**
 * Created by lenovo on 2017/5/24.
 */
let http = require('http');
let client = http.request({
    host : 'localhost',
    port : 3000,
    method : 'GET',
});