## z-charts实现汇总

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
  - 拖拽
  - 放缩
- 进度条
  - 横向进度条
  - 环形进度条
- 饼形图
  - 饼形Pie
  	- [v3](https://daaasheng.github.io/dash/d3/v3/pie.html)
    - [v4](https://daaasheng.github.io/dash/d3/v4/pie-v4.html)  
    - [3d效果v4](https://daaasheng.github.io/dash/d3/v4/pie-3d-v4.html)  
  - 3d饼形
  - 环形ring
  	- [v3](https://daaasheng.github.io/dash/d3/v3/ring.html)  
  	- [v4](https://daaasheng.github.io/dash/d3/v4/ring.html)  
  - 3d环形ring
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
- 折线图  	
  - 折线图line
    - [简易v4](https://daaasheng.github.io/dash/d3/v4/simpleLine.html)
    - [时间标记横轴v4](https://daaasheng.github.io/dash/d3/v4/lineOfTime.html)
    - [多条v4](https://daaasheng.github.io/dash/d3/v4/multiLine.html)      
  - 面积图area
      - [v4](https://daaasheng.github.io/dash/d3/v4/area.html)
        - [时间标记横轴v4](https://daaasheng.github.io/dash/d3/v4/areaOfTime.html)
  - 堆积面积图Stack Area
- 南丁格尔玫瑰图(coxcomb/rose)
  - [v4](https://daaasheng.github.io/dash/d3/v4/rose.html)  
- 散点

- 地图

- 仪表盘Gauge
  - [油表](https://daaasheng.github.io/dash/d3/v4/gauge-oil.html)
  - [油表2](https://daaasheng.github.io/dash/d3/v4/axis-circle.html)

### 参考

[油表参考1](http://bl.ocks.org/metormote/6392996)

[油表参考2](http://bl.ocks.org/NPashaP/59c2c7483fb61070486835d15c807941)

[动画](http://bl.ocks.org/brattonc/b1abb535227b2f722b51)

[path-w3](https://www.w3.org/TR/SVG/paths.html)

[echarts传送门](https://www.echartsjs.com/examples/zh/index.html)

[v-charts传送门](https://v-charts.js.org/#/)

### d3.v4 学习图例

- 基础函数

```
var dataset = [ 30, 20 , 52 , 2 , 11 ];  
d3.max(dataset) // 52
d3.min(dataset) // 2
d3.extent(dataset) // [2, 52]

var dataset = [
{a: 30},
{a: 20},
{a: 52},
{a: 2},
{a: 11},
]
d3.max(dataset, d => d.a) // 52
d3.min(dataset, d => d.a) // 2
d3.extent(dataset, d => d.a) // (2) [2, 52]
//=================时间timeParse+timeFormat========================
d3.timeParse("%Y")('2007')
// Mon Jan 01 2007 00:00:00 GMT+0800 (中国标准时间)
d3.timeParse("%m/%d/%Y")("11/12/2015")
// Thu Nov 12 2015 00:00:00 GMT+0800 (中国标准时间)
```

- 轴线

```
// ====最小单位， 参数为指向单位的线长度===
tickSize(0)
tickSize(5)
xScale = 
xScale.step()
```

api差异
```
scale.linear() ->scaleLinear()
svg.axis().scale(x).orient("buttom")  -> d3.axisBottom(x)
svg.axis().scale(y).orient("left") -> axisLeft(y)
scale.ordinal().rangeRoundBands([0, width], .1)  -> scaleBand().rangeRound([0, width]).padding(.1)
rangeBand() -> bandwidth()
```

### d3.v3 学习图例

- 绘制circle
- layout.pie+svg.arc()
- drag
- zoom
- force
- [波浪水球](https://daaasheng.github.io/dash/d3/v3/demo/LiquidFillGauge.html)

### svg 学习图例https://daaasheng.github.io/dash/d3/svg/

- 画布
  - width, height, 默认是
- 直线（线条）<line></line>
  - 轮廓 stroke
  - 轮廓宽 stroke-width
  - 透明度 stroke-opacity
  - 虚线 stroke-dasharray
  - 线帽 stroke-linecap
- 矩形
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
  - fill-rule: nonzero|evenodd

- 图片 <image></image>

