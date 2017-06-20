/**
 * Created by lenovo on 2017/3/20.
 */
/**
 * sass是一种由ruby编写的css预处理器其主要支持一下的功能
 *
 * 1 变量：$color:blue
 * 2 计算:$size:10px+5px
 * 3 嵌套：支持选择器的嵌套和属性的嵌套
 * div{
 *      h1{
 *          border{
 *              color{
 *
 *              }
 *          }
 *
 *      }
 *
 * }
 * 4 继承
 * .class1{
 *  color:blue
 * }
 * .class2{
 *  @extend .class1
 * }
 *
 * 5 mixin 支持（默认）参数
 * @mixin mix{
 *  color:blue;
 * }
 * div{
 *  @include mix;
 * }
 * 6 支持插入文件
 * @import 'index.sass'
 * @import 'index.css'
 *
 * 7 @if语句
 * @if $index==2px{
 *      $index:3px;
 * }
 * 8 @while语句
 * @while $a>0{
 *      item#{$a}{
 *          color:blue;
 *      }
 *      $a:$a-1
 * }
 * 9 自定义函数
 * @function getColor($color){
 *      @if $color == blue{
 *          return red;
 *      }@else{
 *          return blue;
 *      }
 * }
 * div{
 *  color:getColor(blue);
 * }
 *
 * css transition css属性随着时间变化
 * transition transition-property transition-duration transition-delay
 * transition-timing-function
 * css animation作用域元素本身而不是css样式 可以理解为关键帧的概念
 *
 *
 * css权重：
 * 首先区分样式的来源 一共三种 创作者 读者 代理
 * 读者重要声明>创作者重要声明>创作者常规声明>读者常规声明>代理
 * 然后根据特殊性进行区分
 * 最后如果来源和特殊性都相同，则根据出现的先后顺序
 *
 *
 *
 * font:
 * font-family
 * font-weight
 * font-size
 * font-style
 * font-variant
 *
 *
 */