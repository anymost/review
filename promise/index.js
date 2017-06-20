/**
 * Created by lenovo on 2017/3/19.
 */
/**
 * promise 是对异步操作的封装，在异步操作执行成功或失败时，执行对应的
 * 方法 将横向的操作变成纵向的操作
 * promise有三种状态 pending fulfilled rejected
 *
 */

function hello(){
    "use strict";
        return new Promise(function (resolve,reject) {
            setTimeout(()=>{resolve('hello world')},3000);
        });
}
hello().then(function (data) {
   console.log(data);
});