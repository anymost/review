/**
 * RxJS
 * 惰性的方式推送多值的集合
 *
 * 生产者消费者模式
 * pull 和 push
 * pull 消费者决定消费数据的时机 函数的调用 generator和iterator
 * push 生产者决定消费数据的时机 Promise
 *
 * 一 Observable
 * 1 通过subscribe多处订阅，每次订阅的作用域独立
 * 2 惰性 不调用(订阅)不执行 (函数内部)

 * 3 可以同步或异步地推送值
 * 4 observer.next(value) observer.complete() observer.error(error)
 *  可以使用try catch捕获错误，complete不能发送值  complete和error只能有一个发生
 * 5 通过subscription.unsubscribe()来取消订阅
 *
 * 二 Observer 数据消费者
 * 通过订阅可观察对象获得观察者
 * Observable.subscribe({
 *      next: ()=>{},
 *      error: ()=>{},
 *      complete: ()=>{}
 * });
 * Observable.subscribe(value=>{}, error=>{}, ()=>{})
 *
 * 三 Subscription
 * subscription.unsubscribe()
 * subscription.add()
 *
 * 四 Subject
 * 即是Observable 又是 Observer
 * 允许值被多播到多个观察者的Observable
 * multicasted observable.multicast(subject);
 * multicasted.subscribe()
 * subscription multicasted.connect()
 * subscription.unsubscribe 取消可观察对象的执行
 *
 * 五 Operator
 * 不会改变当前的可观察对象实例，而是返回新的可观察对象
 * 对新的可观察对象尽心订阅 也会对老的可观察对象进行订阅，因此可以形成
 * 操作符的订阅链
 * 实例操作符(this为当前的可观察对象) VS 静态操作符(参数为当前的可观察对象)
 * 一些合并操作符定义为静态(Observable.merge, Observable.combineLatest,Observable.concat())，
 * 是因为其有多个参数，所以无法使用实例操作符（this）
 *
 * 六 Scheduler
 * 用于控制何时启动订阅和发送通知
 *
 *
 *
 * 使用Rx来组织和管理数据的获取和变更 跟vue和react这种MVVM框架结合起来，将数据映射为视图
 * 同步与异步的统一
   获取和订阅的统一
   现在与未来的统一
   可组合的数据变更过程
   数据与视图的精确绑定
   条件变更之后的自动重新计算
 */


/**
 * vue 中使用rxjs 不借助工具
 *   手动订阅某些Observable，在observer里面，把数据设置到Vue的data上
 *   在视图销毁的时候，手动取消订阅
 *
 * vue rx 可以通过操作符处理和聚合数据流
 * vue-rx 2.0在Vue实例上添加了一个subscriptions属性，里面放置各种待绑定的Observable，用的时候类似data
 * scriptions 选项还可以接收函数，这样就可以为每个组件实例返回唯一的 observables :
 *
 *Vue.component('foo', {
 * subscriptions: function () {
 *   return {
 *     msg: Rx.Observable.create(...)
 *   }
 * }
 *})
 *
 * v-stream流式DOM事件 将 DOM 事件流式传递给 Rx Subject
 * subscriptions () {
    // 声明接收的 Subjects
    this.plus$ = new Rx.Subject()
    // 然后使用 Subjects 作为源数据流来创建 subscriptions 。
    // 源数据流以 { event: HTMLEvent, data?: any } 这种形式发出数据
    return {
      count: this.plus$.map(() => 1)
        .startWith(0)
        .scan((total, change) => total + change)
    }
  }
 *
 * 通过this.$watchAsObservable('num')，将vue实例的data，props等转换成可观察对象
 *
 *
 *
 * 减小体积 根据ES6的模块系统按需引入
 * mport Vue from 'vue'
 * import VueRx from 'vue-rx'
 * import { Observable } from 'rxjs/Observable'
 * import { Subscription } from 'rxjs/Subscription' // 如果使用 RxJS 4 可自由使用
 * import { Subject } from 'rxjs/Subject' // domStreams 选项所需
 *
 *  Vue.use(VueRx, {
 *   Observable,
 *   Subscription,
 *   Subject
 *  })
 *
 */

//  function getData() {
//     const couche = Rx.Observable.of(localStore.getItem(key));
//     return cache || Rx.Observable.fromPromise(fetch(api));
//  }
//  getData().subscribe(value => {
//     render(value);
//  })

// function mergeData() {
//     return Rx.Observable.merge(
//         Rx.Observable.fromPromise(fetch(ApI1)),
//         Rx.observable.fromWebSocket(socket1),
//     ).map(item => item.value);
// }
// const observer = {
//     next(value) {
//         container.append(value);
//     },
//     complete() {
//         render(container);
//     },
//     error(error) {
//         dispatch({type: 'error', message: error});
//     }
// }
// mergeData().subscribe(observer)


const observableOne = Observable.fromPromise(fetch(API1));
const observableTwo = Observable.fromPromise(fetch(API2));
const subscriptionOne = observableOne.subscribe(value=>{
    renderOne(value);
});
const subscriptionTwo = observableTwo.subscribe(value=>{
    renderTwo(value);
});
const mergeSubscription = subscriptionOne.add(subscriptionTwo);
Rx.Observable.fromEvent(button, 'click')
    .subscribe(()=>{
        mergeSubscription.unsubscribe();
    });
