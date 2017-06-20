/**
 * Created by lenovo on 2017/6/16.
 */

/**
 * mobx哲学 一切来源于应用的状态都应该自动获取
 *
 * 使用方式：
 * 1 定义可观察的状态
 * 2 创建视图响应状态变化
 * 3 更改状态
 *
 * mobx相关API :
 *  1 [@]observable 定义可观察的状态，可以是数字，字符串，数组，对象
 *      observable无法对原始数据类型进行转换 这里指的是ES5的使用方式 在ES6中使用没有影响
 *      例如 let data = {
 *          time : 0
 *      }
 *      ReactDOM.render(<Container data={data}/>, document.querySelector('#app'));
 *      ReactDOM.render(<Container data={data.time}/>, document.querySelector('#app'));
 *      上面的第一种方式可以，第二种方式不能进行观察
 *  2 [@]computed 创建计算值，如果塔依赖的值变化时，它会自动重新计算
 *  3 autorun 同上，但是autorun不计算返回新的值 所以不能对它进行观察
 *  4 [@]observer 将react组件转换成响应式组件 使用了mobx的autorun包裹了react的render函数
 *  必须在顶层
 *  4 [@]action用于标记修改状态的动作
 *
 */