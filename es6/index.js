/**1
 * let 不发生声明提升 typeof在let声明之前访问变量会报错 for+let
 * const 声明的变量为常量 变量对应的值不为常量
 * 块级作用域函数

 * 2  ... 扩散/剩余
 *

 * 3 默认参数

 * 4 解构赋值 针对数组和对象进行解构赋值
 *   对象的解构赋值需要使用（）将解构赋值表达式包裹起来
 *   数组和对象的相互解构赋值的四种情况
 *   重复解构赋值
 *   嵌套解构赋值 对于对象来说 只能获取到value的值
 *   参数解构
 *
 * 5 对象的字面量
 *   简约属性
 *   简约方法 允许访问super super仅在简约方法中被允许使用
 *   计算属性
 *   设置[prototype] __proto__
 *
 * 6 模板字符串
 *   允许在字符串中插入变量
 *   允许插入任何合法的表达式
 *   允许换行
 *
 * 7 "=>"箭头函数
 *    这是函数表达式而不是函数声明
 *    =>的this绑定 arguments
 *    bind的参数形式 类似于call
 *
 *    箭头函数的使用规则：
 *    1 一个函数表达式仅仅是return一个值，不需要访问或定义this，不需要递归或嵌套
 *    2 内部函数表达式 需要访问外部的this和arguments
 *
 * 8 for of循环 只能遍历 iterable对象
 *   遍历array时 for in遍历的是key for of遍历的是value
 *   for of 循环包括 数组 字符串 generator 类数组
 *
 * 9 类机制
 *   只能通过new调用
 *   不发生声明提升
 *   extends和super 同样是基于prototype
 *   子类构造器会默认调用父类构造器
 *   子类构造器中调用super之前无法访问this
 *   利用static创建类属性和类方法
 *
 *
 * 10 es6 模块
 *  一个文件一个模块
 *  模块api都是静态的 导出后无法被修改
 *  export和import 必须位于顶层作用域
 *  默认和命名 export和import的形式
 */

/***
 * 1 let/const
 * let 创建块级作用域 不发生声明提升 typeof也不行
 * const声明常量 只是不能给变量重新赋值 可以修改其中的值
 * 
 * 2 ... 扩散/剩余
 * 可以展开一个数组
 * 也可以将剩余的值封装到一个数组中
 * 
 * 3 默认参数 
 * 如果参数中传入undefined，则会调用默认参数
 * 默认参数可以是任意值
 * 
 * 4解构赋值
 * 数组和对象的解构
 * 对象解构赋值 需要添加括号
 * 数组和对象相互解构赋值
 * 省略部分值进行解构赋值
 * 参数解构赋值
 * 
 * 5 对象字面量
 * 简约属性
 * 简约方法
 * 计算属性
 * __proto__属性
 * 
 * 
 * 6 模板字符串
 * ${} 这里面可以放入任何的表达式
 * 
 * 
 * 7箭头函数
 * 根据外层作用域来决定this
 * 箭头函数的使用规则：
 * 1 一个简单的函数表达式，不需要访问函数本身，
 * 不需要递归嵌套 
 * 2 一个内部函数表达式 需要访问外层的this或者是arguments
 * 
 * 
 * 8 for of循环
 * 需要遍历具有迭代器的对象
 * for of与for遍历数组的区别是，一个
 * 遍历的为value，一个遍历的为key
 * for of可以遍历数组，字符串，generator，
 * 类数组
 * 
 * 
 * 9 class
 * 只能通过new调用
 * 不发生声明提升
 * extends和super基于prototype
 * 子类构造函数默认调用父类构造函数
 * 构造函数中，在调用super之前无法访问this
 * 可以使用static定义静态属性和静态方法
 * 
 * 10 模块
 * 一个模块一个文件
 * export和import只能位于顶层作用域
 * 常规和默认的导入导出
 * 
 */

let array = []