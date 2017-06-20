/**
 * Created by lenovo on 2017/6/10.
 */
/**
 * Async/Await 的优点：
 * 1 内置运行器 无需co
 * 2 语义清晰
 * 3 await 后面既可以 处理promise 也能处理常规数据类型 number string boolean
 *
 * Async 函数中可以返回promise对象,用于进一步处理
 *
 * await 后面的promise对象的状态可能为reject 所以最好应该await语句用try catch包裹
 *
 * await只能放在async函数中，如果放在其他函数中，会报错
 *
 * 如果遇到多个promise并发的情况下 应该使用await Promise.all()
 *
 */


