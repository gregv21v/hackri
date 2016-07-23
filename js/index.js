
/*
  1) Figure out how to setup d3 in this project.
  2) Test d3 in a simple way
  3) Create a simple tree
  4)
*/


$(document).ready(function() {

  var svgContext = d3.select("body")
                    .append("svg")
                      .attr("width", 1000)
                      .attr("height", 1000)

  var axisTimeline = d3.svg.axis()
  var timeline = d3.select("svg")
                  .append("g")
                    .attr("transform", "translate(0,30)")
                    .call(axisTimeline);

  var evn = new Event(0, 0)




})
