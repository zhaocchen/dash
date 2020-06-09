# z-charts实现汇总

### 基础图

说明：核心简略图+标记+hover提示+图例(图例位置)+hover动画+放缩操作+自定义

- 进度条progress
  - [横向进度条效果图-v4](https://daaasheng.github.io/dash/d3/v4/progress-line.html)
  - [环形进度条效果图-v4](https://daaasheng.github.io/dash/d3/v4/progress-circle.html)
  - [仪表盘效果图-v4](https://daaasheng.github.io/dash/d3/v4/progress-dashboard.html)

|参数|说明|类型|可选值|默认值|
|:-|:-:|-:|-:|-:|
|percentage|百分比(必填)|Number|0-100|0|
|type|类型|String|line/circle/dashboard|line|
|width|画布宽度|Number|-|360(line)/180|
|strokeWidth|进度条宽度|Number|-|12|
|color|进度条颜色|String/array|#6位十六进制|\#409eff|
|bgColor|进度条背景颜色|String|#6位十六进制|\#ebeef5|
|showText|是否显示文字内容|Boolean|true/false|false|
|form|文本格式化方法|Function|||

- 饼形图
  - 饼形Pie
  	- [v3](https://daaasheng.github.io/dash/d3/v3/pie.html)
    - [v4](https://daaasheng.github.io/dash/d3/v4/pie-v4.html)  
    - [3d效果v4](https://daaasheng.github.io/dash/d3/v4/pie-3d-v4.html)    
  - 环形ring
  	- [v3](https://daaasheng.github.io/dash/d3/v3/ring.html)  
  	- [v4](https://daaasheng.github.io/dash/d3/v4/ring.html)  
    - 南丁格尔玫瑰图(coxcomb/rose)
    - 南丁格尔玫瑰图-中间镂空(coxcomb/rose)  
      - [v4](https://daaasheng.github.io/dash/d3/v4/rose.html)    
list: label标记，hover放大偏移, 图例legend

|参数|说明|类型|可选值|默认值|
|:-|:-:|-:|-:|-:|
|columns|维度和指标的集合(必填)|Array|-|-|
|rows|数据的集合(必填)|Array|-|-|
|type|类型|String|pie/ring/rose|pie|
|dimension | 维度| | | |
|metrics  | 指标 | | | |

- 条形图
  - 柱状图(直方图)histogram
  	- [v3](https://daaasheng.github.io/dash/d3/v3/bar.html) 
  	- [v4简洁版](https://daaasheng.github.io/dash/d3/v4/histogramSimple.html) 
  	- [v4](https://daaasheng.github.io/dash/d3/v4/histogram.html)

  - 条形图(柱状横向)Horizontal Bar
  	- [v3](https://daaasheng.github.io/dash/d3/v3/barH.html) 
  	- [v4](https://daaasheng.github.io/dash/d3/v4/bar.html)
  - 分组柱状图（图例）
  	
  - 堆积条形图Stack Bar（图例）  		
  	- [v4](https://daaasheng.github.io/dash/d3/v4/stackedHistogram.html)
  	- [参考1](https://blog.csdn.net/dkr380205984/article/details/81704435)

|参数|说明|类型|可选值|默认值|
|:-|:-:|-:|-:|-:|
|columns|维度和指标的集合(必填)|Array|-|-|
|rows|数据的集合(必填)|Array|-|-|
|type|类型|String|histogram/bar|histogram|
|stack|堆叠|Boolean|true/false|false|

- 折线图  	
  - 折线图line
    - [简易v4](https://daaasheng.github.io/dash/d3/v4/simpleLine.html)
    - [时间标记横轴v4](https://daaasheng.github.io/dash/d3/v4/lineOfTime.html)
    - [多条v4](https://daaasheng.github.io/dash/d3/v4/multiLine.html)      
  - 面积图area
      - [v4](https://daaasheng.github.io/dash/d3/v4/area.html)
        - [时间标记横轴v4](https://daaasheng.github.io/dash/d3/v4/areaOfTime.html)
  - 堆积面积图Stack Area

|参数|说明|类型|可选值|默认值|
|:-|:-:|-:|-:|-:|
|columns|维度和指标的集合(必填)|Array|-|-|
|rows|数据的集合(必填)|Array|-|-|
|type|类型|String|line/area|line|

- 散点
- 雷达图radar
- 热力图hotmap

- 地图

### 组合及定制图

- 仪表盘Gauge
  - [油表](https://daaasheng.github.io/dash/d3/v4/gauge-oil.html)
  - [油表2](https://daaasheng.github.io/dash/d3/v4/axis-circle.html)

### 3d

- 3d饼形
- 3d环形ring

[颜色渐变+透明度渐变](https://daaasheng.github.io/dash/d3/linearGradient/area.html)

### 参考

[油表参考1](http://bl.ocks.org/metormote/6392996)

[油表参考2](http://bl.ocks.org/NPashaP/59c2c7483fb61070486835d15c807941)

[动画](http://bl.ocks.org/brattonc/b1abb535227b2f722b51)

[path-w3](https://www.w3.org/TR/SVG/paths.html)

[echarts传送门](https://www.echartsjs.com/examples/zh/index.html)

[v-charts传送门](https://v-charts.js.org/#/)

 [波浪水球](https://daaasheng.github.io/dash/d3/v3/demo/LiquidFillGauge.html)

### d3 学习图例

- 简单图  
  - 网格
  - 刻度
  - 竖直刻度
  - 时间轴
  - [直角坐标轴](https://daaasheng.github.io/dash/d3/v4/axis-rect.html)
  - 环形坐标轴
  - 图例
  
- 事件
  - hover
  - 拖拽drag
  - 放缩zoom
  - force

### svg 学习图例https://daaasheng.github.io/dash/d3/svg/

- 画布
  - width, height, 默认是300*150
  - xmlns='http://www.w3.org/2000/svg' 
  - transform='translate(left,right)'
- 直线（线条）<line></line>
  
  - x1,x2,y1,y2
  - 轮廓 stroke
  - 轮廓宽 stroke-width
  - 透明度 stroke-opacity
  - 虚线 stroke-dasharray
  - 线帽 stroke-linecap
- 矩形<rect></rect>
- 圆角rx,ry
- 圆形
  - <circle></circle>r
  - <ellipse></ellipse> rx, ry
  - 定位 cx, cy
  - 填充(默认填充轮廓色) fill
  - stroke
  - stroke-width
- 文本<text></text>
  - 分割 <tspan></tspan>， 布局dx，dy
  - 字体 font-style: italic
  - 粗细 font-weight: bold
  - 对齐 text-anchor: start|middle|end
  - 上下标 baseline-shift: super|sub
  - 轮廓 stroke: color;stroke-width: 0.5px; fill: none;
  - 文本装饰 text-decoration: underline|overline|line-through
  - 文本模式 writing-mode: tb
  - 方向 direction: rtl
  - 旋转 rotate
  - 文字长度 textLength
- 文本路径<textPath></textPath>
  借助<use></use>对应id使用defs中的path
- 折线 <polygon></polygon>
  - 转折点 points
  - fill
  - stroke
  - stroke-width
  - 转角样式 stroke-linejoin: miter|round|bevel
- 路径 <path></path>
  - fill: none
  - fill-opacity: 
  - fill-rule: nonzero|evenodd
- 图片 <image></image>
- 插入外部标签<object>
- 动画animate

  - attributeName 

  - from/to
  - dur ="5s"
  - 
- 动画animateTransform（不推荐）
- 动画animateMotion
- 动画animateMotion+mpath（不推荐）

