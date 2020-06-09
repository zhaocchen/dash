// linear-gradient
const defs = svg.append('defs')

var lg = defs.append('linearGradient')
  .attr('id', 'linear-gradient')
    .attr('x1', '0%')
  .attr('y1', '0%')
  //.attr('x2', '0%')
  //.attr('y2', '100%')
  //.attr('x2', '100%')
  //.attr('y2', '0%')

lg.append('stop')
  .attr("offset", '0%')
  .attr("stop-color", 'hsl(120, 100%, 30%)')
  
lg.append('stop')
  .attr("offset", '40%')
  .attr("stop-color", '#ffffff')
  
lg.append('stop')
  .attr("offset", '100%')
  .attr("stop-color", 'hsl(320, 100%, 50%)')