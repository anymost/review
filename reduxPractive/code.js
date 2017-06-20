/**
 *redux的设计哲学
 * 1 全局单一的store
 * 2 状态时制度的
 * 3 使用reducer纯函数
 *
 * createStore -> store
 * store.getState()
 * store.dispatch()
 * store.subscribe()
 * reducer
 *
 * 处理流程
 * 用户在视图中做一些操作，触发事件处理函数，
 * 事件处理函数中store.dispatch()
 * 这个时候reducer会自动执行，返回新的状态
 * 当store中的状态改变时，store.subscribe()会自动调用
 * 这个时候可以在store.subscribe()中重新调用视图渲染函数或setState
 * 可以通过store.getState()拿到新的状态
 *
 * redux 异步处理
 * applyMiddleware 可以添加中间件
 * 异步处理使用redux-thunk 或者 redux-promise
 * 执行store.dispatch()可以传入一个function或promise
 *
 * 使用react-redux来封装组件
 *
 * UI组件  只负责视图的展示
 * 容器组件  负责状态和逻辑处理
 *
 * 使用connect将UI组件封装成容器组件
 * 使用mapStateToProps 提供输入逻辑
 * 使用mapDispatchToProps 提供输出逻辑
 * 使用Provider传入store
 *
 *
 *
 */