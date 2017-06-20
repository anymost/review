/**
 * 1 实例
 *      vue实例会代理其data属性
 *      vm.$property 来访问其实例属性
 *      八个生命周期函数
 * 
 * 2 插值语法
 *      v-html 解析html
 *      {{}}支持任意合法的javascript表达式
 *      指令参数修饰符  v-on:click.prevent
 *      过滤器&编写过滤器 filters
 * 
 * 3 计算属性
 *   computed vs methods
 *   computed vs watch
 *   
 * 4 class & style
 * class : 
 *      对象语法 数组语法 计算属性
 * style : 
 *      对象语法 数组语法
 * 
 * 5 条件渲染
 *      使用template进行块条件渲染
 *      v-if v-els-if v-else
 *      使用key进行缓存
 *      v-if vs v-show
 * 
 * 6 列表渲染
 *      template 
 *      数组渲染 (value, index) in arrays
 *      对象渲染 (value, key, index) in object
 *      整数迭代渲染 item in 10
 *      v-for with v-if v-for的优先级由于v-if 因此，在每一个列表渲染的子项中将进行判断
 *      使用key来提高效率 such as :key="index"
 *      数组渲染时，可以监听数组的一些方法的使用push,pop,shift,unshift,splice,reverse,sort
 *      还可以在渲染的时候，通过将要渲染的数据传入一个函数进行过滤
 * 
 * 7 事件处理
 *   如果有其他参数，访问event时需要手动传入 @click="handle(args, $evnt)"
 *   修饰符 .stop .prevent .capture .once .self
 * 
 * 8 表单控件
 * 
 * 
*/