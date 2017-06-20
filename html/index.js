/**
 * Created by lenovo on 2017/6/14.
 */

/**CSS盒模型
 * 通过box-sizing:content-box/border-box来设定
 *
 * content-box，则给元素设定的width和height，
 * 为实际内容的宽高，不包含padding，border，margin
 *
 * border-box:则给元素设定的width和height，
 * 包含元素的设计内容宽高，padding，border，
 * 不包括margin
 *
 * 元素的真实大小，由实际内容的宽高，padding，border，
 * margin四者来决定
 *
 * 通过查询offsetWidth只包含width，padding，border
 *
 * border的颜色默认与元素color相同，padding的颜色，默认
 * 与background-color相同
 *
 *
 * 块级元素的width margin-left margin-right可以设为auto
 * 在其他属性都为0的情况下
 * 1 如果其中的一个属性为auto，其他设为定值，那么这个属性的实际值
 *   为父元素减去另外两个属性的值
 * 2 如果其中的两个属性为auto
 *   如果width为定值，那么剩下的margin为 （父元素的宽度-width）/2
 *   如果其中的一个margin为定值，那么另一个为auto的margin值为0，
 *   width为父元素的宽度-margin的定值
 * 3 如果其中的三个属性都为auto，那么两个margin都为0
 *
 * 同时，margin也可以为负，只要七个值加起来为父元素的width或height即可
 *
 * margin在垂直方向上会发生重叠 所以实际的margin
 * 要比两者之和小，浮动元素的margin不会发生重叠，
 * 会产生块级框
 *
 * 如果margin和padding的值为百分数时，它的计算值是相对
 * 父元素的宽度来计算的，无论是横向还是竖向都是如此
 *
 * display：block 自动换行，可以设定高
 * display：inline-block 不自动换行，可以设定高
 * display:inline 不自动换行，不可以设定高
 * 都可以设定行高
 *
 *
 *
 *
 *
 *
 * 盒模型
 * offsetWidth
 * border和padding
 * margin的四个情况
 * 元素类型
 *
 */