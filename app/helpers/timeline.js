function Timeline() {
  this.events = [];
  this.xStart = 40; // location that the beginning of the
                    // first event starts at.
                    // xStart is also the 0 mark for the
                    // beginning of the day.
  this.yStart = 105; // the first row for the first event



  var vis = d3.select("#svgVisualize");

  this.xRange = d3.time.scale()
                  .range([40, 1500]) // start and end x values
                  .domain([new Date(2016, 23, 7, 1), new Date(2016, 23, 7, 24)]); // start and end date
  this.xAxis = d3.svg.axis().scale(this.xRange)
                           .ticks(24)
                           .tickFormat(d3.time.format("%I:%M %p"));

   this.ticks = vis.append("svg:g")
                    .call(this.xAxis)
                    .attr("transform", "translate(0, 100)")
                    .attr("class", "axis")
  // tick text
  this.ticks.selectAll("text")
    .style("font-size", 10)
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.5em")
    .attr("transform", "rotate(90)")

  // tick lines
  this.ticks.selectAll("line")
    .attr("y2", 400)


                                      //.attr("dx", "-.8em")
                                      //.attr("dy", ".15em")

  /* Smaller Ticks
  var xAxis2 = d3.svg.axis().scale(xRange)
                          .ticks(24 * 30)
                          .innerTickSize(-100)*/
}

Timeline.prototype.addEvent = function (startTime, endTime, name, color) {
  this.events.push(new Event(startTime, endTime, name, color, this.xRange, this.xStart, this.yStart))

  this.yStart += 25;
};
