
class PieChart {
    constructor (el, chartData, setting) {
        this.el = el;
        var defulatSetting = {
            type: 'pie', // line/circle/dashboard
            width: 180,
            strokeWidth: 18,
            colors: d3.schemeCategory10,
            bgColor: '#ebeef5',
            showText: false, // 文本标签
            textLine: false, // 引导线
            format: null,
            dimension: [], // 第一维度
            metrics: [], //  第二维度
            showTooltip: false,
            margin: {
                top: 25,
                bottom: 25,
                left: 25,
                right: 25,
            }
        }
        this.chartData = chartData;
        this.setting = Object.assign(defulatSetting, setting);
        // this.allKeys = chartData.columns;
        this.type = this.setting.type;
        this.width = this.setting.width;
        this.height = this.setting.width;
        // this.data = this.chartData.rows;
        this.init();
    }

    init() {
        console.log(this);

        var svg = d3.select(this.el)
                    .append("svg")
        
        if (this.setting.type === 'pie') {
            this.renderPie();
        }

    }

    renderPie() {
        var svg = d3.select(this.el).select('svg')
                    .attr("width", this.width)
                    .attr("height", this.height)
                    .attr('viewBox', [0, 0, this.width, this.height])

        var radius = d3.min([this.width, this.height]) / 2;
        var color = d3.schemeCategory10;
        var dataset = this.chartData.rows.map(d => d.value);
        var maxVal = d3.max(dataset);
        var pie = d3.pie(dataset)
            .sort(null) // 禁止排序

            /*=========ARC============*/
        var innerRadius = 0;
        var outerRadius = radius;
        var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
        var textArc = d3.arc().innerRadius(innerRadius + 30).outerRadius(outerRadius);
        // 分组
        var arcs = svg.selectAll("g.arc")
                                    .data(pie(dataset))
                                    .enter()
                                    .append("g")
                                    .attr("class", "unit")
                                    .attr("transform","translate(" + outerRadius + "," + outerRadius + ")");

        // 绘制
        arcs.append("path")
                .attr("fill",function(d,i){
                    return color[i];
                })
                .attr("d",arc);
        // 文字
        arcs.append("text")
            .transition().duration(250)
            .attr("transform",function(d){
                return "translate(" + textArc.centroid(d) + ")";
            })
            .attr("text-anchor","middle")
            .attr("font-size","14")
            .text(function(d){
                return d.value;
            })
        }
}