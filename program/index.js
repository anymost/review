/**
 * Created by lenovo on 2017/6/17.
 */
/**
 * 一 基本类型
 * 1 六种类型和typeof
 *  null undefined boolean string number object
 * 2 function.length为函数的形参个数
 * 3 变量没有类型 值才有类型
 * 4  undefined 和 undeclared
 *  if(a){   //报错
 *  }
 *  var a; //不报错
 *  if(a){
 *  }
 *  都可以通过typeof来进行访问
 *
 *  二 值
 *  1 数组  delete删除数组元素但不修改length
 *     类数组转换成数组 Array.prototype.slice.call(ArrayLike)
 *  2 字符串借用数组的方法
 *    Array.prototype.join(string)
 *    Array.prototype.map(String)
 *    chatAt()
 *  3 数字
 *      toExponential() 指数表示
 *      toFixed() 小数位
 *      toPrecision() 有效位数
 *  4 特殊类型的值
 *   null不可赋值 undefined可赋值
 *   void+表达式返回 undefined
 *   NaN 检测方法
 *   传值 简单类型
 *   传引用 复杂类型 array object
 * 
 * 
 * 三 原生函数
 * Number String Boolean Object Date RegExp 
 * new 原生函数()创建的对象 typeof为object 原生函数()创建的对象typeof能够正常执行
 * instanceof 能够正常工作
 * 
 * 1 内部属性[[class]]
 *  Object.prototype.toString.call() 所有值都能正常区分
 * 2 自动装箱 一般不手动装箱 坑
 * 3 拆箱 valueOf()手动拆箱
 * 4 原生函数作为构造函数
 *   Array 不要创建空单元数组
 *   Date new Date().getTime === Date.now()
 * 
 * 
 *
 *
 * 
 *  四 类型转换
 * 1 抽象值操作
 * toString
 *      对于null,undefined boolean，number 调用toString()返回该值本身
 *      对于非基本类型  如果自定义了toString 则调用该方法并返回，不然返回[[class]]内部属性
 * 
 * JSON.stringify
 *      只能返回安全值，不能处理undefine，function，循环引用，如果遇到只是简单的返回null
 *      对于基本值来说，跟toString()的返回值内容相同
 *      对于对象来说，如果定义了toJSON的方法，则对该方法的返回值进行转换
 *      可以使用第二个参数，为字符串数组，定义需要序列化的key，第三个参数定义缩进
 * 
 * toNumber
 *  true => 1
 *  false => 0
 *  null => 0
 *  undefined => NaN
 *  string => Number()
 *  对于非基本类型 首先看valueOf是否返回基本类型，进行强制转换，然后看toString()是否返回基本类型，进行强制转换
 * 
 * toBoolean
 * 假值：
 *  null，undefined，'', 0, false, NaN 除此之外都是真值
 * 除此之外的所有值都是真值，包括:
 * 假值对象(Number(0), Boolean(false), String(''))
 * 空值 [],{},function (){}
 * '0', 'false', '""'
 * 
 * 2 显示强制类型转换
 * 
 * 字符串和数字的转换
 *      Number() --------- String()
 *      +'12'    --------- 12+''
 * 
 * 显示解析数字字符串
 *      Number 可以传入多种类型的值，字符串中只能为数字
 *      parseInt/parseFloat 只能传入字符串 字符串中也可以包含数字之外的值
 *      
 * 显示转换为布尔值
 *      Boolean() !!
 * 
 * && || 选择符表达式
 * a||b   a ? a : b 
 * a&&b   a ? b : a
 * 
 * 宽松相等
 * 当数字和字符串相比较时
 * 42 == '42'   '42' toNumber 42 == 42  true
 * 当字符串和布尔值比较
 * true == '42'  true toNumber 1 == '42' to Number 42 false
 * 只有 null ,undefined互相宽松相等，其他的均不，可以使用强制类型转换
 * 
 * 
 * 
 *
 *
 */

