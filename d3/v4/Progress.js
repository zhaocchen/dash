class Progress {
    constructor (el, percentage, setting) {        
        this.el = el;
        this.percentage = percentage; // 0-100
        var defulatSetting = {
            type: 'line', // line/circle/dashboard
            width: 180,
            strokeWidth: 18,
            color: '#409eff',
            bgColor: '#ebeef5',
            showText: false,
            format: null,
        }
        this.setting = Object.assign(defulatSetting, setting);
        this.type = this.setting.type;
        this.width = this.setting.width;
        this.height = this.setting.strokeWidth;
        this.scale = d3.scaleLinear();
        this.arc = d3.arc();        	
        this.init();
    }
    init() {
        console.log(this);        
        
        var svg = d3.select(this.el)
                    .append("svg")
                    
        if (this.type === 'line') {
            this.renderLine();
        } else {
            this.renderCircle();
        }           
        
    }
    renderLine() {
        this.scale.range([0, this.width]).domain([0, 100])
        var widthRect = this.scale(this.percentage)
        var boerderRadius = this.height * 0.4

        var svg = d3.select(this.el).select('svg')
                    .attr("width", this.width)
                    .attr("height", this.height)
                    .attr('viewBox', [0, 0, this.width, this.height])
        var g = svg.append('g')
        g.append('rect').attr('class', 'porgress-bg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', this.setting.bgColor)
            
        g.append('rect').attr('class', 'progress-rect')
            .attr('width', widthRect)
            .attr('height', this.height)
            .attr('fill', this.setting.color)

        g.selectAll('rect')
            .attr('rx', boerderRadius)
            .attr('ry', boerderRadius)

        if (this.setting.showText) {
            var text = g.append('text').attr('class', 'progress-text')
            .attr('x', widthRect)
            .attr('y', this.height / 2)
            .text(this.percentage)
            .attr('font-size', '14px')
            .attr('text-anchor', 'end')
            .attr('dx', -boerderRadius)
            .attr('dy', '7')
            if (this.percentage < 50) {
                text.attr('text-anchor', 'start')
                .attr('dx', 2)
            }

        }
    }
    renderCircle() {
        var radius = this.width / 2
        var outerRadius = radius;
        var innerRadius = radius - this.setting.strokeWidth

        if (this.type === 'circle') {
            var degress = Math.PI
            this.scale.range([0, 2 * degress]).domain([0, 100])

        } else {
            var degress = 5 / 6 * Math.PI
		    this.scale.range([-degress, degress]).domain([0, 100])
        }
        
        this.arc.outerRadius(outerRadius)
					.innerRadius(innerRadius)
                    .startAngle(this.scale(0))
                    
        var svg = d3.select(this.el).select('svg')
        .attr("width", this.width)
        .attr("height", this.width)
        .attr('viewBox', [0, 0, this.width, this.width])

        var g = svg.append('g')
        .attr('transform', `translate(${radius},${radius})`)

        var arcBg = this.arc.endAngle(this.scale(100))
        g.append('path').attr('class', 'porgress-bg')
            .attr('d', arcBg)				
            .attr('stroke-width', this.height)
            .attr('fill', this.setting.bgColor)

        var arcProgress = this.arc.endAngle(this.scale(this.percentage))
        g.append('path').attr('class', 'porgress-path')
            .attr('d', arcProgress)
            .attr('stroke-width', this.height)
            .attr('fill', this.setting.color)            

        if (this.setting.showText) {
            var text = g.append('text').attr('class', 'progress-text')
            .text(this.percentage)
            .attr('font-size', '14px')
            .attr('text-anchor', 'middle')
        }
    }
    updateColor(color) {
        // 

    }
}