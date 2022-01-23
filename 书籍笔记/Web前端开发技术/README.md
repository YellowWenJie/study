# Web前端开发技术~——HTML5、CSS3、JavaScript（第三版)~

#### 一个完整的JavaScript实现是由三个不同部分组成的

* 核心（ECMAScript）
* 文档对象模型（Document Object Model，DOM）
* 浏览器对象模型（Browser Object Model，BOM）



#### body标记属性

|           属性           |                          值                          |                             说明                             |
| :----------------------: | :--------------------------------------------------: | :----------------------------------------------------------: |
|          alink           |                       颜色属性                       |                    规定文档的活动链接颜色                    |
|          vlink           |                       颜色属性                       |                   规定文档中以被访问的颜色                   |
|           link           |                       颜色属性                       |                   规定文档中未被访问的颜色                   |
|           text           |                       颜色属性                       |                      规定文档的文本颜色                      |
|         bgcolor          |                       颜色属性                       |                      规定文档的背景颜色                      |
| topmargin=0 leftmargin=0 |                      number数值                      |                    网页 内容上/左边界为0                     |
|      οncοntextmenu       |                     return false                     | 鼠标右键限制，在页面的Body范围内，当触发客户端的ContextMenu事件时，返回false值 |
|       οndragstart        |                     return false                     |                     禁止鼠标在网页上拖动                     |
|      onselectstart       |                     return false                     |                       禁止鼠标选中文字                       |
|          οncοpy          |                     return false                     |                           禁止拷贝                           |
|         οnpaste          |                     return false                     |                           禁止粘贴                           |
|          oncut           |                     return false                     |                           禁止剪切                           |
|          style           | overflow:scroll;overflow-y:hidden;overflow-x:hidden; |                   定义滚动条的竖向横向掩藏                   |
|          style           |                     cursor:move                      |                      网页 鼠标 样式选择                      |

#### 控制鼠标的显示效果cursor

* cursor

|   属性    |                             说明                             |
| :-------: | :----------------------------------------------------------: |
|   hand    |                             手型                             |
| crosshair |                            十字型                            |
|   text    |                    移动到文本上的那种效果                    |
|   wait    |                        等待的那种效果                        |
|  default  |                           默认效果                           |
|   help    |                             问号                             |
| e-resize  |                          向右的箭头                          |
| ne-resize |                         向右上的箭头                         |
| n-resize  |                          向上的箭头                          |
| nw-resize |                         向左上的箭头                         |
| w-resize  |                          向左的箭头                          |
| sw-resize |                          左下的箭头                          |
| s-resize  |                          向下的箭头                          |
| se-resize |                         向右下的箭头                         |
|   auto    |                     由 系统 自动给出效果                     |
|   move    |                         移动时的效果                         |
|    “*”    |                  还可以是鼠标图片的文件地址                  |
|   Step1   |                     做个图标arrow_r.cur                      |
|   Step2   | CSS中BODY {cursor: url("arrow_r.cur"), url("arrow_r.cur"), default; } |
|   Step3   | 页面中连接CSS<link rel="stylesheet" type="text/css" href="site.css"> |

#### 标题字标记

`<h1 align="left|center|right|justify"></h1>`

#### 特殊字符对应代码

看这篇文章吧https://blog.csdn.net/sunbocong/article/details/81032758?ops_request_misc=&request_id=&biz_id=102&utm_term=html%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%AF%B9%E5%BA%94%E4%BB%A3%E7%A0%81&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-81032758.first_rank_v2_pc_rank_v29&spm=1018.2226.3001.4187

| 显示结果 | 说明 | 代码符合 |
| :------: | :--: | :------: |
|          |      |          |

#	
#### 文本修饰标记https://www.runoob.com/tags/tag-comment.html

## HTML 文本格式化标签

| 标签                                                     | 描述                                |
| :------------------------------------------------------- | :---------------------------------- |
| [](https://www.runoob.com/tags/tag-b.html)<b>            | 定义粗体文本                        |
| [](https://www.runoob.com/tags/tag-em.html)<em>          | 定义着重文字                        |
| [](https://www.runoob.com/tags/tag-i.html)<i>            | 定义斜体字                          |
| [](https://www.runoob.com/tags/tag-small.html)<small>    | 定义小号字                          |
| [](https://www.runoob.com/tags/tag-big.html)<big>        | 定义大号字，HTML5 不支持 <big> 标签 |
| [](https://www.runoob.com/tags/tag-strong.html)<strong>  | 定义加重语气                        |
| [](https://www.runoob.com/tags/tag-sub.html)<sub>        | 定义下标字                          |
| [](https://www.runoob.com/html/m/tags/tag-sup.html)<sup> | 定义上标字                          |
| [](https://www.runoob.com/tags/tag-ins.html)<ins>        | 定义插入字                          |
| [](https://www.runoob.com/tags/tag-del.html)<del>        | 定义删除字                          |

## HTML "计算机输出" 标签

| 标签                                                | 描述                                    |
| :-------------------------------------------------- | :-------------------------------------- |
| [](https://www.runoob.com/tags/tag-code.html)<code> | 定义计算机代码                          |
| [](https://www.runoob.com/tags/tag-kbd.html)<kbd>   | 定义键盘码                              |
| [](https://www.runoob.com/tags/tag-samp.html)<samp> | 定义计算机代码样本                      |
| [](https://www.runoob.com/tags/tag-var.html)<var>   | 定义变量                                |
| [](https://www.runoob.com/tags/tag-pre.html)<pre>   | 定义预格式文本                          |
| [](https://www.runoob.com/tags/tag-tt.html)<tt>     | 定义打字机代码，HTML5 不支持 <tt> t标签 |

## HTML 引文, 引用, 及标签定义

| 标签                                                         | 描述               |
| :----------------------------------------------------------- | :----------------- |
| [](https://www.runoob.com/tags/tag-abbr.html)<abbr>          | 定义缩写           |
| [](https://www.runoob.com/tags/tag-address.html)<address>    | 定义地址           |
| [](https://www.runoob.com/tags/tag-bdo.html)<bdo>            | 定义文字方向       |
| [](https://www.runoob.com/tags/tag-blockquote.html)<blockquote> | 定义长的引用       |
| [](https://www.runoob.com/tags/tag-q.html)<q>                | 定义短的引用语     |
| [](https://www.runoob.com/tags/tag-cite.html)<cite>          | 定义引用、引证     |
| [](https://www.runoob.com/tags/tag-dfn.html)<dfn>            | 定义一个定义项目。 |

## 字体font标记

| 属性  |  值  | 说明 |
| :---: | :--: | :--: |
| size  | ...  | ...  |
| color |  ..  |  ..  |
| face  |  ..  |  ..  |

## ifname浮动框架

标记一个内联框架：https://www.runoob.com/tags/tag-iframe.html