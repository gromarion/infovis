var v = [{ p:"Hola", c:10 }, { p:"Mundo", c:5 }];

d3.select("#word_frequencies")
  .selectAll("p")
  .data(v)
  .enter()
  .append("p")
  .text(function(d) { return d.p; });

var s = d3.scale.linear.domain([1, 50]).range([0, 30]);
