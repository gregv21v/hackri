function Timeline(y, height, title) {
  this.events = [];
  this.yStart = y + 20; // the first row for the first event
  this.lastYOffset = y + 20;
  this.eventHeight = 25;


  var vis = d3.select("#svgVisualize");
  /*this.title = vis.append("text")
                    .text(title)
                    .attr("x", 20 + 1450 / 2)
                    .attr("y", 20)*/

  this.xRange = d3.time.scale()
                  .range([20, 1450]) // start and end x values
                  .domain([new Date(2016, 23, 7, 1), new Date(2016, 23, 7, 24)]); // start and end date
  this.xAxis = d3.svg.axis().scale(this.xRange)
                           .ticks(24)
                           .tickFormat(d3.time.format("%I:%M %p"));
  this.xAxis2 = d3.svg.axis().scale(this.xRange)
                           .ticks(24 * 6)


  this.ticks = vis.append("svg:g")
                    .call(this.xAxis)
                      .attr("transform", "translate(0, " + this.yStart + " )")
                      .attr("class", "axis")

  this.ticks2 = vis.append("svg:g")
                    .call(this.xAxis2)
                      .attr("transform", "translate(0, " + this.yStart + " )")
                      .attr("class", "axis2")


  // tick text
  this.ticks.selectAll("text")
    .style("font-size", 10)
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.5em")
    .attr("transform", "rotate(90)")

  // tick lines
  this.ticks.selectAll("line")
    .attr("y2", height)
    .attr("stroke-width", 1.5)


  this.ticks2.selectAll("line")
    .attr("y2", height)
    .attr("stroke-width", 0.5)


  /* Smaller Ticks
  var xAxis2 = d3.svg.axis().scale(xRange)
                          .ticks(24 * 30)
                          .innerTickSize(-100)*/
}
/*
  Adds and creates an event
*/
Timeline.prototype.addEvent = function (startTime, endTime, name, color) {
  this.events.push(new Event(startTime, endTime, name, color, this.xRange, this.lastYOffset))
  this.lastYOffset += 25;
};

/*
  Different from add event as it moves an already existing event
*/
Timeline.prototype.moveTo = function (evnt) {
  // cascade events from the top of the Timeline
  this.events.push(evnt)

  // update the events locations
  for (var i = 0; i < this.events.length; i++) {
    this.events[i].updateY(this.yStart + i * 25)
  }

};

Timeline.prototype.moveFrom = function (evnt) {
  var removedEvent = this.remove(evnt.id)

  // update the events locations
  for (var i = 0; i < this.events.length; i++) {
    this.events[i].updateY(this.yStart + i * 25)
  }
};


Timeline.prototype.remove = function (id) {
  var evnt = null
  var index = -1;
  for(var i = 0; i < this.events.length; i++) {
    if(this.events[i].id == id) {
      index = i
      evnt = this.events[i];
    }
  }

  if(index > -1) {
    this.events.splice(index, 1)
  }

  return evnt;
};




Timeline.prototype.getSelected = function () {
  var selected = []
  for(var i = 0; i < this.events.length; i++) {
    if(this.events[i].selected == true) {
      selected.push(this.events[i])
    }
  }
  return selected;
};
