/**
 * Created by lenovo on 2017/5/13.
 */
/**
 * 正则表达式
 * 1 String 对象的四种方法
 *  search  不支持g
 *  match 默认匹配第一个 如添加g 则匹配所有匹配的串
 *  replace 默认替换第一个 如添加g 则替换所有匹配的串
 *  split
 *
 * 2 RegExp 构造函数 两个参数
 *  reg对象的5个属性 source global ignoreCase multiline lastIndex
 *  reg对象的2个方法
 *  exec 类似于String的match方法 在正则表达式启用g之后，可以多次调用exec来获取串中的多个
 *  满足条件的子串
 *  test 只是单纯的返回true和false
 *
 *  3  语法
 *  字符类 \d \D \w \W \s \S . [] [^]
 *  重复 {n} {n,} {n,m} ? + *
 *  非贪婪匹配 ?? +? *? {n,m}?
 *  总是默认匹配第一个位置
 *  | 选择
 *  ()的三种作用 分组 提取匹配子串 引用前面匹配的子串
 *  \n 引用 引用前面使用（）匹配的子串
 *
 *  4 位置
 *  ^ $ \b \B g i m
 */
