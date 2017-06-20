/**
 * Created by lenovo on 2017/3/21.
 */
/**
 * csrf 用户登录网站A，生成cookie，用户在不退出网站A的时候访问网站B
 *
 * 防止：1 使用验证码，每次提交时强制用户交互
 * 2 使用referrer
 * 3 使用随机token，用户每次提交表单时会顺带将该token提交，并且将该token存在cookie中进行比对
 *
 * flexbox 弹性布局
 * 块级元素使用display:flex 行内元素使用display:inline-flex
 * 两根轴，一根主轴，一根交叉轴，容器 项目
 * 六个属性
 * flex-direction:主轴的方向
 * flex-wrap :主轴的换行
 * flex-flow :上面两个属性的结合
 * justify-content:主轴上的对齐方式 flex-start flex-end center space-between
 * align-items :交叉轴上的对齐方式：flex-start flex-end center
 * align-content:多个轴线上的对齐方式：flex-start flex-end center
 *
 *
 * BFC：box formatting context
 * box是页面布局的基本单位，一个页面有多个box构成,元素的类型和display属性决定box的类型
 * formatting context是页面中的一块渲染区域，有一定的渲染规则，决定其中的子元素怎样排布
 * BFC有六条布局的规则：
 * 1 内部的box在垂直方向上一个接一个的排列
 * 2 box在垂直方向上的距离由margin决定，并且margin会发生重叠
 * 3 margin box的左边与包含块border box的左边相接触，即使存在浮动元素
 * 4 BFC区域不会float box相重叠
 * 5 BFC是一个独立的区域，不与外部联系
 * 6 在计算BFC高度时，浮动元素也应该参与
 *
 *常见的会产生BFC的元素
 * 根元素
 * float不为none
 * position为absolute和fixed
 * overflow不会visible
 *
 * 应用：清除浮动，在父元素上设定overflow为auto或hidden，这个时候父元素产生了BFC块
 * 根据BFC的第六条规则，在计算高度时，浮动元素也参与计算，则可以清除浮动
 *
 * 闭包：
 * 函数中包含变量，所以函数执行依赖变量的作用域，而这个作用域是函数定义时决定的，而不是函数调用时决定
 * 因此js函数对象中不仅要保存代码逻辑，还要引用当前的作用域链
 *
 * viewport：是移动设备浏览器上用于展示网页的实际区域，它可能跟浏览器的可视区域的大小不同，这是因为
 * 针对pc写的网页都比较宽，但是移动设备的就没有那么宽（通常移动设备的分辨率很大，但是这不是css的宽度，
 * 有一个值为devicePixelRatio，是屏幕像素与独立像素的比值，独立像素就是css像素，它通常大于1，因此
 * 一个css像素要占多个屏幕的像素），所以会挤在一起，我们将viewport设得大一点，让其产生横向的滚动条
 * 这样就可以划动了
 *
 * 有三个viewport的概念，一个是layout viewport就是默认的viewport，一个是visual viewport，为
 * 浏览器的可视区域大小，一个是ideal viewport就是理想的viewport
 * 设定viewport的宽时，我们设定的是css的px，对应到屏幕像素，就是css px*devicePixelRatio
 * 
 *
 * HTTP2新特性：
 * 1 基于二进制传输 2 头信息使用HPACK压缩 3 多路复用，复用同一个TCP链接 4 服务器推送
 *
 */

