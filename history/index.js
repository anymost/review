/**
 * Created by lenovo on 2017/6/15.
 */
/**
 * 前端处理路由的方式
 * 1 historyAPI
 * 当点击页面的某些链接时，可以显示隐藏DOM，发起网络请求，拿到数据进行填充DOM，
 * 同时调用history.pushState()保存状态，第一个参数是状态对象，
 * 第二个参数是title，第三个参数是URL
 *
 * 当点击标签栏的时候，会触发popState事件，这个事件的event.state是前面的
 * pushState的第一个参数，这个参数保存着状态，可以用该状态对象保存的数据来进行填充
 *
 *
 */