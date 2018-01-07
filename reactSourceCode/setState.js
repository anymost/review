/**
 * 1  更新最终会调用enqueueUpdate方法，
 *    这里会有批量和非批量两种模式，批量会有事务的概念
 * 2  shouldComponentUpdate，componentWillUpdate方法中
 *    不能调用setState，因为这些方法会调用updateComponent方法，
 *    updateComponent方法再调用它们
 * 3 在updateComponent方法中，会解释pureComponent，
 *   shouldComponentUpdate工作原理
 *   processPendingState这个状态更新的队列
 *
 *
*/
