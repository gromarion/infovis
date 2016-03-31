var jsonData = [{
    "title": "I felt creative",
    "values": {
      "Agree": 88,
      "Neutral": 8,
      "Disagree": 4
    }
  }, {
    "title": "I felt an emotional reaction",
    "values": {
      "Agree": 66,
      "Neutral": 22,
      "Disagree": 12
    }
  }, {
    "title": "I learned something new about the text",
    "values": {
      "Agree": 63,
      "Neutral": 24,
      "Disagree": 13
    }
  }, {
    "title": "It confirmed my understanding of the text",
    "values": {
      "Agree": 57,
      "Neutral": 33,
      "Disagree": 10
    }
  }, {
    "title": "It jogged my memory",
    "values": {
      "Agree": 50,
      "Neutral": 35,
      "Disagree": 15
    }
  }, {
    "title": "The Wordle confused me",
    "values": {
      "Agree": 5,
      "Neutral": 9,
      "Disagree": 86
    }
  }
];

showPoll(jsonData);

function showPoll(data) {
  var svg = d3.select("body").append("svg");

  var width = 3000, barHeight = 50;

  var x = d3.scale.linear().range([0, width]);

  svg.attr("width", width).attr("height", barHeight * data.length);

  x.domain([0, 100]);

  drawGreenRectangle(svg, data, barHeight);
  drawYellowRectangle(svg, data, barHeight);
  drawRedRectangle(svg, data, barHeight);

  svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
      .attr("x", function(d) { return 10; })
      .attr("y", function(d, i) { return i * barHeight + barHeight / 2; })
      .text(function(d) { return d.title; });
}

function drawGreenRectangle(svg, data, barHeight) {
  svg.selectAll("rect1")
     .data(data)
     .enter()
     .append("rect")
       .attr("width", function(d) { return x(d.values.Agree); })
       .attr("height", barHeight - 1)
       .attr("x", 300)
       .attr("y", function(d, i) { return barHeight * i; } )
       .attr("fill", "green");
}

function drawYellowRectangle(svg, data, barHeight) {
  svg.selectAll("rect2")
     .data(data)
     .enter()
     .append("rect")
       .attr("width", function(d) { return x(d.values.Neutral); })
       .attr("height", barHeight - 1)
       .attr("x", function (d) { return 300 + x(d.values.Agree); } )
       .attr("y", function(d, i) { return barHeight * i; } )
       .attr("fill", "yellow");
}

function drawRedRectangle(svg, data, barHeight) {
  svg.selectAll("rect3")
     .data(data)
     .enter()
     .append("rect")
       .attr("width", function(d) { return x(d.values.Disagree); })
       .attr("height", barHeight - 1)
       .attr("x", function (d) { return 300 + x(d.values.Agree) + x(d.values.Neutral); } )
       .attr("y", function(d, i) { return barHeight * i; } )
       .attr("fill", "red");
}
